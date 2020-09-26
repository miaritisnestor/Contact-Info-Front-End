import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactInfo } from 'src/app/models/contact-info.model';
import { ContactInfoService } from 'src/app/services/contact-info.service';
import { PhoneService } from 'src/app/services/phone.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: []
})
export class ContactListComponent implements OnInit {

  constructor(public contactInfoService: ContactInfoService, public phoneService: PhoneService) { }

  ngOnInit(): void {
    this.contactInfoService.getContactInfos();
  }

  populateForm(ci:ContactInfo){
    // open form
    this.contactInfoService.openModalNative.nativeElement.click();
    // assign record data to form fields
    this.contactInfoService.contactInfoFormData = Object.assign({},ci);
  }

  onDelete(id){
    if(confirm("You try to delete a record! Are you sure?")){
      this.contactInfoService.deleteContactInfo(id).subscribe(
        res=>{
          this.contactInfoService.getContactInfos();
      }, err=>{
        console.log(err);
      });
    }
  }
  

}
