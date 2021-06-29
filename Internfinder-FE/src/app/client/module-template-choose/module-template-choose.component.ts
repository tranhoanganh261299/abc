import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";
import {FormControl, FormGroup} from "@angular/forms";
import {CvCreatedService} from "../../Services/cv-created.service";

@Component({
  selector: 'app-module-template-choose',
  templateUrl: './module-template-choose.component.html',
  styleUrls: ['./module-template-choose.component.css']
})
export class ModuleTemplateChooseComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices,
              private cvCreated: CvCreatedService,) {
    this.loadcssServices.loaddCss('assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/email-decode.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/bootstrap.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/jquery-ui.min.js');
  }
  ngOnInit(): void {
  }
  id_now: any;
  download(id: number){
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    this.cvCreated.download(this.id_now,id);
  }

}
