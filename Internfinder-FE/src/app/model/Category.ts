export class Category {
  private _idCategory:number;
  private _name:string;
  private _create_date:string;
  private _status:boolean;

  get idCategory(): number {
    return this._idCategory;
  }

  set idCategory(value: number) {
    this._idCategory = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get create_date(): string {
    return this._create_date;
  }

  set create_date(value: string) {
    this._create_date = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  constructor(idCategory: number, name: string, create_date: string, status: boolean) {
    this._idCategory = idCategory;
    this._name = name;
    this._create_date = create_date;
    this._status = status;
  }
}

