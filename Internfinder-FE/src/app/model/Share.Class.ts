import {AccountClass} from "./Account.class";
import {CommentClass} from "./Comment.Class";

export  class ShareClass {
  idshare: number
  commentList: CommentClass
  account: AccountClass
  title:string
  content:string
  create_date:Date
  modife_date:Date
  image_path:string

  constructor(idshare: number, commentList: CommentClass, account: AccountClass, title: string, content: string, create_date: Date, modife_date: Date, image_path: string) {
    this.idshare = idshare;
    this.commentList = commentList;
    this.account = account;
    this.title = title;
    this.content = content;
    this.create_date = create_date;
    this.modife_date = modife_date;
    this.image_path = image_path;
  }
}
