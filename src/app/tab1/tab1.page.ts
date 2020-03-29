import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(private menu: MenuController) {}

  openMenu() {
    this.menu.enable(true, "start");
    this.menu.open("start");
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  onLogout() {
    console.log("logout");
  }

  goToProfile() {
    console.log("gotoProfile");
  }

  doRefresh() {
    console.log("refresh");
  }
}
