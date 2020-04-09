import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  userName: any;

  constructor(public router: Router) {}

  async ngAfterViewInit() {
    this.userName = await this.router.getCurrentNavigation().extras.state;
  }

  goToTab1() {
    this.router.navigateByUrl("/home/tab1", {
      state: { username: this.userName },
    });
  }

  goToTab2() {
    this.router.navigateByUrl("/home/tab2", {
      state: { username: this.userName },
    });
  }

  goToTab3() {
    this.router.navigateByUrl("/home/tab3", {
      state: { username: this.userName },
    });
  }

  goToTab4() {
    this.router.navigateByUrl("/home/tab4", {
      state: { username: this.userName },
    });
  }
}
