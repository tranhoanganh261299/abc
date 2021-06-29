import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ShareClass} from "../../../model/Share.Class";
import {ShareService} from "../../../Services/Share.Service";

@Component({
  selector: 'app-quanlybinhluan-index',
  templateUrl: './quanlybinhluan-index.component.html',
  styleUrls: ['./quanlybinhluan-index.component.css']
})
export class QuanlybinhluanIndexComponent implements OnInit {
  constructor(private shareservice: ShareService, private  router: Router) {
  }
  pageOfItems : number = 1
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

  getAllQuanlytaikhoan(){
   this.shareservice.getAll().subscribe(data=>{
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
  keyword: any
  // @ts-ignore
  search(){
    if (this.keyword ==""){
      this.ngOnInit()
    }
    else {
      return this.shareservice.seach(this.keyword).subscribe(data=>{
        this.sharelist =data
      })
    }
  }


}
