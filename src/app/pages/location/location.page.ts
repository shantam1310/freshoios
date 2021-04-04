import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-location",
  templateUrl: "./location.page.html",
  styleUrls: ["./location.page.scss"],
})
export class LocationPage implements OnInit {
  constructor(private popover: PopoverController) {
    this.popover = popover;
  }
  ngOnInit() {}
  ClosePopover(value: any) {
    if (value) {
      console.log(value);
      this.popover.dismiss();
    }
  }
}
