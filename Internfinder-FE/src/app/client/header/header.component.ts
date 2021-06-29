import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";
import {TokenStorageService} from "../../_services/token-storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private  loadcssServices: LoadcssServices,
              private tokenStorage: TokenStorageService,
              private  router: Router) {

    this.loadcssServices.loaddCss('assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/custom.js');
  }
  // @ts-ignore
  roles: string
  // @ts-ignore
  account;
  isLoggedIn = false;
  isnhatuyendung = false;
  id_now :number=0
  ngOnInit(): void {

    if(this.tokenStorage.getUser()!=null){
      this.isLoggedIn=true;
      this.roles = this.tokenStorage.getUser().roles;
      if(this.isRole(this.roles) == true){
        this.isnhatuyendung = true;
      }
    }
  }

  isRole(  tokenPayload : any) {
     tokenPayload = this.tokenStorage.getUser().roles;
    for (const role of tokenPayload) {
      if (role === "nhatuyendung") {
        return true;
      }
    }
    return false;
  }

  getOneByID(){
    this.router.navigate(['/profile',this.tokenStorage.getUser().id])
  }
  getOneByID2(){
    this.router.navigate(['/quanlycv-sv', this.tokenStorage.getUser().id])
  }



  logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
