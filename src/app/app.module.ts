import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactListAddEditFormComponent } from './contacts/contact-list-add-edit-form/contact-list-add-edit-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as bootstrap from 'bootstrap';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactListComponent,
    ContactListAddEditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactsComponent,ContactListAddEditFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
