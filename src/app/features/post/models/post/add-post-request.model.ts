export interface AddPostRequestModel {
  title: string;
  description: string;
  isAnonymous: boolean;
  type: string;
  tags: string[];
  content: string;
}
