export  class ShareDTO{
  idshare: number
  id_account: number
  title:string
  content:string
  create_date: Date
  modife_date:Date
  image_path:string


  constructor(idshare: number, id_account: number, title: string, content: string, create_date: Date, modife_date: Date, image_path: string) {
    this.idshare = idshare;
    this.id_account = id_account;
    this.title = title;
    this.content = content;
    this.create_date = create_date;
    this.modife_date = modife_date;
    this.image_path = image_path;
  }
}
