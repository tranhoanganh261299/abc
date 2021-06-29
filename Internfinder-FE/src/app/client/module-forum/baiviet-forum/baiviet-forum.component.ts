import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoadcssServices} from "../../../Services/loadcss.services";
import {ShareClass} from "../../../model/Share.Class";
import {ActivatedRoute, Router} from "@angular/router";
import {ShareService} from "../../../Services/Share.Service";
import {Subscription} from "rxjs";
import {CommentClass} from "../../../model/Comment.Class";
import {TokenStorageService} from "../../../Services/token-storage.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentDTO} from "../../../dto/commentDTO";
import {CommentService} from "../../../Services/Comment.Service";
import {ToastrService} from "ngx-toastr";
import {ShareDTO} from "../../../dto/ShareDTO";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-baiviet-forum',
  templateUrl: './baiviet-forum.component.html',
  styleUrls: ['./baiviet-forum.component.css'],
  providers: [DatePipe]
})
export class BaivietForumComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private  toastr: ToastrService,
    private  loadcssServices: LoadcssServices,
    private  accountservice: ShareService,
    private commentService: CommentService,
    private  activatedRouteService: ActivatedRoute,
    private router: Router,
    private token: TokenStorageService) {
    // @ts-ignore
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loaddCss('assets/Client/forum-mockup-master/css/style.css');
    this.loadcssServices.loaddCss('assets/Client/CSS/stylesMH.css');



  }
  myDate: Date = new Date();
  pageOfItems: number = 1
  flagEdit = false;
  // @ts-ignore
    idCommentEdit: number;
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
    this.account = this.token.getUser();let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];

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
    this.comment.id_account = this.id_now;
    this.comment.id_share = this.share.idshare
    this.comment.create_date = this.myDate
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
     this.commentService.getbyIdComment(idcm)
      console.log(this.commentForm.value, idcm)
      this.commentService.updateComment(idcm,this.commentForm.value).subscribe(data => {
        this.flagEdit = false;
        this.ngOnInit();
        this.toastr.success('Sửa bình luận thành công !', 'Thông báo')
      })
    }
  }

  getCommentDeleteById(idComment: number) {
    if (idComment == null) {
      this.toastr.warning('Xoá không thành công', 'Thông báo')
    } else {
      this.commentService.deleteComment(idComment).subscribe(data => {
      })
      this.toastr.success('Xóa bình luận thành công!', 'Thông báo')
      this.refresh()
    }
  }

  refresh(): void {
    window.location.reload();
  }

  onClickShowComment() {
    // this.size = this.size + 2;
    // this.getCommentDeleteById();
    // this.ngOnInit();
  }

  onClickHideComment() {
    // this.size = 1;
    // this.getAllListCommentSizeInPost();
    // this.ngOnInit();
  }

}
