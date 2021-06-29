import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../../Services/loadcss.services";

@Component({
  selector: 'app-pay-package',
  templateUrl: './pay-package.component.html',
  styleUrls: ['./pay-package.component.css']
})
export class PayPackageComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/pay/css/style-starter.css');
    this.loadcssServices.loadScript('assets/pay/js/jquery-3.3.1.min.js');
    this.loadcssServices.loadScript('assets/pay/js/theme-change.js');
    this.loadcssServices.loadScript('assets/pay/js/tabs.js');
    this.loadcssServices.loadScript('assets/pay/js/owl.carousel.js');
    this.loadcssServices.loadScript('assets/pay/js/jquery.magnific-popup.min.js');
    this.loadcssServices.loadScript('assets/pay/js/bootstrap.min.js');
  }

  ngOnInit(): void {
  }

}
