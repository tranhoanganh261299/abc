// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {ActivatedRoute, Router} from "@angular/router";
// @ts-ignore
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../_services/token-storage.service";
import {AuthService} from "../../_services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  // @ts-ignore
  formRegCompany: FormGroup;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
              private router: Router,
              private formBuild: FormBuilder,
              private toastr: ToastrService) {

    this.formRegCompany = this.formBuild.group({
        username: ['',[Validators.required]],
        password:['',[Validators.required]],

      }
    );
  }
  validation_messages = {
    'username': [
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'password': [
      {type: 'required',message: 'Trường này không được để trống!'},
    ]
  };

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

    }
  }

  onSubmit(): void {
    console.log(this.form);
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigateByUrl('/admin').then(()=>{
          this.toastr.success('', "Đăng nhập thành công  ");
          location.reload()
        });
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.toastr.error("Sai tên đăng nhập hoặc mật khẩu hoặc tài khoản chưa được kích hoạt", "Đăng nhập thất bại: ", {
          timeOut: 3000,
          extendedTimeOut: 1500
        });
      }
    );
  }


}
