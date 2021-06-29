import {Component, Input, OnInit} from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";
import {AccountClass} from "../../model/Account.class";
import {Category} from "../../model/Category";
import {baidangservice} from "../../Services/baidangservice.service";
import {TimkiemService} from "../../Services/timkiem.service";
import {NewsClass} from "../../model/News.class";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  // @ts-ignore
  us: AccountClass;
  // @ts-ignore
  public logName: string;

  constructor(private _timkiemService:TimkiemService, private loadcssServices: LoadcssServices,private baidangser:baidangservice,
              private route: ActivatedRoute, private router: Router) {
    this.loadcssServices.loaddCss('assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/email-decode.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/bootstrap.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/jquery-ui.min.js');
    // this.loadcssServices.loadScript('assets/Client/minhhoang/js/custom.js');
  }
  id_now: number = 0;
  // @ts-ignore
  private idCata: string;
  baidang: NewsClass[] = [];
  lisstnganh: Category[] = [];
  // @ts-ignore
  _titleNew: string;
  // @ts-ignore
  _noilam: string;
  // @ts-ignore
  _nganh: string;
  // @ts-ignore
  totalRec: string;

  // @ts-ignore
  idNew: number;
  page: number = 1;

  get titleNew(): string {
    return this._titleNew;
  }
  get nganh(): string {
    return this._nganh;
  }

  ngOnInit(): void {
    this.idNew=this.route.snapshot.params['idNew'];
    this.baidangser.getIdCategory().subscribe(data => {
      this.lisstnganh = data;
      console.log('loi' + this.lisstnganh);
    }, error => {
      console.log('loi' + error);
    });
    // @ts-ignore
    this._timkiemService.getNewsAllDay().subscribe(data => {
      this.baidang = data;
    },(error: string)=>{
      console.log('loi roi: '+error)

    });
  }
  // @ts-ignore
  selected: any;
  // @ts-ignore

  public onOptionsSelected(event) {
    const value = event.target.value;
    this.idCata = value;
    console.log(value);
  }
  details(idNew: number){
    this.router.navigate(['/xembaidangtuyen/',idNew])
  }
}
