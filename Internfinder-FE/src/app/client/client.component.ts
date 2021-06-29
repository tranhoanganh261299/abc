// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { LoadcssServices} from '../Services/loadcss.services';
import {TokenStorageService} from "../_services/token-storage.service";

// @ts-ignore
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

    constructor( private  loadcssServices: LoadcssServices,
                 private  token: TokenStorageService) {
      this.loadcssServices.loaddCss('assets/page/css/bootstrap.css');
      this.loadcssServices.loaddCss('assets/page/css/style.css');
      this.loadcssServices.loaddCss('assets/page/css/styles.css');
      // this.loadcssServices.loaddCss('assets/page/css/form.css');
      // this.loadcssServices.loaddCss('assets/page/css/formtotal.css');
      // this.loadcssServices.loaddCss('assets/page/css/formCV.css');

    }
  ngOnInit(): void {

  }


}
