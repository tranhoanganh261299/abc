import { Component, OnInit } from '@angular/core';
import {NewsClass} from "../../model/News.class";
import {LoadcssServices} from "../../Services/loadcss.services";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";
import {ToastrService} from "ngx-toastr";
import {baidangservice} from "../../Services/baidangservice.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {newdto} from "../../model/Newdto";
import {Category} from "../../model/Category";
providers: [baidangservice  ]

@Component({
  selector: 'app-editbaidang',
  templateUrl: './editbaidang.component.html',
  styleUrls: ['./editbaidang.component.css']
})
export class EditbaidangComponent implements OnInit {
  // @ts-ignore
  private idNews: number;

  constructor(private  loadcssServices: LoadcssServices, private route: ActivatedRoute,
              private  token: TokenStorageService, private router: Router,private  toast: ToastrService,
              private newServiceService: baidangservice,private formBuild: FormBuilder) {
    this.loadcssServices.loaddCss('assets/Client/CCS/stylesMH.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.formUpload = this.formBuild.group({
      title: ['',[Validators.required]],
      major: ['',[Validators.required,Validators.maxLength(100)]],
      salary: ['',[Validators.required]],
      quanlity: ['',[Validators.required,Validators.pattern('^[1-9][0-9]*$')]],
      work_loaction: ['',[Validators.required]],
      position: ['',[Validators.required]],
      category_idCategory: ['',[Validators.required]],
      type_of_work: ['',[Validators.required]],
      decriptions: ['',[Validators.required]],
      benefit: ['',[Validators.required]],
      sex: ['',[Validators.required]],
      degree: ['',[Validators.required]],
      working_time: ['',[Validators.required]],
      profile_language: ['',[Validators.required]],
      job_requirements: ['',[Validators.required]],
      profile_requirement: ['',[Validators.required]],
      name_nd: ['',[Validators.required,Validators.maxLength(100)]],
      sdt_nd:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      address_nd: ['',[Validators.required]],
      email_nd:['',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]]
      }
    );
  }
  validation_messages = {
    'title': [
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'major': [
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'maxlength', message: 'Chức danh ít hơn 100 ký tự'},

    ],
    'salary':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'quanlity':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Trường này số lượng lớn hơn 0' },

    ],
    'work_loaction':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'position':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'category_idCategory':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'type_of_work':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'decriptions':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'benefit':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'sex': [
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'degree': [
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'working_time':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'profile_language':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'job_requirements':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'profile_requirement':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'name_nd':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'maxlength', message: 'Trường này ít hơn 100 ký tự'},
    ],
    'sdt_nd':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'pattern', message: 'Số điện thoại 10 số'},
    ],
    'address_nd':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'email_nd':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Email sai định dạng' }
    ]
  };
  // @ts-ignore
  editBai: newdto;
  // @ts-ignore
  private idCata:string;
  date: Date = new Date();

  ngOnInit(): void {
    // @ts-ignore
    this.editBai = new newdto();
    this.idNews=this.route.snapshot.params['idNews'];
    this.newServiceService.getNews(this.idNews).subscribe(data=>{
      this.editBai=data
    },error => console.log(error));
    // @ts-ignore
    this.newServiceService.getIdCategory().subscribe(item=>{
      this.lisstnganh=item;
      console.log(this.lisstnganh)
    })
  }
  Update() {
    // @ts-ignore
    let id_user = JSON.parse(localStorage.getItem("auth-user"));
    this.editBai.id_account=id_user['id'];
    this.newServiceService.updateNews(this.idNews,this.editBai).subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
    },error => console.log(error));
    console.log("hang ve: "+ this.editBai);
    this.newServiceService.addNews(this.editBai)
      .subscribe(
        response => {
          console.log(this.editBai.title);
          this.router.navigate(['/timkiem-trangchu']);
          this.toast.success('Update thành công');
        },
        (error: any) => {
          console.log(error);
          this.toast.warning('Đăng thất bại')
        });
  }
  onSubmit() {
    console.log(this.editBai);
    this.Update();
  }

  lisstnganh: Category[]=[];
  // @ts-ignore
  formUpload: FormGroup;

  // @ts-ignore
  public onOptionsSelected(event) {
    // @ts-ignore
    const value = event.target.value;
    this.idCata = value;
    console.log(value);
  }
}

