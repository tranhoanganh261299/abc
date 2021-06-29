import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuanlytaikhoanIndexComponent} from './admin/quanlytaikhoan/quanlytaikhoan-index/quanlytaikhoan-index.component';
import {QuanlytaikhoanCreateComponent} from './admin/quanlytaikhoan/quanlytaikhoan-create/quanlytaikhoan-create.component';
import {QuanlytaikhoanEditComponent} from './admin/quanlytaikhoan/quanlytaikhoan-edit/quanlytaikhoan-edit.component';
import {QuanlybaidangIndexComponent} from './admin/quanlybaidang/quanlybaidang-index/quanlybaidang-index.component';
import {QuanlybaidangCreateComponent} from './admin/quanlybaidang/quanlybaidang-create/quanlybaidang-create.component';
import {QuanlymaucvIndexComponent} from './admin/quanlymau-cv/quanlymaucv-index/quanlymaucv-index.component';
import {QuanlymaucvCreateComponent} from './admin/quanlymau-cv/quanlymaucv-create/quanlymaucv-create.component';
import {QuanlymaucvDetailComponent} from './admin/quanlymau-cv/quanlymaucv-detail/quanlymaucv-detail.component';
import {ModuleCreateCvComponent} from './client/module-create-cv/module-create-cv.component';
import {PageComponent} from './client/page/page.component';
import {AdminComponent} from './admin/admin.component';
import {ClientComponent} from './client/client.component';
import {QuanlybaidangEditComponent} from './admin/quanlybaidang/quanlybaidang-edit/quanlybaidang-edit.component';
import {LoginComponent} from './login/login.component';
import {AdminLoginComponent} from './login/admin-login/admin-login.component';
import {ClientLoginComponent} from './login/client-login/client-login.component';
import {DangkysinhvienComponent} from './login/dangkysinhvien/dangkysinhvien.component';
import {DangkyNTTComponent} from './login/dangky-ntt/dangky-ntt.component';
import {CKEditorModule} from "ckeditor4-angular";
import {TrangchuForumComponent} from "./client/module-forum/trangchu-forum/trangchu-forum.component";
import {BaivietForumComponent} from "./client/module-forum/baiviet-forum/baiviet-forum.component";
import {DangbaivietForumComponent} from "./client/module-forum/dangbaiviet-forum/dangbaiviet-forum.component";
import {ModuleDangtuyendungComponent} from "./client/module-dangtuyendung/module-dangtuyendung.component";
import {ModuleXemvcNtdComponent} from "./client/module-xemvc-ntd/module-xemvc-ntd.component";
import {QuanlythongtinTaikhoanComponent} from "./client/Quanlythongtin-taikhoanall/quanlythongtin-taikhoan/quanlythongtin-taikhoan.component";
import {ModuleTimkiemTrangchuComponent} from "./client/module-timkiem-trangchu/module-timkiem-trangchu.component";
import {PapeBaidangtuyenComponent} from "./client/pape-baidangtuyen/pape-baidangtuyen.component";
import {QuanlybaichiaseIndexComponent} from "./admin/quanlybaichiase/quanlybaichiase-index/quanlybaichiase-index.component";
import {QuanlybaichiaseCreateComponent} from "./admin/quanlybaichiase/quanlybaichiase-create/quanlybaichiase-create.component";
import {QuanlybaichiaseEditComponent} from "./admin/quanlybaichiase/quanlybaichiase-edit/quanlybaichiase-edit.component";
import {QuanlybinhluanIndexComponent} from "./admin/quanlybinhluan/quanlybinhluan-index/quanlybinhluan-index.component";
import {QuanlybinhluanDetailsComponent} from "./admin/quanlybinhluan/quanlybinhluan-details/quanlybinhluan-details.component";
import {QuanlythongtinTaikhoanEditComponent} from "./client/Quanlythongtin-taikhoanall/quanlythongtin-taikhoan-edit/quanlythongtin-taikhoan-edit.component";
import {AdminAuthService} from "./_services/admin.service";
import {CustomerAuthService} from "./_services/customer.service";
import {QuanlybaidangtuyenNvdComponent} from "./client/quanlybaidang-nvd-mrdat/quanlybaidangtuyen-nvd/quanlybaidangtuyen-nvd.component";
import {QuanlybaidangNvdMrdatDetailsComponent} from "./client/quanlybaidang-nvd-mrdat/quanlybaidang-nvd-mrdat-details/quanlybaidang-nvd-mrdat-details.component";
import {ResetPasswordComponent} from "./login/reset-password/reset-password.component";
import {VerifyResetPasswordComponent} from "./login/verify-reset-password/verify-reset-password.component";
import {PaypalComponent} from "./client/pay/paypal/paypal.component";
import {PayPackageComponent} from "./client/pay/pay-package/pay-package.component";
import {EditbaidangComponent} from "./client/editbaidang/editbaidang.component";
import {SinhvienCvComponent} from "./client/sinhvien-cv/sinhvien-cv.component";
import {ModuleTemplateChooseComponent} from "./client/module-template-choose/module-template-choose.component";

const routes: Routes = [

  {   path: 'admin', component: AdminComponent, canActivate:[AdminAuthService], children :
      [
        {path: 'quanlytaikhoan/index', component: QuanlytaikhoanIndexComponent},
        {path: 'quanlytaikhoan/create', component: QuanlytaikhoanCreateComponent},
        {path: 'quanlytaikhoan/edit/:id', component: QuanlytaikhoanEditComponent},
        //
        {path: 'quanlybaidang/index', component: QuanlybaidangIndexComponent},
        {path: 'quanlybaidang/create/:id', component: QuanlybaidangCreateComponent},
        {path: 'quanlybaidang/edit/:id', component: QuanlybaidangEditComponent },
        //
        {path: 'quanlymaucv/index', component: QuanlymaucvIndexComponent},
        {path: 'quanlymaucv/create', component: QuanlymaucvCreateComponent},
        {path: 'quanlymaucv/detail', component: QuanlymaucvDetailComponent},
        //
        {path: 'quanlybaichiase/index', component: QuanlybaichiaseIndexComponent},
        {path: 'quanlybaichiase/create', component: QuanlybaichiaseCreateComponent},
        {path: 'quanlybaichiase/edit/:id', component: QuanlybaichiaseEditComponent},
        //
        {path:'quanlybinhluan/index', component: QuanlybinhluanIndexComponent},
        {path: 'quanlybinhluan/details/:id', component: QuanlybinhluanDetailsComponent}
      ]
  },
  {
    path: '', component: ClientComponent, children :
      [
        {path: '', component: PageComponent},
        {path: 'create_cv', component: ModuleCreateCvComponent, canActivate:[CustomerAuthService] },
        {path: 'forum', component: TrangchuForumComponent},
        {path: 'forum/index/:id', component: BaivietForumComponent},
        {path: 'dangbaichiase', component: DangbaivietForumComponent, canActivate:[CustomerAuthService]},
        {path: 'dangtuyendung', component: ModuleDangtuyendungComponent},
        {path: 'xemcv-ntd', component: ModuleXemvcNtdComponent},
        {path: 'profile/:id', component: QuanlythongtinTaikhoanComponent, canActivate:[CustomerAuthService]},
        {path: 'profile/edit/:id', component: QuanlythongtinTaikhoanEditComponent, canActivate:[CustomerAuthService]},
        {path: 'quanlybaidangtuyen', component: QuanlybaidangtuyenNvdComponent, canActivate:[CustomerAuthService]},
        {path: 'quanlybaidangtuyen/details/:id', component: QuanlybaidangNvdMrdatDetailsComponent, canActivate:[CustomerAuthService]},
        {path: 'timkiem-trangchu', component: ModuleTimkiemTrangchuComponent},
        {path: 'xembaidangtuyen/:idNew', component: PapeBaidangtuyenComponent,canActivate:[CustomerAuthService] },
        {path: 'pay-package', component: PayPackageComponent, canActivate:[CustomerAuthService]},
        {path: 'paypal', component: PaypalComponent,canActivate:[CustomerAuthService]},
        {path: 'quanlycv-sv/:id', component: SinhvienCvComponent,canActivate:[CustomerAuthService]},
        {path: 'editbaidang/:idNews', component: EditbaidangComponent,canActivate: [CustomerAuthService]},
        {path: 'slide_cv', component: ModuleTemplateChooseComponent}
      ]
  },
  {
    path: 'login', component: LoginComponent, children :
      [
        {path: 'dangnhap/admin', component: AdminLoginComponent  },
        {path: 'dangnhap/client', component: ClientLoginComponent},
        {path: 'dangky/sinhvien', component: DangkysinhvienComponent},
        {path: 'dangky/nhatuyendung', component: DangkyNTTComponent},
        {path: 'reset-password', component: ResetPasswordComponent},
        {path: 'verify-reset-password', component: VerifyResetPasswordComponent},


      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CKEditorModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
