import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NewsClass} from "../../../model/News.class";
import {NewService} from "../../../Services/NewService";

@Component({
  selector: 'app-quanlybaidang-create',
  templateUrl: './quanlybaidang-create.component.html',
  styleUrls: ['./quanlybaidang-create.component.css']
})
export class QuanlybaidangCreateComponent implements OnInit {

  constructor(private  fb: FormBuilder, private  accountservice: NewService, private  activatedRouteService: ActivatedRoute, private  router: Router) {
  }
// @ts-ignore
  public id: number;
  // @ts-ignore
  public  sub: Subscription;
  // @ts-ignore
  public  subpram: Subscription;
  // @ts-ignore
  account: NewsClass=new NewsClass();
  // @ts-ignore

  onSubmit() {
    this.router.navigate(['/admin/quanlybaidang/index']).then(()=>{
      location.reload()
    })
  }
  contactForm = new FormGroup({
    decriptions: new FormControl('',[Validators.required, Validators.maxLength(255)]),
    title: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    createDate: new FormControl(''),
    salary: new FormControl(''),
    name_nd: new FormControl(''),
    major: new FormControl(''),
    benefit: new FormControl(''),
    work_loaction: new FormControl(''),
    address_nd: new FormControl(''),
    email_nd: new FormControl(''),
    profile_language: new FormControl(''),
    sex: new FormControl(''),
    phone: new FormControl(''),
    degree: new FormControl(''),
    idAccount: new FormControl(''),
    idCategory: new  FormControl(''),
  });
  ngOnInit(): void {
    this.id=this.activatedRouteService.snapshot.params['id'];
    this.accountservice.getOne(this.id).subscribe(data=>{
      this.account=data
      console.log(data)
    },error => console.log(error))
  }

}
