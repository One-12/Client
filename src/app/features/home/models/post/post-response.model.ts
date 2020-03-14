export interface PostResponseModel {
  id: string;
  title: string;
  content: string;
  views: number;
  points: number;
  type: string;
  tags: TagModel[];
  postedOn: Date;
  commentsCount: number;
  likesCount: number;
  postedBy: UserModel;
}

interface TagModel {
  id: string;
  name: string;
}

interface UserModel {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  middleName: string;
}
