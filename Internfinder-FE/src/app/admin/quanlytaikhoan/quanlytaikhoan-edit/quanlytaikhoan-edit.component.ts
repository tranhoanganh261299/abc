import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../Services/Account.service";
import {AccountClass} from "../../../model/Account.class";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-quanlytaikhoan-edit',
  templateUrl: './quanlytaikhoan-edit.component.html',
  styleUrls: ['./quanlytaikhoan-edit.component.css'],
  providers:[AccountService ]
})
export class QuanlytaikhoanEditComponent implements OnInit {

  constructor(private  fb: FormBuilder,
              private  accountservice: AccountService,
              private  activatedRouteService: ActivatedRoute,
              private  router: Router,
              private  toast: ToastrService) {
  }
  // @ts-ignore
  public id: number;
  // @ts-ignore
  account: AccountClass= new AccountClass();
  ngOnInit(): void {
    // @ts-ignore
    this.id=this.activatedRouteService.snapshot.params['id'];
    this.accountservice.getOne(this.id).subscribe(data=>{
      this.account=data
      console.log(data)
    },error => console.log(error))
  }
  OnEdit(){
     this.accountservice.edit(this.id,this.account).subscribe(data=>{
       this.toast.success('Cập nhật Thành Công')
       this.router.navigateByUrl('/admin/quanlytaikhoan/index').then(()=>{
          location.reload()
       })
     },error => console.log(error));

  }
  contactForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.maxLength(45)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    status: new  FormControl('')

  });
}
