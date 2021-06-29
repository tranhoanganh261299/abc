import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../_services/auth.service";
// @ts-ignore

@Component({
  selector: 'app-verify-reset-password',
  templateUrl: './verify-reset-password.component.html',
  styleUrls: ['./verify-reset-password.component.css']
})
export class VerifyResetPasswordComponent implements OnInit {
  isSuccessful = true;
  // @ts-ignore
  isSendMail: boolean;

  // @ts-ignore
  code: string;
  // @ts-ignore
  isSubmited: true;

  // @ts-ignore
  resetGroup: FormGroup;

  error_messages = {

    'password': [
      { type: 'required', message: 'Không được để trống mật khẩu.' },
      { type: 'minlength', message: 'Độ dài mật khẩu phải lớn hơn 6.' },
      { type: 'maxlength', message: 'Độ dài mật khẩu phải nhỏ hơn 30.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'Không được để trống mật khẩu.' },
      { type: 'minlength', message: 'Độ dài mật khẩu phải lớn hơn 6.' },
      { type: 'maxlength', message: 'Độ dài mật khẩu phải nhỏ hơn 30.' }
    ],
  };

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              public formBuilder: FormBuilder,
              private toastr: ToastrService,
              private router: Router) {
    this.resetGroup = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, {
      validators: this.password.bind(this)
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      if (code == null) {
        this.isSendMail = false;
      } else {
        this.isSendMail = true;
        this.isSuccessful = false;
        this.authService.verifyPassword(code).subscribe(
          data => {
            this.isSuccessful = (data.message === 'accepted');
          },
          err => {
            this.isSuccessful = false;
          }
        );
      }
    });
  };

  onSubmit() {
    if (this.resetGroup.value.password === this.resetGroup.value.confirmpassword) {
      this.route.queryParams.subscribe(params => {
        this.code = params['code'];
      });
      this.authService.doResetPassword(this.resetGroup.value.password, this.code).subscribe(data => {
        this.router.navigateByUrl('/login/dangnhap/client'),
          this.toastr.success('Mật khẩu đã được thay đổi!', "Thành công");
      })
    } else {
      this.toastr.error("Trường nhập lại mật khẩu và mật khẩu không giống nhau!", "Lỗi: ", {
      })
    }
  };

  password(formGroup: FormGroup) {
    // @ts-ignore
    const { value: password } = formGroup.get('password');
    // @ts-ignore
    const { value: confirmpassword } = formGroup.get('confirmpassword');
    return password === confirmpassword ? null : { passwordNotMatch: true };
  }

}
