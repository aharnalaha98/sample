import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cid:string="";
  customerInfo:Array<Customer>=[];
  constructor(public router:Router,public customerSer:CustomerService) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("cid");
      if(obj!=null){
        this.cid=obj;
      }
      this.customerSer.loadCustomerDetails().subscribe(data=>this.customerInfo=data);
  }

}
