import { Component } from "@angular/core";
import {
  ModalController,
  NavParams,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { GetUserData } from "../../../utils/api/getUserData";
import { UserCreatePost } from "../../../utils/api/posting";

@Component({
  selector: "app-modalpost",
  templateUrl: "./modalpost.component.html",
  styleUrls: ["./modalpost.component.scss"],
})
export class ModalpostComponent {
  userName: any;
  userData: "";

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public router: Router,
    public loadingCtrl: LoadingController,
    public toastController: ToastController
  ) {}

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

  ngAfterViewInit() {
    this.userName = { username: this.navParams.data["username"] };
    this.presentLoadingCustom();
  }

  post(data) {
    let params = {
      username: this.userName.username,
      content: data.form.value["post_content"],
    };

    let newPost = new UserCreatePost();
    newPost
      .userCreatePost(params)
      .then((response) => {
        // console.log(response);
        this.presentToast(response);
        this.closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
