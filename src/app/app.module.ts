import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { NameComponent } from './table/name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { AgeComponent } from './table/age/age.component';
import { GenderComponent } from './table/gender/gender.component';
import { AvatarComponent } from './table/avatar/avatar.component';
import { StatusComponent } from './table/status/status.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './component/show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    AgeComponent,
    GenderComponent,
    AvatarComponent,
    StatusComponent,
    FormComponent,
    ShowValidateComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule //? Form module được sử dụng ở các component 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
