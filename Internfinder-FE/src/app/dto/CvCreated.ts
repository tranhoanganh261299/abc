import {KinhNghiem} from "./KinhNghiem";
import {HocTap} from "./HocTap";

export class CvCreated {
  id: number;
  firstName: string;
  lastName: string;
  dayOfBirth: string;
  phone: string;
  email: string;
  gender: string;
  objective: string;
  avatar: string;
  address: string;
  honNhan: string;
  quocTich:string;
  quocGia: string;
  skills: String;
  thanhTichs: String[];
  kinhNghiems: Array<KinhNghiem>[];
  hocTaps: Array<HocTap>[];


  constructor(id: number, firstName: string, lastName: string, dayOfBirth: string, phone: string, email: string, gender: string, objective: string, avatar: string, address: string, honNhan: string, quocTich: string, quocGia: string, skills: String, thanhTichs: String[], kinhNghiems: Array<KinhNghiem>[], hocTaps: Array<HocTap>[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dayOfBirth = dayOfBirth;
    this.phone = phone;
    this.email = email;
    this.gender = gender;
    this.objective = objective;
    this.avatar = avatar;
    this.address = address;
    this.honNhan = honNhan;
    this.quocTich = quocTich;
    this.quocGia = quocGia;
    this.skills = skills;
    this.thanhTichs = thanhTichs;
    this.kinhNghiems = kinhNghiems;
    this.hocTaps = hocTaps;
  }
}
