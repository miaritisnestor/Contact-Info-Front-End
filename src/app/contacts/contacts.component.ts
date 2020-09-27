import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from '../services/contact-info.service';
import {ViewChild, ElementRef} from '@angular/core';
import { ContactListAddEditFormComponent } from 'src/app/contacts/contact-list-add-edit-form/contact-list-add-edit-form.component';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: []
})
export class ContactsComponent implements OnInit {

  @ViewChild('openModalNative') openModalNative: ElementRef;

  constructor(public contactInfoService: ContactInfoService,public contactListAddEditFormComponent:ContactListAddEditFormComponent) { }

  ngOnInit(): void {

  }

  clear(){
    this.contactListAddEditFormComponent.resetForm();
  }

}
