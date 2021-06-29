
import {AccountClass} from "./Account.class";
import {ShareClass} from "./Share.Class";

export  class CommentClass {
  idcoment: number
  share_experience:ShareClass
  account: AccountClass
  create_date: Date
  content: string

  constructor(idcoment: number, share_experience: ShareClass, account: AccountClass, create_date: Date, content: string) {
    this.idcoment = idcoment;
    this.share_experience = share_experience;
    this.account = account;
    this.create_date = create_date;
    this.content = content;
  }
}
