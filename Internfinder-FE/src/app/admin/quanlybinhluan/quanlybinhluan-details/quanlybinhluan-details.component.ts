import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {LoadcssServices} from "../../../Services/loadcss.services";
import {ShareService} from "../../../Services/Share.Service";
import {CommentService} from "../../../Services/Comment.Service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentClass} from "../../../model/Comment.Class";
import {ShareClass} from "../../../model/Share.Class";
import {AccountClass} from "../../../model/Account.class";
import {CommentDTO} from "../../../dto/commentDTO";
import {ShareDTO} from "../../../dto/ShareDTO";

@Component({
  selector: 'app-quanlybinhluan-details',
  templateUrl: './quanlybinhluan-details.component.html',
  styleUrls: ['./quanlybinhluan-details.component.css']
})
export class QuanlybinhluanDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private  toastr: ToastrService,
              private  accountservice: ShareService,
              private commentService: CommentService,
              private  activatedRouteService: ActivatedRoute,
              private  shareservice: ShareService,
              private router: Router,) { }

  flagEdit = false;
  // @ts-ignore
  idCommentEdit: number;
  pageOfItems: number = 1
  id_now: number = 0;
  public id: number = 0;
  public shareClasses: ShareClass[] = [];
  public commentlist: CommentClass[] = [];
  // @ts-ignore
  public  commentclass : CommentClass;
  // @ts-ignore
  comment: CommentDTO;
  // @ts-ignore
  account;
  // @ts-ignore
  sharedto: ShareDTO = new ShareDTO();
  // @ts-ignore
  share: ShareClass = new ShareClass();
  @Output() onDeleteComment = new EventEmitter();
  commentForm = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.maxLength(255)]),
  })

  ngOnInit(): void {
    this.id = this.activatedRouteService.snapshot.params['id'];
    this.accountservice.getOne(this.id).subscribe(data => {
      this.share = data
    }, error => console.log(error))
    // @ts-ignore
    this.comment = new CommentDTO();
    this.getAllComment()
  }

  getAllComment() {
    this.commentService.getAllComment(this.id).subscribe(data => {
      console.log(data)
      this.commentlist = data.content;
    }, error => {
      console.log(error)
    });
  }

  onSubmit() {
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    console.log(this.id_now)
    this.comment.id_account = this.id_now;
    this.comment.id_share = this.share.idshare
    this.comment.create_date = new Date();
    this.comment.content = this.commentForm.value.content;
    this.commentService.createComment(this.comment).subscribe(data => {
      this.getAllComment();
    })
    this.toastr.success('Bình luận thành công', 'Thông báo')
  }

  getEditComments(idcm: number) {
    if (this.commentForm.invalid) {
      return;
    } else {
      // @ts-ignore
      this.commentService.getbyIdComment(idcm)
      console.log(this.commentForm.value, idcm)
      this.commentService.updateComment(idcm,this.commentForm.value).subscribe(data => {
        this.flagEdit = false;
        this.ngOnInit();
        this.toastr.success('Sửa bình luận thành công!', 'Thông báo')
      })
    }
  }
  abc: any
  getOne(id:any){
    return this.commentService.getOne(id).subscribe(data=>{
      console.log(id)
      this.abc = id
      console.log(id)
    })
  }

  getCommentDeleteById() {
    if (this.abc == null) {
      this.toastr.warning('Xoá không thành công', 'Thông báo')
    } else {
      this.commentService.deleteComment(this.abc).subscribe(data => {
      })
      this.toastr.success('Xóa bình luận thành công!', 'Thông báo')
      this.refresh()
    }
  }

  refresh(): void {
    window.location.reload();
  }
  keyword:any
  search(){
    if(this.keyword == ""){
      this.ngOnInit()
    }else {
      this.commentService.seach(this.keyword).subscribe(data=>{
        this.commentlist = data
      });
      console.log(this.commentlist);
    }
  }
}
