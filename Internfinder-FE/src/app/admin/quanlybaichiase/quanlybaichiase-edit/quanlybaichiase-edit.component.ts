import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NewService} from "../../../Services/NewService";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NewsClass} from "../../../model/News.class";
import {ShareService} from "../../../Services/Share.Service";
import {ShareClass} from "../../../model/Share.Class";

@Component({
  selector: 'app-quanlybaichiase-edit',
  templateUrl: './quanlybaichiase-edit.component.html',
  styleUrls: ['./quanlybaichiase-edit.component.css']
})
export class QuanlybaichiaseEditComponent implements OnInit {

  constructor(private  fb: FormBuilder, private  shareservice: ShareService, private  activatedRouteService: ActivatedRoute, private  router: Router) {
  }
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public  subpram: Subscription;
  // @ts-ignore
  share: ShareClass=new ShareClass();
  contactForm =  new FormGroup({
    title: new FormControl('',[Validators.required]) ,
    content: new FormControl('', [Validators.required]),
    create_date: new FormControl('')

  })
  ngOnInit(): void {
    // @ts-ignore
    this.id=this.activatedRouteService.snapshot.params['id'];
    this.shareservice.getOne(this.id).subscribe(data=>{
      this.share=data
      console.log(data)
    },error => console.log(error))
  }
  OnEdit(idshare: number){
    this.shareservice.getOne(idshare)
    console.log(idshare);
    this.shareservice.onEditsharepost(idshare,this.contactForm.value).subscribe(data=>{
      console.log(data);
      console.log(alert("Cập nhật thành công !"))
        this.router.navigate(['/admin/quanlybaichiase/index']);
    },error => console.log(error));
  }
}
