import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ShareService} from "../../../Services/Share.Service";
import {ShareDTO} from "../../../dto/ShareDTO";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-quanlybaichiase-create',
  templateUrl: './quanlybaichiase-create.component.html',
  styleUrls: ['./quanlybaichiase-create.component.css']
})
export class QuanlybaichiaseCreateComponent implements OnInit {

  constructor( private  ShareService: ShareService,
               private  router: Router,
               private  toastr: ToastrService) { }
  contactForm =  new FormGroup({
    title: new FormControl('',[Validators.required]) ,
    content: new FormControl('', [Validators.required]),
    create_date: new FormControl('')

  })
  // @ts-ignore
  sharedto: ShareDTO
  ngOnInit(): void {
  }
  // @ts-ignore
  id_now: number
  createsharepost(){
    // @ts-ignore
    let id_user = JSON.parse(localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    this.contactForm.value.create_date = new Date()
    this.ShareService.createSharepost(this.contactForm.value, id_user.id).subscribe(data=>{
      this.toastr.success('Thêm mới thành công')
      this.router.navigate(['/admin/quanlybaichiase/index']).then(()=>{
        location.reload()
      })
    }, error => {
      console.log(error);
    })
  }
}
