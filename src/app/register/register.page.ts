import { Component, OnInit } from "@angular/core";

import { UserRegister } from "../../utils/api/register";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  username: any;

  constructor(public toastController: ToastController) {}

  ngOnInit() {}

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data["message"],
      duration: 2000,
      position: "top",
      color: data["color"],
    });
    toast.present();
  }

  register(form) {
    let params = {
      username: form.form.value["username"],
      dp_url:
        "https://firebasestorage.googleapis.com/v0/b/sanskuy-3a225.appspot.com/o/fani%2Fdefault.png?alt=media&token=919d9eaf-e799-4b32-b9d3-cee625e0f1cc",
      name: form.form.value["name"],
      email: form.form.value["email"],
      phone: form.form.value["phone"],
      password: form.form.value["password"],
    };

    let userRegister = new UserRegister();
    userRegister
      .resigter(params)
      .then((response) => {
        this.presentToast(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
