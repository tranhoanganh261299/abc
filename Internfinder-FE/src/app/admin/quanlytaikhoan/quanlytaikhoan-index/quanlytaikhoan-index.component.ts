import { Component, OnInit } from '@angular/core';
import {AccountClass} from "../../../model/Account.class";
import {AccountService} from "../../../Services/Account.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-quanlytaikhoan-index',
  templateUrl: './quanlytaikhoan-index.component.html',
  styleUrls: ['./quanlytaikhoan-index.component.css']
})
export class QuanlytaikhoanIndexComponent implements OnInit {
  constructor(private quanlytaikhoanService: AccountService,
              private  router: Router,
              private  fb: FormBuilder,
              private  toasr: ToastrService) {
  }
  // @ts-ignore
  keyword: string;
  pageOfItems : number = 1
  // @ts-ignore
  public quanlytaikhoans: AccountClass[];
  // @ts-ignore
  public  account: AccountClass;
  ngOnInit(): void {
    this.getAllQuanlytaikhoan();
    // @ts-ignore
    this.account = new AccountClass();
  }
  // delete data
  Ondelete(){
      this.quanlytaikhoanService.delete(this.abc).subscribe(data=>{
        this.toasr.success('Xóa Thành Công tài khoản')
        location.reload()
    })

  }
  abc:any
  getOneId(id: any){
    this.quanlytaikhoanService.getOne(id).subscribe(data=>{
      console.log(id)
      this.abc = id
      console.log(this.abc)
    })
  }
  //index data
  getAllQuanlytaikhoan(){
     this.quanlytaikhoanService.getAll().subscribe(data=>{
      this.quanlytaikhoans = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
  //get id
  OnEdit(idaccount: number){
    this.router.navigate(['/admin/quanlytaikhoan/edit',idaccount])
  }

  search(){
   if(this.keyword == ""){
      location.reload()
   }else {
     this.quanlytaikhoanService.seach(this.keyword).subscribe(data=>{
       this.quanlytaikhoans = data
     });
     console.log(this.quanlytaikhoans);
   }
  }
}
