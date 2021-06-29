import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NewService} from "../../../Services/NewService";
import {NewsClass} from "../../../model/News.class";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-quanlybaidang-edit',
  templateUrl: './quanlybaidang-edit.component.html',
  styleUrls: ['./quanlybaidang-edit.component.css']
})
export class QuanlybaidangEditComponent implements OnInit {
  constructor(private  fb: FormBuilder,
              private  accountservice: NewService,
              private  activatedRouteService: ActivatedRoute,
              private  router: Router,
              private  toaset : ToastrService) {
  }
  // @ts-ignore
  public id: number;
  // @ts-ignore
  news: NewsClass=new NewsClass();
  ngOnInit(): void {
    // @ts-ignore
    this.id=this.activatedRouteService.snapshot.params['id'];
    this.accountservice.getOne(this.id).subscribe(data=>{
      this.news=data
      console.log(data)
    },error => console.log(error))
  }
  OnEdit(){
    this.accountservice.edit(this.id,this.news).subscribe(data=>{
      this.router.navigate(['/admin/quanlybaidang/index']).then(()=>{
        location.reload()
      })

    },error => console.log(error));
  }
  contactForm = new FormGroup({
    decriptions: new FormControl(''),
    title: new FormControl('' ),
    status: new  FormControl(''),
    idAccount:new FormControl('' ),
    idCategory:new FormControl('')

  });
}
