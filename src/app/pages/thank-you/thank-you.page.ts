import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-thank-you",
  templateUrl: "./thank-you.page.html",
  styleUrls: ["./thank-you.page.scss"],
})
export class ThankYouPage implements OnInit {
  order: any;
  constructor() {}
  ngOnInit() {}
  ionViewWillEnter() {
    localStorage.getItem("order");
    // this.order_id = localStorage.getItem("order_id");
    // this.order_email = localStorage.getItem("order_email");
    // this.order_first_name = localStorage.getItem("order_first_name");
    // this.order_phone = localStorage.getItem("order_phone");
    this.order = JSON.parse(localStorage.getItem("order"));
    console.log("orderid", JSON.parse(localStorage.getItem("order")));
  }
}
