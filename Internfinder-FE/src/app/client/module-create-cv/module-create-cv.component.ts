import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from "rxjs/operators";
import {CvCreated} from "../../dto/CvCreated";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CvCreatedService} from "../../Services/cv-created.service";
import {ShareClass} from "../../model/Share.Class";
import {LoadcssServices} from "../../Services/loadcss.services";
import {ActivatedRoute, Router} from "@angular/router";
import {ImageValidator} from "./ImageValidator";


@Component({
  selector: 'app-module-create-cv',
  templateUrl: './module-create-cv.component.html',
  styleUrls: ['./module-create-cv.component.css']
})
export class ModuleCreateCvComponent implements OnInit {
  // @ts-ignore
  idtemplate: number;
  isLinear = false;
  urlImg: string = 'https://firebasestorage.googleapis.com/v0/b/fir-angular-66583.appspot.com/o/avatar-1577909_1280.png?alt=media&token=d7eeaf14-9686-48ee-b313-973b26c57435';
  selectImg: any = null;
  // @ts-ignore
  idImg: string;
  // @ts-ignore
  imageSrc: string;
  // @ts-ignore
  firstName: string;
  // @ts-ignore
  cv_created: CvCreated = new CvCreated();
  // @ts-ignore
  quan: string;
  // @ts-ignore
  diachi:string;

  public kinhNghiemForm = new FormGroup({
    contact: new FormControl(''),
    dayStart: new FormControl(''),
    dayEnd: new FormControl('')
  });

  public hoctapForm = new FormGroup({
    school: new FormControl(''),
    dayStart: new FormControl(''),
    dayEnd: new FormControl('')
  });

  skillForm: FormGroup;
  thanhtichForm: FormGroup;

  // @ts-ignore
  constructor(@Inject(AngularFireStorage) private storage: AngularFireStorage, private  fb: FormBuilder, private cvCreated: CvCreatedService,
              private  loadcssServices: LoadcssServices,
              private route: ActivatedRoute, private router: Router) {
    this.loadcssServices.loaddCss('assets/page/css/form.css');
    this.loadcssServices.loaddCss('assets/page/css/formtotal.css');
    this.loadcssServices.loaddCss('assets/page/css/formCV.css');

    this.skillForm = this.fb.group({
      skills: this.fb.array([this.fb.control(null,[Validators.required])])
    })
    this.thanhtichForm = this.fb.group({
      tts: this.fb.array([this.fb.control(null, [Validators.required])])
    })

  }


  addSkill(): void {
    (this.skillForm.get('skills') as FormArray).push(
      this.fb.control(null)
    );
  }

  addThanhTich(): void {
    (this.thanhtichForm.get('tts') as FormArray).push(
      this.fb.control(null)
    );
  }

  addKinhNghiem(): void {
    let kinhNghiemArray = this.kinhNghiemForm.controls.kinhNghiems as FormArray;
    let arraylen = kinhNghiemArray.length;
    let newKNgroup: FormGroup = this.fb.group({
      contact: [''],
      dayStart: [''],
      dayEnd: ['']
    })
    kinhNghiemArray.insert(arraylen, newKNgroup);
  }

  addHocTap(): void {
    let hocTapArray = this.hoctapForm.controls.hoctaps as FormArray;
    let arraylen = hocTapArray.length;
    let newKNgroup: FormGroup = this.fb.group({
      school: [''],
      dayStart: [''],
      dayEnd: ['']
    })
    hocTapArray.insert(arraylen, newKNgroup);
  }

  getSkillsFormControls(): any {
    return (<FormArray> this.skillForm.get('skills')).controls;
  }

  getTTsFormControls(): any {
    return (<FormArray> this.thanhtichForm.get('tts')).controls;
  }

  getKinhNghiemFormControls(): any {
    return (<FormArray> this.kinhNghiemForm.get('kinhNghiems')).controls;
  }

  getHocTapFormControls(): any {
    return (<FormArray> this.hoctapForm.get('hoctaps')).controls;
  }

  removeSkill(index: any) {
    (this.skillForm.get('skills') as FormArray).removeAt(index);
  }

  removeThanhtich(index: any) {
    (this.thanhtichForm.get('tts') as FormArray).removeAt(index);
  }

  removeKinhNghiem(index: any): void{
    let kinhNghiemArray = this.kinhNghiemForm.controls.kinhNghiems as FormArray;
    kinhNghiemArray.removeAt(index)
  }

  removeHocTap(index: any): void{
    let hocTapArray = this.hoctapForm.controls.hoctaps as FormArray;
    hocTapArray.removeAt(index)
  }

  ngOnInit(): void {
    this.kinhNghiemForm=this.fb.group({
      kinhNghiems: this.fb.array([
        this.fb.group({
          contact: [''],
          dayStart: [''],
          dayEnd: ['']
        })
      ])
    }),
      this.hoctapForm=this.fb.group({
      hoctaps: this.fb.array([
        this.fb.group({
          school: [''],
          dayStart: [''],
          dayEnd: ['']
        })
      ])
    })
  }

  send(values:any) {
    console.log(values);
    // this.cv_created.skills = values.skills;
  }
  sendTT(values:any) {
    console.log(values);
  }
  saveimg(event: any) {
    this.selectImg = event.target.files[0];
    const nameimg = this.selectImg.name;
    const fileRef = this.storage.ref(nameimg);
    this.storage.upload(nameimg, this.selectImg).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.idImg = url;
          console.log(url);
        });
      })).subscribe();

  }

  readURL(event: any): void {
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      // @ts-ignore
      this.selectImg = event.target.files[0];
      const reader = new FileReader();
      // @ts-ignore
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(this.selectImg);
    }
  }
  add(values:any, tt: any, kn:any, hocTap: any){
    this.cv_created.kinhNghiems = kn.kinhNghiems;
    this.cv_created.hocTaps = hocTap.hoctaps;
    this.cv_created.skills = values.skills;
    this.cv_created.thanhTichs = tt.tts;
    this.cv_created.address = this.diachi+' '+this.quan ;
    this.cv_created.avatar=this.imageSrc;
    this.cvCreated.createCV(this.cv_created).subscribe(data => {
      this.cv_created = data
      console.log(data)
    })
    this.router.navigate(['/slide_cv']);
  }

  id_now: any;
  download(){
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    console.log(this.idtemplate)
    this.cvCreated.download(this.id_now,1);
  }
}

