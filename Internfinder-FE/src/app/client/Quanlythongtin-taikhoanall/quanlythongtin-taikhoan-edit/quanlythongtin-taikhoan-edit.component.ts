import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../../Services/Account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../../_services/token-storage.service";
import {AccountClass} from "../../../model/Account.class";
import {ToastrService} from "ngx-toastr";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {UploadFileService} from "../../../model/Upload-file.Services";

@Component({
  selector: 'app-quanlythongtin-taikhoan-edit',
  templateUrl: './quanlythongtin-taikhoan-edit.component.html',
  styleUrls: ['./quanlythongtin-taikhoan-edit.component.css']
})
export class QuanlythongtinTaikhoanEditComponent implements OnInit {

  constructor(private  fb: FormBuilder,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              @Inject(UploadFileService) private uploadFileService: UploadFileService,
              private  accountservice: AccountService,
              private  activatedRouteService: ActivatedRoute,
              private  toasser: ToastrService,
              private  token: TokenStorageService,
              private  router: Router) {
  }

  public id_now: number = 0
  public id: number = 0
  // @ts-ignore
  isLoggedIn = false;
  isnhatuyendung = false;
  // @ts-ignore
  roles: string
  // @ts-ignore
  account: AccountClass = new AccountClass();

  // @ts-ignore
  ngOnInit(): void {
    this.id = this.activatedRouteService.snapshot.params['id'];
    this.accountservice.getOne(this.id).subscribe(data => {
      this.account = data
    }, error => console.log(error))
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    this.roles = this.token.getUser().roles;
    if (this.isRole(this.roles) == true) {
      this.isnhatuyendung = true;
    }
    this.uploadFileService.getImageDetailList();

  }

  isRole(tokenPayload: any) {
    tokenPayload = this.token.getUser().roles;
    for (const role of tokenPayload) {
      if (role === "nhatuyendung") {
        return true;
      }
    }
    return false;
  }

  editForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    createDate: new FormControl(''),
    email_contact: new FormControl(''),
    sex: new FormControl(''),
    companyName: new FormControl(''),
    link: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    taxCode: new FormControl(''),
    website: new FormControl(''),
    company_address: new FormControl(''),
    postion: new FormControl(''),

  })

  OnEdit() {
    this.editForm.value.createDate = new Date();
    this.editForm.value.image = this.imgaconvert;
    this.accountservice.editA(this.id_now, this.editForm.value).subscribe(data => {
      this.toasser.success("Cập nhật thành công !")
      this.router.navigate(['/profile/', this.id]);
    }, error => console.log(error));
  }
  OnComback(){
    this.router.navigate(['/profile/', this.id])
  }
  selectedImage: any = null;
  imgaconvert: any

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    this.save()
  }


  save() {
    this.id = this.activatedRouteService.snapshot.params['id'];
    const name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.uploadFileService.insertImageDetails(this.id, this.editForm.value.image);
          console.log(url)
          this.imgaconvert = url
        });
      })
    ).subscribe();
  }


}

