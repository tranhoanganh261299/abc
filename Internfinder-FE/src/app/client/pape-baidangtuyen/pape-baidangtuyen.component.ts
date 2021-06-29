import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {NewsClass} from "../../model/News.class";
import {LoadcssServices} from "../../Services/loadcss.services";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";
import {TimkiemService} from "../../Services/timkiem.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {UploadFileService} from "../../model/Upload-file.Services";
import {finalize} from "rxjs/operators";
import {cvapplyService} from "../../Services/cvapply.Service";
import {ToastrService} from "ngx-toastr";
import {CvApply} from "../../dto/CvApply";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-pape-baidangtuyen',
  templateUrl: './pape-baidangtuyen.component.html',
  styleUrls: ['./pape-baidangtuyen.component.css'],
})
export class PapeBaidangtuyenComponent implements OnInit {

  // @ts-ignore
  new: NewsClass = new NewsClass();
  // @ts-ignore
  idNew: number;
  private account: any;
  constructor(private _timkiemService: TimkiemService, private  loadcssServices: LoadcssServices,
              private route: ActivatedRoute, private router: Router,private  toast: ToastrService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              @Inject(UploadFileService) private uploadFileService: UploadFileService,
              private cvapplyservice: cvapplyService,
              private  token: TokenStorageService) {
  }
  id_now:number = 0;
  ngOnInit(): void {
    // @ts-ignore
    this.addApply = new CvApply();
    this.uploadFileService.getImageDetailList();
    this.idNew = this.route.snapshot.params['idNew'];
    this._timkiemService.getNews(this.idNew).subscribe(data => {
      this.new = data;
    }, (error: string) => console.log(+error));
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    console.log(this.id_now)
  }
  public show: boolean = false;
  buttonName = 'Apply';
  public nameStyle: any = '';
  toggle() {
    this.show = !this.show;
    if (this.show)
      this.nameStyle = "display: none !important;";
    else
      this.buttonName = "Show";
  }

  selectedImage: any
  // @ts-ignore
  urla: string;
  // @ts-ignore
  id_apply: string;
  // @ts-ignore
  file: string;
  showPreview(event: any) {
    this.selectedImage=event.target.files[0];
  }
  save(){
    const  name = this.selectedImage.name;
    const  fileRef = this.storage.ref(name);
    this.storage.upload(name,this.selectedImage).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          this.urla = url;
          this.uploadFileService.insertImageDetails(this.id_apply,this.urla);
          this.toast.success('Xác nhận cv thành công')
        });
      })
    ).subscribe()
  }
  // @ts-ignore
  addApply: CvApply;
  formApply: any;
  add()
  {
    // @ts-ignore
    let id_user = JSON.parse(localStorage.getItem("auth-user"));
    this.addApply.id_account=id_user['id'];
    this.addApply.id_news=this.idNew;
    this.addApply.create_date = new Date();
    this.addApply.url=this.urla;
    console.log("hang ve: "+ this.addApply);
    this.cvapplyservice.addApply(this.addApply)
      .subscribe(
        response => {
          this.toast.success('Apply Thành công')
        },
        (error: any) => {
          console.log(error);
          this.toast.warning('Apply thất bại')
        });
  }
  @Output() onDeleteComment = new EventEmitter();
  commentForm = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.maxLength(255)]),
  })

  updateBaiDang(idNews: number){
    this.router.navigate(['/editbaidang',idNews])
  }
}
