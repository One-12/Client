import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PostResponseModel } from '../../models/post/post-response.model';
import { PostsActions, PostsActionType } from './posts.actions';
import { EMPTY_STRING } from '../../../shared/constants/constants';

export interface PostsState extends EntityState<PostResponseModel> {
  isCreatingPost: boolean;
  isUploadingContent: boolean;
  uploadedContentUrl: string;
}

export const postsAdapter: EntityAdapter<PostResponseModel> = createEntityAdapter<PostResponseModel>();

export const initialState: PostsState = postsAdapter.getInitialState({
  isCreatingPost: false,
  isUploadingContent: false,
  uploadedContentUrl: EMPTY_STRING,
});

export function postsReducer(state: PostsState = initialState, action: PostsActions): PostsState {
  switch (action.type) {
    case PostsActionType.UploadContent: {
      return { ...state, isUploadingContent: true };
    }

    case PostsActionType.ContentUploaded: {
      return { ...state, isUploadingContent: false, uploadedContentUrl: action.payload };
    }

    case PostsActionType.CreatePost: {
      return { ...state, isCreatingPost: true };
    }

    case PostsActionType.PostCreated: {
      return postsAdapter.addOne(action.payload, { ...state, isCreatingPost: false });
    }

    default: {
      return state;
    }
  }
}
