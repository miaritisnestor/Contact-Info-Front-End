import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from '../services/contact-info.service';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: []
})
export class ContactsComponent implements OnInit {

  @ViewChild('openModalNative') openModalNative: ElementRef;

  constructor(public contactInfoService: ContactInfoService) { }

  ngOnInit(): void {
  }

}
