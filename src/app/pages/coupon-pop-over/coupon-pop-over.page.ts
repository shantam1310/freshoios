import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PopoverController, NavParams } from "@ionic/angular";

@Component({
  selector: "app-coupon-pop-over",
  templateUrl: "./coupon-pop-over.page.html",
  styleUrls: ["./coupon-pop-over.page.scss"],
})
export class CouponPopOverPage implements OnInit {
  coupon: any;
  amount: any;
  constructor(private popover: PopoverController, public navParams: NavParams) {
    this.coupon = this.navParams.get("key1");
    this.amount = this.navParams.get("key2");
    // this.coupon = localStorage.getItem("coupon");
    // this.amount = localStorage.getItem("couponamount");
  }

  ngOnInit() {}
  ClosePopover() {
    this.popover.dismiss();
  }
}
