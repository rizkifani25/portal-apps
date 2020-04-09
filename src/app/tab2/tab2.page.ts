import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { GetUserData } from "../../utils/api/getUserData";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  userName: any;
  userData: "";
  userPost: "";

  constructor(public router: Router, public loadingCtrl: LoadingController) {}

  async getUserData() {
    let getUserData = new GetUserData();
    await getUserData
      .getUserData(this.userName["username"])
      .then((response) => {
        // console.log(response["data"]);
        this.userData = response["data"];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async presentLoadingCustom() {
    let loading = await this.loadingCtrl.create({
      message: "Loading data. Please wait...",
    });

    await loading.present().then(async () => {
      this.getUserData();
    });

    loading.dismiss();
  }

  async ngAfterViewInit() {
    this.userName = await this.router.getCurrentNavigation().extras.state;
    this.presentLoadingCustom();
  }
}
