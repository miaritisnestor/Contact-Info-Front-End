import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from '../models/phone.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  public phoneFormData: Phone = {
    phoneId : 0,
    mobilePhone : '',
    homePhone : '',
    workPhone : '',
    contactInfoId : 0,
    contactInfo : null
  };

  public phoneList: Phone[];
  readonly rootUrl = "http://localhost:54672/api/";

  constructor(public http:HttpClient) { }

  getPhones(){
    this.http.get(this.rootUrl + 'Phones').toPromise().then(res=>{this.phoneList = res as Phone[]});
  }

  postPhone(){
    return this.http.post(this.rootUrl + 'Phones', this.phoneFormData);
  }

  putPhone(id){
    return this.http.put(this.rootUrl + 'Phones/' + id, this.phoneFormData);
  }

  deletePhone(id){
    return this.http.delete(this.rootUrl + 'Phones/' + id);
  }

}
