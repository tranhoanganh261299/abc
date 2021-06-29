import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NewsClass} from "../../../model/News.class";
import {NewService} from "../../../Services/NewService";

@Component({
  selector: 'app-quanlybaidang-index',
  templateUrl: './quanlybaidang-index.component.html',
  styleUrls: ['./quanlybaidang-index.component.css']
})
export class QuanlybaidangIndexComponent implements OnInit {
  pageOfItems : number = 1
  items = []
  keyword: any
  // @ts-ignore
  public quanlybaidangs: NewsClass[];
  // @ts-ignore
  public  news: NewsClass;
  ngOnInit(): void {
    this.getAllQuanlytaikhoan();
    // @ts-ignore
    this.news = new NewsClass();
    }
  constructor(private newService: NewService , private  router: Router) {
  }
  reloadData() {
    this.newService.getAll().subscribe(data => {
      // @ts-ignore
      this.quanlybaidangs = data;
    });
  }
  //index data
  getAllQuanlytaikhoan(){
     this.newService.getAll().subscribe(data=>{
      // @ts-ignore
      this.quanlybaidangs = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

  //get id
  OnEdit(idaccount: number){
    this.router.navigate(['/admin/quanlybaidang/edit',idaccount])
  }
  OnDetails(idaccount: number){
    this.router.navigate(['/admin/quanlybaidang/create',idaccount])
  }
  search(){
    if(this.keyword == ""){
      location.reload()
    }else {
      this.newService.seach(this.keyword).subscribe(data=>{
        this.quanlybaidangs = data
      });
      console.log(this.quanlybaidangs);
    }
  }
}
