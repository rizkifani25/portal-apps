import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { NavigationExtras, Router } from "@angular/router";
import { UserLogin } from "../../utils/api/login";
import { ToastController } from "@ionic/angular";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  username: any;

  constructor(
    public navCtrl: NavController,
    public toastController: ToastController,
    public router: Router
  ) {}

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      position: "top",
      color: "danger",
    });
    toast.present();
  }

  login(form) {
    let params = {
      username: form.form.value["username"],
      password: form.form.value["password"],
    };

    let userLogin = new UserLogin();
    userLogin
      .login(params)
      .then((response) => {
        if (response["permission"] == true) {
          this.router.navigateByUrl("/home/tab1", {
            state: { username: form.form.value["username"] },
          });
        } else {
          this.presentToast(response["data"]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
