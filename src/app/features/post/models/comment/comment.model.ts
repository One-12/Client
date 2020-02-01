export interface CommentModel {
  id: string;
  postedBy: UserModel;
  postedOn: string;
  comment: string;
  replies: CommentModel[];
}

interface UserModel {
  id: string;
  profilePic: string;
}
