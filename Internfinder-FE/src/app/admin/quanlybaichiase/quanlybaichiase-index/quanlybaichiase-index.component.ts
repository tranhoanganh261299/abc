import { Component, OnInit } from '@angular/core';
import {AccountClass} from "../../../model/Account.class";
import {AccountService} from "../../../Services/Account.service";
import {Router} from "@angular/router";
import {ShareClass} from "../../../model/Share.Class";
import {ShareService} from "../../../Services/Share.Service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-quanlybaichiase-index',
  templateUrl: './quanlybaichiase-index.component.html',
  styleUrls: ['./quanlybaichiase-index.component.css']
})
export class QuanlybaichiaseIndexComponent implements OnInit {

  items = []
  // @ts-ignore
  pageOfItems :number = 1
  // @ts-ignore
  private  Subscription: Subscription;
  // @ts-ignore
  public sharelist: ShareClass[];
  // @ts-ignore
  public  share: ShareClass;
  ngOnInit(): void {
    this.getAllQuanlytaikhoan();
    // @ts-ignore
    this.share = new ShareClass();
    // @ts-ignore
   }
  constructor(private shareservice: ShareService,
              private  router: Router,
              private  toastr: ToastrService) {
  }
  keyword: any
  // @ts-ignore
  search(){
    if(this.keyword == ""){
      this.ngOnInit()
    }
    else{
      return this.shareservice.seach(this.keyword).subscribe(data=>{
        this.sharelist = data
      })
    }
  }

  getAllQuanlytaikhoan(){
    this.Subscription = this.shareservice.getAll().subscribe(data=>{
      this.sharelist = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
  //get id
  OnEdit(id: number){
    this.router.navigate(['/admin/quanlybinhluan/details',id])
  }
  Ondelete(){
    if(this.abc == null){
      this.toastr.warning('Xóa không thành công')
      return;
    }
    else{
      this.shareservice.delete(this.abc).subscribe(data=>{
        this.toastr.success('Xóa thành công')
       location.reload()
      })
    }
  }
  abc: any
  getOne(id: any){
    this.shareservice.getOne(id).subscribe(data=>{
      this.abc = id
    })
  }
}
