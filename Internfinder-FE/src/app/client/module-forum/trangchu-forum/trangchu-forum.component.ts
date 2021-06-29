import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../../Services/loadcss.services";
import {Router} from "@angular/router";
import {ShareService} from "../../../Services/Share.Service";
import {ShareClass} from "../../../model/Share.Class";

@Component({
  selector: 'app-trangchu-forum',
  templateUrl: './trangchu-forum.component.html',
  styleUrls: ['./trangchu-forum.component.css']
})
export class TrangchuForumComponent implements OnInit {

  constructor( private  loadcssServices: LoadcssServices, private quanlytaikhoanService: ShareService, private  router: Router) {
    // this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loaddCss('assets/Client/forum-mockup-master/css/style.css');
    // this.loadcssServices.loadScript('assets/Client/CSS/stylesMH.css');

  }

  items = []
  // @ts-ignore
  pageOfItems : number = 1
  // @ts-ignore
  public quanlytaikhoans: ShareClass[];
  // @ts-ignore
  share: ShareClass
  // @ts-ignore
  getAll(){
    this.quanlytaikhoanService.getAll().subscribe(data=>{
      this.quanlytaikhoans = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
  ngOnInit(): void {
    // @ts-ignore
    this.share = new ShareClass()
    this.getAll()
  }
  OnEdit(idshare: number){
    this.router.navigate(['/forum/index/',idshare])
  }

}
