import { Component, OnInit } from "@angular/core";

import { AddData } from "../../utils/api/addData";

@Component({
  selector: "app-newcustomer",
  templateUrl: "./newcustomer.page.html",
  styleUrls: ["./newcustomer.page.scss"]
})
export class NewcustomerPage implements OnInit {
  name_customer: String;
  desc_customer: String;
  data: Object;

  constructor() {}

  submitData = () => {
    console.log(this.desc_customer);
    console.log(this.name_customer);

    let params: Object = {
      name: this.name_customer,
      data: this.desc_customer
    };

    console.log(params);

    let addData = new AddData();
    addData
      .getData(params)
      .then(data => {
        this.data = data;
        console.log(this.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  ngOnInit() {}
}
