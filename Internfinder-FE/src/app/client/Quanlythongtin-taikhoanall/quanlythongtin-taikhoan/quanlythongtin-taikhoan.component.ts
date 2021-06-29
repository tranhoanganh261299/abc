import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AccountService} from "../../../Services/Account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountClass} from "../../../model/Account.class";
import {TokenStorageService} from "../../../_services/token-storage.service";

@Component({
  selector: 'app-quanlythongtin-taikhoan',
  templateUrl: './quanlythongtin-taikhoan.component.html',
  styleUrls: ['./quanlythongtin-taikhoan.component.css']
})
export class QuanlythongtinTaikhoanComponent implements OnInit {

  constructor(private  fb: FormBuilder,
              private  accountservice: AccountService,
              private  activatedRouteService: ActivatedRoute,
              private  token: TokenStorageService,
              private  router: Router) {
  }
  public  id_now :number=0
  public id: number=0;
  isLoggedIn = false;
  isnhatuyendung = false;
  // @ts-ignore
  roles: string
  // @ts-ignore
  account: AccountClass=new AccountClass();
  // @ts-ignore
  ngOnInit(): void {
      this.id = this.activatedRouteService.snapshot.params['id'];
      this.accountservice.getOne(this.id).subscribe(data=>{
        this.account=data
      },error => console.log(error))
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
      this.roles = this.token.getUser().roles;
      if(this.isRole(this.roles) == true){
        this.isnhatuyendung = true;
    }

  }
  isRole(  tokenPayload : any) {
    tokenPayload = this.token.getUser().roles;
    for (const role of tokenPayload) {
      if (role === "nhatuyendung") {
        return true;
      }
    }
    return false;
  }
  getOne(){
    this.router.navigate(['/profile/edit',this.id_now])
  }
}
