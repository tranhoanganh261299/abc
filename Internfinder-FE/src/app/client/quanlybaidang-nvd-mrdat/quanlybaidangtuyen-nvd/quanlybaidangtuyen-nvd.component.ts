import { Component, OnInit } from '@angular/core';
import {ShareService} from "../../../Services/Share.Service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShareClass} from "../../../model/Share.Class";
import {NewService} from "../../../Services/NewService";
import {NewsClass} from "../../../model/News.class";
import {LoadcssServices} from "../../../Services/loadcss.services";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-quanlybaidangtuyen-nvd',
  templateUrl: './quanlybaidangtuyen-nvd.component.html',
  styleUrls: ['./quanlybaidangtuyen-nvd.component.css']
})
export class QuanlybaidangtuyenNvdComponent implements OnInit {
  constructor(private newsService: NewService,
              private loadcssServices: LoadcssServices,
              private  accountservice: NewService,
              private  activatedRouteService: ActivatedRoute,
              private  toaset : ToastrService,
              private  router: Router) {
    this.loadcssServices.loaddCss('assets/admin/css/switch-btn.css');
  }
  public  id_now :number=0;
  // public id: number=0;
  pageOfItems : number = 1;
  // @ts-ignore
  public newlist: NewsClass[];
  // @ts-ignore
  public  news: NewsClass;
  // ngOnInit(): void {
  //   this.id = this.activatedRouteService.snapshot.params['id'];
  //   this.getAllQuanlytaikhoan();
  //   // @ts-ignore
  //   this.news = new NewsClass();
  //   // @ts-ignore
  // }

  getAllQuanlytaikhoan(){
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    this.newsService.getAllbyIdAccount(this.id_now).subscribe(data=>{
      this.newlist = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
  getOneID(id: number){
    this.router.navigate(['/quanlybaidangtuyen/details',id])
  }

  // @ts-ignore
  public id: number;
  // @ts-ignore
  news: NewsClass=new NewsClass();
  ngOnInit(): void {
    this.getAllQuanlytaikhoan();
  }
  OnEdit(){
    // @ts-ignore
    this.accountservice.editntd(this.idaaaa, this.news).subscribe(data=>{
      this.toaset.success("Cập nhật trang thái thành công !")
        location.reload()
    },error => console.log(error));
  }
  getOne(id: number){
    this.accountservice.getOne(id).subscribe(data=>{})
    this.idaaaa = id
  }
  // @ts-ignore
  idaaaa : number;
  contactForm = new FormGroup({
    status: new  FormControl(''),
  });
}
