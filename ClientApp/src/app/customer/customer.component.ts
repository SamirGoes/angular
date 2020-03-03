import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../model/customer';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers: Customer[];
  public formCustomer: FormGroup;

  constructor(
    private customerService: ServicesService,
    private formBuilder: FormBuilder,
    http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    http.get<Customer[]>(baseUrl + 'customer').subscribe(result => {
      this.customers = result;
    }, error => console.error(error));
  }

  ngOnInit() {
    this.createForm(new Customer());
  }

  createForm(customer: Customer){
    this.formCustomer = this.formBuilder.group({
      id: [customer.Id],
      name: [customer.Name],
      age: [customer.Age]
    });
  }

  onSubmit() {
    this.customerService.setNewCustomer(this.formCustomer.value)
    .subscribe(
      data => { alert('success'); },
      Error => { alert('fail'); }
      );
    this.formCustomer.reset(new Customer());
  }

}
