import { Component, OnInit } from '@angular/core';
import { LoadcssServices} from '../Services/loadcss.services';
import {Route, Router} from "@angular/router";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices,
              private  tokenStorage: TokenStorageService,
              private  router: Router) {
    this.loadcssServices.loaddCss('assets/admin/css/sb-admin-2.min.css');
    this.loadcssServices.loaddCss('assets/admin/vendor/datatables/dataTables.bootstrap4.min.css');
    this.loadcssServices.loaddCss('assets/admin/css/switch-btn.css');
    this.loadcssServices.loaddCss('assets/admin/css/choosetemplate.min.css')
    setTimeout(() => {
      this.loadcssServices.loadScript('assets/admin/js/sb-admin-2.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/jquery/jquery.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/jquery-easing/jquery.easing.min.js');
    }, 300);
  }

  // @ts-ignore
  account;
  isLoggedIn = false;
  id_now :number=0
  ngOnInit(): void {

    if(this.tokenStorage.getUser()!=null){
      this.isLoggedIn=true;
    }
    setTimeout(()=>{
      location.reload()
    }, 300000)

  }
  logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

  getOneByID(){
    this.router.navigate(['/profile',this.tokenStorage.getUser().id])
  }

}
