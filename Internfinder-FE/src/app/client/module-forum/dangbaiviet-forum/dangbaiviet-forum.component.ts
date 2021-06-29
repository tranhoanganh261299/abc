import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../../Services/loadcss.services";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShareDTO} from "../../../dto/ShareDTO";
import {ShareService} from "../../../Services/Share.Service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CKEditor4} from "ckeditor4-angular";

@Component({
  selector: 'app-dangbaiviet-forum',
  templateUrl: './dangbaiviet-forum.component.html',
  styleUrls: ['./dangbaiviet-forum.component.css']
})
export class DangbaivietForumComponent implements OnInit {

  constructor( private  loadcssServices: LoadcssServices,
               private  ShareService: ShareService,
               private  router: Router,
               private  toaser: ToastrService
               ) {
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loaddCss('assets/Client/forum-mockup-master/css/style.css');
  }

  // @ts-ignore
  sharedto: ShareDTO
  sharepostform = new FormGroup({
    title: new FormControl('',[Validators.required]),
    content: new FormControl('',[Validators.required]),
    create_date: new FormControl('')
  })
  ngOnInit(): void {
  }
  onSubmit(){
    this.createsharepost()
  }
  id_now: number =0
  createsharepost(){
    // @ts-ignore
    let id_user = JSON.parse(localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    this.sharepostform.value.create_date = new Date()
    this.ShareService.createSharepost(this.sharepostform.value, id_user.id).subscribe(data=>{
      this.toaser.success('Thêm mới thành công')
      this.router.navigate(['/forum']);
    }, error => {
      console.log(error);
    })
  }
}
