import { Component, OnInit } from "@angular/core";

import { GetAllData } from "../../utils/api/getAllData";

@Component({
  selector: "app-fani16",
  templateUrl: "./fani16.page.html",
  styleUrls: ["./fani16.page.scss"],
})
export class Fani16Page implements OnInit {
  name_customer: String;
  desc_customer: String;
  data: Object;

  constructor() {}

  ngOnInit() {
    let params: Object = {};

    let getAllData = new GetAllData();

    getAllData
      .getData(params)
      .then((data) => {
        console.log(data["data"]);
        this.data = data["data"];
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
