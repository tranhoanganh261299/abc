import {NewsClass} from "./News.class";
import {AccountClass} from "./Account.class";

export  class Cv_apply{
  id_apply: number
  news: NewsClass
  account:  AccountClass
  url: string
  create_date: Date


  constructor(id_apply: number, news: NewsClass, account: AccountClass, url: string, create_date: Date) {
    this.id_apply = id_apply;
    this.news = news;
    this.account = account;
    this.url = url;
    this.create_date = create_date;
  }
}
