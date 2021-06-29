import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../Services/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-dangkysinhvien',
  templateUrl: './dangkysinhvien.component.html',
  styleUrls: ['./dangkysinhvien.component.css']
})
export class DangkysinhvienComponent implements OnInit {
  formRegStudent: FormGroup;
  constructor(private formBuild: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
    //define form
    this.formRegStudent = this.formBuild.group({
      username: ['',[Validators.required,Validators.minLength(5) ,Validators.maxLength(50),Validators.pattern('^[a-z0-9._-]{3,15}$')]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      re_password:['',[Validators.required]],
      address:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      email:['',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]]
      }
    );
  }

  validation_messages = {
    'username': [
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Tên không chứa các ký tự đặc biệt' },
      {type:'pattern',message: 'Tên đăng nhập nhiều hơn 5 ký tự' },
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
    'address':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'phone':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'pattern', message: 'Số điện thoại 10 số'},
    ],
    'email':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Email sai định dạng' }
    ]
  };

  ngOnInit(): void {
  }

  onSubmit() {
   {
      if(this.checkPasswords(this.formRegStudent)){
        this.toastr.warning("Mật khẩu và xác nhận mật khẩu không giống nhau","Warning:",{
          timeOut: 1500,
          extendedTimeOut:1500
        })
      }
      else {
        this.authService.register(this.formRegStudent.value).subscribe(
          data => {
            console.log(this.formRegStudent.value);
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
