import {AccountClass} from "./Account.class";
import {Category} from "./Category";

export class NewsClass {
  idNews: number
  account: AccountClass
  category:Category
  decriptions:string
  title:string
  image:string
  position:string
  salary:string
  work_loaction:string
  degree:string
  major:string
  benefit:string
  sex:string
  name_nd:string
  address_nd:string
  email_nd:string
  profile_language:string
  profile_requirement:string
  phone:string
  status: boolean
  create_date: Date;
  job_requirements:string;
  type_of_work:string;
  working_time: string;
  quanlity:number;


  constructor(idNews: number, account: AccountClass, category: Category, decriptions: string, title: string, image: string, position: string, salary: string, work_loaction: string, degree: string, major: string, benefit: string, sex: string, name_nd: string, address_nd: string, email_nd: string, profile_language: string, profile_requirement: string, phone: string, status: boolean, create_date: Date, job_requirements: string, type_of_work: string, working_time: string, quanlity: number) {
    this.idNews = idNews;
    this.account = account;
    this.category = category;
    this.decriptions = decriptions;
    this.title = title;
    this.image = image;
    this.position = position;
    this.salary = salary;
    this.work_loaction = work_loaction;
    this.degree = degree;
    this.major = major;
    this.benefit = benefit;
    this.sex = sex;
    this.name_nd = name_nd;
    this.address_nd = address_nd;
    this.email_nd = email_nd;
    this.profile_language = profile_language;
    this.profile_requirement = profile_requirement;
    this.phone = phone;
    this.status = status;
    this.create_date = create_date;
    this.job_requirements = job_requirements;
    this.type_of_work = type_of_work;
    this.working_time = working_time;
    this.quanlity = quanlity;
  }
}
