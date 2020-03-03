import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {

    }

  setNewCustomer(customer: Customer) {
    return this.http.post(this.baseUrl + 'Customer', customer);
  }
}
