import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './component/contact-page/contact-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { NewsPageComponent } from './component/news-page/news-page.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminCartListComponent } from './pages/admin/admin-cart/admin-cart-list/admin-cart-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'category/:id',
        component: ProductPageComponent
      },
      // {
      //   path: 'category/:id',
      //   component: ProductDetailComponent
      // },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'cart',
        component: ShoppingCartComponent
      },
      {
        path: 'news',
        component: NewsPageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent
          },
          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFormComponent
          },
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            component: AdminCategoryListComponent
          },
          {
            path: 'create',
            component: AdminCategoryFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminCategoryFormComponent
          },
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            component: AdminUserListComponent
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            component: AdminCartListComponent
          }
        ]
      }


    ]
  },

  {
    path: 'auth',
    children: [
      {
        path: 'signin',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
