import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController, LoadingController } from "@ionic/angular";
import { GetUserData } from "../../utils/api/getUserData";
import { UpdateUserProfile } from "../../utils/api/updateUserProfile";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage {
  userName: any;
  userData: "";

  constructor(
    public router: Router,
    public loadingCtrl: LoadingController,
    public toastController: ToastController
  ) {}

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data["message"],
      duration: 2000,
      position: "top",
      color: data["color"],
    });
    toast.present();
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

  async getUserData() {
    let getUserData = new GetUserData();
    await getUserData
      .getUserData(this.userName)
      .then((response) => {
        // console.log(response["data"]);
        this.userData = response["data"];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateProfile(data) {
    let params = {
      username: this.userName["username"],
      phone: data.form.value["phone"],
      email: data.form.value["email"],
      name: data.form.value["name"],
    };

    let updateProfile = new UpdateUserProfile();
    updateProfile
      .updateUserProfile(params)
      .then((response) => {
        this.presentToast(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  backToHome() {
    this.router.navigateByUrl("/home/tab1", {
      replaceUrl: true,
      state: { username: this.userName["username"] },
    });
  }

  async ngAfterViewInit() {
    this.userName = await this.router.getCurrentNavigation().extras.state;
    if (this.userName == undefined) {
      this.router.navigateByUrl("/home/tab1", { replaceUrl: true });
    } else {
      this.presentLoadingCustom();
    }
  }
}
