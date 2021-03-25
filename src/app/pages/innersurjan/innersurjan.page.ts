import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-innersurjan",
  templateUrl: "./innersurjan.page.html",
  styleUrls: ["./innersurjan.page.scss"],
})
export class InnersurjanPage {
  @ViewChild("mySlider") slider: IonSlides;
  //dateNow = Date();
  //date = new Date(new Date(this.dateNow).getTime() - 1000 * 60 * 60 * 8);

  constructor() {
    // slider.startAutoplay();
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
