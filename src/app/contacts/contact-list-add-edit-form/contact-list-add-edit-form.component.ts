import { Component, OnInit} from '@angular/core';
import { ContactInfoService } from 'src/app/services/contact-info.service';
import { PhoneService } from 'src/app/services/phone.service';
import { NgForm } from '@angular/forms';
import {ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-contact-list-add-edit-form',
  templateUrl: './contact-list-add-edit-form.component.html',
  styleUrls: []
})

export class ContactListAddEditFormComponent implements OnInit {
  
  // closeModalNative: HTMLInputElement;
  
@ViewChild('closeModalNative') closeModalNative: ElementRef;
  
  // public show:boolean = false;

  constructor(public contactInfoService: ContactInfoService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    this.contactInfoService.contactInfoFormData = {
      contactInfoId: 0,
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: {
        phoneId: 0,
        mobilePhone: '',
        homePhone: '',
        workPhone: '',
        contactInfo: null,
        contactInfoId: 0
      }
    }
  }

  onSubmit(form:NgForm){
    if(this.contactInfoService.contactInfoFormData.contactInfoId == 0){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

  insertRecord(form:NgForm){
    this.contactInfoService.postContactInfo().subscribe(
      res=>{
        this.resetForm(form);
        // close form 
        this.closeModalNative.nativeElement.click();
        this.contactInfoService.getContactInfos();
      }, 
      err=>{
        console.log(err);
      });
  }

  updateRecord(form:NgForm){
    this.contactInfoService.putContactInfo(this.contactInfoService.contactInfoFormData.contactInfoId).subscribe(
      res=>{
        this.resetForm(form);
        // close form 
        this.closeModalNative.nativeElement.click();
        this.contactInfoService.getContactInfos();
      }, 
      err=>{
        console.log(err);
      });
  }

}
