export interface NewReview {
  image: string;
  username: string;
  dogname: string;
  reviewContent: string;
}

export interface ReviewData {
  _id: string;
  imgUrl: string;
  username: string;
  dogname: string;
  reviewContent: string;
}
