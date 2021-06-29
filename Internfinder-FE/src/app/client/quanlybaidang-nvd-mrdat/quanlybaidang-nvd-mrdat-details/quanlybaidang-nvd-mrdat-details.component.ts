import { Component, OnInit } from '@angular/core';

import {Cv_apply} from "../../../model/Cv_apply";
import {cvapplyService} from "../../../Services/cvapply.Service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AccountClass} from "../../../model/Account.class";
import {AccountService} from "../../../Services/Account.service";

@Component({
  selector: 'app-quanlybaidang-nvd-mrdat-details',
  templateUrl: './quanlybaidang-nvd-mrdat-details.component.html',
  styleUrls: ['./quanlybaidang-nvd-mrdat-details.component.css']
})
export class QuanlybaidangNvdMrdatDetailsComponent implements OnInit {

  constructor( private service: cvapplyService,
               private  router: Router,
               private  activatedRouteService: ActivatedRoute,
               private  toast: ToastrService,
               private  accountservice: AccountService) {
  }
  Cv_list : Cv_apply[] = []
  // @ts-ignore
  cv_apply : Cv_apply
  pageOfItems: number =1
  id_now: number = 0
  id: number =0
  // @ts-ignore
  account: AccountClass=new AccountClass();
  // @ts-ignore
  account
  ngOnInit(): void {
    this.id=this.activatedRouteService.snapshot.params['id'];
    this.getAll(this.id)
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    // @ts-ignore
    this.cv_apply = new Cv_apply();
    this.getAllAccount()
  }
  getAllAccount(){
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    this.accountservice.getOne(this.id_now).subscribe(data=>{
      this.account=data
    },error => console.log(error))
  }

  getAll(id: number){
    this.service.getByidNews(id).subscribe(data=>{
      this.Cv_list = data
    })
  }
  deletebyid(id: any){
  if(id == null){
    this.toast.warning('Xoá không thành công')
  }
  else {
    this.service.deleteId(id).subscribe(data=>{
      this.toast.success('Xóa thành công')
      this.ngOnInit()
    })
  }
  }

}
