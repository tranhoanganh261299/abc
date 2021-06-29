import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {LoadcssServices} from "../../../Services/loadcss.services";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  public payPalConfig ? : IPayPalConfig;

  constructor(public toast: ToastrService,
              public router: Router,private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/pay/css/style-starter.css');
    this.loadcssServices.loadScript('assets/pay/js/jquery-3.3.1.min.js');
    this.loadcssServices.loadScript('assets/pay/js/theme-change.js');
    this.loadcssServices.loadScript('assets/pay/js/tabs.js');
    this.loadcssServices.loadScript('assets/pay/js/owl.carousel.js');
    this.loadcssServices.loadScript('assets/pay/js/jquery.magnific-popup.min.js');
    this.loadcssServices.loadScript('assets/pay/js/bootstrap.min.js');
    this.loadcssServices.loaddCss('assets/Client/CSS/paypal.css');
    this.loadcssServices.loaddCss('assets/Client/CSS/paypal1.css');
  }

  ngOnInit(): void {
    this.initConfig();
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '69.00',
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: '69.00'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: '69.00',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        // @ts-ignore
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        this.router.navigateByUrl('/');
        this.toast.success("Thanh toán thành công!", "Thành công: ", {
        });
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        // @ts-ignore
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

}
