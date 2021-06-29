import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { QuanlytaikhoanIndexComponent } from './admin/quanlytaikhoan/quanlytaikhoan-index/quanlytaikhoan-index.component';
import { QuanlytaikhoanCreateComponent } from './admin/quanlytaikhoan/quanlytaikhoan-create/quanlytaikhoan-create.component';
import { QuanlytaikhoanEditComponent } from './admin/quanlytaikhoan/quanlytaikhoan-edit/quanlytaikhoan-edit.component';
import { QuanlybaidangIndexComponent } from './admin/quanlybaidang/quanlybaidang-index/quanlybaidang-index.component';
import { QuanlybaidangEditComponent } from './admin/quanlybaidang/quanlybaidang-edit/quanlybaidang-edit.component';
import { QuanlybaidangCreateComponent } from './admin/quanlybaidang/quanlybaidang-create/quanlybaidang-create.component';
import { QuanlybaichiaseIndexComponent } from './admin/quanlybaichiase/quanlybaichiase-index/quanlybaichiase-index.component';
import { QuanlybaichiaseCreateComponent } from './admin/quanlybaichiase/quanlybaichiase-create/quanlybaichiase-create.component';
import { QuanlybaichiaseEditComponent } from './admin/quanlybaichiase/quanlybaichiase-edit/quanlybaichiase-edit.component';
import { QuanlymauCVComponent } from './admin/quanlymau-cv/quanlymau-cv.component';
import { QuanlymaucvIndexComponent } from './admin/quanlymau-cv/quanlymaucv-index/quanlymaucv-index.component';
import { QuanlymaucvCreateComponent } from './admin/quanlymau-cv/quanlymaucv-create/quanlymaucv-create.component';
import { QuanlymaucvDetailComponent } from './admin/quanlymau-cv/quanlymaucv-detail/quanlymaucv-detail.component';
import { QuanlymaucvEditComponent } from './admin/quanlymau-cv/quanlymaucv-edit/quanlymaucv-edit.component';
import { ModuleCreateCvComponent } from './client/module-create-cv/module-create-cv.component';
import { PageComponent } from './client/page/page.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { LoginComponent } from './login/login.component';
import {AdminLoginComponent} from './login/admin-login/admin-login.component';
import { ClientLoginComponent } from './login/client-login/client-login.component';
import { DangkysinhvienComponent } from './login/dangkysinhvien/dangkysinhvien.component';
import { DangkyNTTComponent } from './login/dangky-ntt/dangky-ntt.component';
import { BaivietForumComponent } from './client/module-forum/baiviet-forum/baiviet-forum.component';
import { DangbaivietForumComponent } from './client/module-forum/dangbaiviet-forum/dangbaiviet-forum.component';
import { TrangchuForumComponent } from './client/module-forum/trangchu-forum/trangchu-forum.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CKEditorModule} from "ckeditor4-angular";
import { ModuleDangtuyendungComponent } from './client/module-dangtuyendung/module-dangtuyendung.component';
import { ModuleXemvcNtdComponent } from './client/module-xemvc-ntd/module-xemvc-ntd.component';
import {HttpClientModule} from "@angular/common/http";
import {JwPaginationModule} from "jw-angular-pagination";
import { QuanlythongtinTaikhoanComponent } from './client/Quanlythongtin-taikhoanall/quanlythongtin-taikhoan/quanlythongtin-taikhoan.component';
import {ToastrModule, ToastrService} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ModuleTimkiemTrangchuComponent } from './client/module-timkiem-trangchu/module-timkiem-trangchu.component';
import {NgxPaginationModule} from "ngx-pagination";
import { PapeBaidangtuyenComponent } from './client/pape-baidangtuyen/pape-baidangtuyen.component';
import {CommentService} from "./Services/Comment.Service";
import {ShareService} from "./Services/Share.Service";
import { QuanlybinhluanIndexComponent } from './admin/quanlybinhluan/quanlybinhluan-index/quanlybinhluan-index.component';
import { QuanlybinhluanDetailsComponent } from './admin/quanlybinhluan/quanlybinhluan-details/quanlybinhluan-details.component';
import { QuanlythongtinTaikhoanEditComponent } from './client/Quanlythongtin-taikhoanall/quanlythongtin-taikhoan-edit/quanlythongtin-taikhoan-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AngularFireModule} from "@angular/fire";
import '@firebase/auth';
import {environment} from "../environments/environment";
import { QuanlybaidangtuyenNvdComponent } from './client/quanlybaidang-nvd-mrdat/quanlybaidangtuyen-nvd/quanlybaidangtuyen-nvd.component';
import { QuanlybaidangNvdMrdatDetailsComponent } from './client/quanlybaidang-nvd-mrdat/quanlybaidang-nvd-mrdat-details/quanlybaidang-nvd-mrdat-details.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { VerifyResetPasswordComponent } from './login/verify-reset-password/verify-reset-password.component';
import { PayPackageComponent } from './client/pay/pay-package/pay-package.component';
import { PaypalComponent } from './client/pay/paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';
import {EditbaidangComponent} from "./client/editbaidang/editbaidang.component";
import {MatStepperModule} from "@angular/material/stepper";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { SinhvienCvComponent } from './client/sinhvien-cv/sinhvien-cv.component';
import { ModuleTemplateChooseComponent } from './client/module-template-choose/module-template-choose.component';
import {A11yModule} from "@angular/cdk/a11y";
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    QuanlytaikhoanIndexComponent,
    QuanlytaikhoanCreateComponent,
    QuanlytaikhoanEditComponent,
    QuanlybaidangIndexComponent,
    QuanlybaidangEditComponent,
    QuanlybaidangCreateComponent,
    QuanlybaichiaseIndexComponent,
    QuanlybaichiaseCreateComponent,
    QuanlybaichiaseEditComponent,
    QuanlymauCVComponent,
    QuanlymaucvIndexComponent,
    QuanlymaucvCreateComponent,
    QuanlymaucvDetailComponent,
    QuanlymaucvEditComponent,
    ModuleCreateCvComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    LoginComponent,
    ClientLoginComponent,
    DangkysinhvienComponent,
    DangkyNTTComponent,
    BaivietForumComponent,
    DangbaivietForumComponent,
    TrangchuForumComponent,
    ModuleDangtuyendungComponent,
    ModuleXemvcNtdComponent,
    QuanlythongtinTaikhoanComponent,
    ModuleTimkiemTrangchuComponent,
    HeaderComponent,
    PapeBaidangtuyenComponent,
    QuanlybinhluanIndexComponent,
    QuanlybinhluanDetailsComponent,
    QuanlythongtinTaikhoanEditComponent,
    QuanlybaidangtuyenNvdComponent,
    QuanlybaidangNvdMrdatDetailsComponent,
    ResetPasswordComponent,
    VerifyResetPasswordComponent,
    PayPackageComponent,
    PaypalComponent,
    EditbaidangComponent,
    SinhvienCvComponent,
    ModuleTemplateChooseComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CKEditorModule,
        HttpClientModule,
        ReactiveFormsModule,
        JwPaginationModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        NgxPayPalModule,
        MatStepperModule,
        A11yModule
    ],
  providers: [
    CommentService,
    ShareService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
