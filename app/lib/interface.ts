export interface IPost {
  title: string;
  overview: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}
