import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactInfo } from '../models/contact-info.model';
import { Phone } from '../models/phone.model';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  public contactInfoFormData: ContactInfo = {
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
  };

  public contactInfoList: ContactInfo[];

  readonly rootUrl = "http://localhost:54672/api/";

  constructor(public http:HttpClient) { }

  async getContactInfos(){
    await this.http.get(this.rootUrl + 'ContactInfos').toPromise().then(res=>{this.contactInfoList = res as ContactInfo[];});
    // this.phoneList.push({phoneId: 8, mobilePhone:"4444", homePhone:"5555", workPhone:"66666", contactInfoId:2, contactInfo:null})
    // Object.assign({}, this.contactInfoList[0], this.phoneList[0]);
    
  }

  postContactInfo(){
    return this.http.post(this.rootUrl + 'ContactInfos', this.contactInfoFormData);
  }

  putContactInfo(id){
    return this.http.put(this.rootUrl + 'ContactInfos/' + id, this.contactInfoFormData);
  }

  deleteContactInfo(id){
    return this.http.delete(this.rootUrl + 'ContactInfos/' + id);
  }

}
