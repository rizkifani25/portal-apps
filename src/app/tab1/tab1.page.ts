import { Component, OnDestroy, ViewChild } from "@angular/core";
import {
  MenuController,
  LoadingController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ModalpostComponent } from "./modalpost/modalpost.component";
import { GetUserData } from "../../utils/api/getUserData";
import { GetUserPost } from "../../utils/api/getPost";
import { DeletePost } from "../../utils/api/deletePost";

import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective,
} from "ngx-perfect-scrollbar";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnDestroy {
  public config: PerfectScrollbarConfigInterface = {};

  userName: any;
  userData: "";
  userPost: "";
  subscription: Subscription;

  constructor(
    private menu: MenuController,
    public router: Router,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
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

  async getUserPost() {
    let getUserPost = new GetUserPost();

    await getUserPost
      .getUserPost(this.userName)
      .then((response) => {
        // console.log(response["data"]);
        this.userPost = response["data"];
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
      this.getUserPost();
    });

    loading.dismiss();
  }

  async ngAfterViewInit() {
    this.userName = await this.router.getCurrentNavigation().extras.state;
    if (this.userName == undefined) {
      this.router.navigateByUrl("/login", { replaceUrl: true });
    } else {
      this.presentLoadingCustom();
    }
  }

  openMenu() {
    this.menu.enable(true, "start");
    this.menu.open("start");
  }

  onLogout() {
    this.userName = undefined;
    this.userData = undefined;
    this.userPost = undefined;
  }

  async onClickPost() {
    const modal = await this.modalCtrl.create({
      component: ModalpostComponent,
      componentProps: this.userName,
    });
    return await modal.present();
  }

  goToProfile(username) {
    this.router.navigateByUrl("profile", {
      state: { username: username },
    });
  }

  doRefresh() {
    this.presentLoadingCustom();
  }

  pullToRefresh(event) {
    this.presentLoadingCustom();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
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

  deletePost(username, content) {
    let params = {
      username: username,
      content: content,
    };
    let deletePost = new DeletePost();
    deletePost
      .userDeletePost(params)
      .then((response) => {
        this.presentToast(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    this.userName = null;
    this.userData = null;
    this.userPost = null;
  }
}
