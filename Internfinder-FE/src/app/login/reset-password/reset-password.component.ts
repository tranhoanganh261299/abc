import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";
// @ts-ignore
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  // @ts-ignore
  account: Account;

  // @ts-ignore
  formGroup: FormGroup;
  isSuccessful = false;
  errorMessage = '';
  isSubmited = false;
  formValid = false;
  error_messages = {

    'email': [
      {type: 'required', message: 'Không được để trống email!'},
      {type: 'pattern', message: 'Vui lòng nhập đúng định dạng email!'}
    ]
  };

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void{
  this.formGroup = this.formBuilder.group({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });
  }
onSubmit() {
  this.isSubmited = true;
  this.authService.resetPassword(this.formGroup.value.email).subscribe(
    data => {
      this.toastr.success("Email đã được gửi!", "Thành công: ", {
      });
      // alert("Gửi email thành công, vui lòng check email!");
      this.router.navigateByUrl("/verify-reset-password");
    },
    err => {
      this.toastr.error("Sai email hoặc email chưa được đăng ký!", "Gửi email thất bại: ", {
      });
    }
  );
}
}
