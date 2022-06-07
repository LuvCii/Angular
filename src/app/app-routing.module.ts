import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './component/contact-page/contact-page.component';
import { HomeComponent } from './component/home/home.component';
import { NewsPageComponent } from './component/news-page/news-page.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';

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
        path: 'product',
        component: ProductPageComponent
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
    children: [
      {
        path: 'products',
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
      {
        path: ':id',
        component: AdminProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
