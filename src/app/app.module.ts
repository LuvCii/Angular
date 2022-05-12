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

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    AgeComponent,
    GenderComponent,
    AvatarComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
