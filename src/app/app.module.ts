import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ShowValidateComponent } from './component/show-validate/show-validate.component';
import { HomeComponent } from './component/home/home.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { NewsPageComponent } from './component/news-page/news-page.component';
import { ContactPageComponent } from './component/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { AdminCartDetailComponent } from './pages/admin/admin-cart/admin-cart-detail/admin-cart-detail.component';
import { AdminCartListComponent } from './pages/admin/admin-cart/admin-cart-list/admin-cart-list.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryListDetailComponent } from './pages/admin/admin-category/admin-category-list-detail/admin-category-list-detail.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserDetailComponent } from './pages/admin/admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    AdminProductListComponent,
    LoginComponent,
    ShowValidateComponent,
    HomeComponent,
    ProductPageComponent,
    NewsPageComponent,
    ContactPageComponent,
    AdminProductListComponent,
    DashboardComponent,
    SignupComponent,
    ProductDetailComponent,
    CartComponent,
    ShoppingCartComponent,
    AdminCartDetailComponent,
    AdminCartListComponent,
    AdminCategoryListComponent,
    AdminCategoryListDetailComponent,
    AdminCategoryFormComponent,
    AdminUserListComponent,
    AdminUserDetailComponent,
    AdminUserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
