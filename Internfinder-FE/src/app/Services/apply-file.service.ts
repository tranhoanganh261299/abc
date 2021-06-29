import {Inject, Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Cv_apply} from "../model/Cv_apply";

@Injectable({
  providedIn: 'root'
})
export class ApplyFileService {

  // @ts-ignore
  imageDetailList: AngularFireList<any>;
  // @ts-ignore
  fileList: any[];
  // @ts-ignore
  cvapply: Cv_apply;
  msg = 'error';

  constructor(@Inject(AngularFireDatabase) private firebase: AngularFireDatabase) {
  }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('dpfDetails');
  }

  insertImageDetails(id : any, url: any) {
    this.imageDetailList.push(this.cvapply);
  }

  getImage(value: any) {
    this.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => {
          return item.payload.val();
        });
        this.fileList.forEach(element => {
          if (element.id === value) {
            this.msg = element.url;
          }
        });
        if (this.msg === 'error') {
          alert('No record found');
        } else {
          window.open(this.msg);
          this.msg = 'error';
        }
      }
    );
  }
}
