export  class CommentDTO{
  idcoment: number
  id_share: number
  id_account: number
  content: string
  create_date: Date

  constructor(idcoment: number, id_share: number, id_account: number, content: string, create_date: Date) {
    this.idcoment = idcoment;
    this.id_share = id_share;
    this.id_account = id_account;
    this.content = content;
    this.create_date = create_date;
  }
}
