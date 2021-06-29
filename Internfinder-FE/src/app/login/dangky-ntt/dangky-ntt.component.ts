import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../Services/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-dangky-ntt',
  templateUrl: './dangky-ntt.component.html',
  styleUrls: ['./dangky-ntt.component.css']
})
export class DangkyNTTComponent implements OnInit {
  formRegCompany: FormGroup;

  constructor(private formBuild: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute,) {
    //define form
    this.formRegCompany = this.formBuild.group({
      username: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(50),Validators.pattern('^[a-z0-9._-]{3,15}$')]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      re_password:['',[Validators.required]],
      companyName:['',[Validators.required]],
      company_address:['',[Validators.required]],
      taxCode:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      website:['',[Validators.required,Validators.pattern("[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?\\b(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?")]],
      phone:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      email:['',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]]
      }
    );
  }

  validation_messages = {
    'username': [
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Tên không chứa các ký tự đặc biệt' },
      {type:'minlength',message: 'Tên đăng nhập nhiều hơn 5 ký tự' },
      {type: 'maxlength', message: 'Tên đăng nhập ít hơn 50 ký tự'},
    ],
    'password': [
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'minlength', message: 'Mật khẩu nhiều hơn 6 ký tự'},
      {type: 'maxlength', message: 'Mật khẩu ít hơn 20 ký tự'},
    ],
    're_password':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'companyName':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'company_address':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'taxCode':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'pattern',message: 'Số và 10 kí tự!'},

    ],
    'website':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'pattern',message: 'Sai định dạng website!'}
    ],
    'phone':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'pattern', message: 'Số điện thoại 10 số'},
    ],
    'contact':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'email':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Email sai định dạng' }
    ]
  };

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formRegCompany.value);
    {
          if(this.checkPasswords(this.formRegCompany)){
            this.toastr.warning("Mật khẩu và xác nhận mật khẩu không giống nhau","Warning:",{
              timeOut: 1500,
              extendedTimeOut:1500
            })
          }else{
            console.log(this.formRegCompany.value)
            this.authService.registerntd(this.formRegCompany.value).subscribe(
              data => {
                this.toastr.success(data.message, "Hoàn tất ", {
                  timeOut: 3500,
                  extendedTimeOut: 1500
                });
                this.router.navigateByUrl("/login/dangnhap/client",);

              },
              err => {
                this.toastr.error(err.error.message, 'Lỗi: ', {
                  timeOut: 1500,
                  extendedTimeOut: 1500
                });
              }
            );
          }
    }
  }
//Check confirm password is match ?
  checkPasswords(formLogin: FormGroup) { // here we have the 'passwords' group
    const password = formLogin.get('password')!.value;
    const confirmPassword = formLogin.get('re_password')!.value;
    return password === confirmPassword ? null : { notSame: true }
  }
}
