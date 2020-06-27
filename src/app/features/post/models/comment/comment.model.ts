export interface CommentModel {
  id: string;
  comment: string;
  postedOn: string;
  showReply: boolean;
  postedBy: UserModel;
  replies: CommentModel[];
}

interface UserModel {
  id: string;
  name: string;
  profilePic: string;
}
