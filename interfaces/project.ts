export interface IProject {
  _id: string;
  title: string;
  slug: string;
  mainImage: any;
  author: IAuthor;
}
export interface IAuthor {
  name: string;
  image: any;
  bio: string;
}
