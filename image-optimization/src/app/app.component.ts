import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bannerImg = "";
  birdsImg = "";
  animalsImg = "";
  flowersImg = "";
  fruitsImg = "";
  vegetablesImg = "";

  ngOnInit(): void {
    this.bannerImg = "https://images.pexels.com/photos/2272760/pexels-photo-2272760.jpeg";
    this.birdsImg = "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?w=1618&h=1080";
    this.animalsImg = "https://images.pexels.com/photos/50579/africa-elephant-words-animal-50579.jpeg?w=1613&h=1080";
    this.flowersImg = "https://images.pexels.com/photos/46974/muscari-common-grape-hyacinth-blossom-bloom-46974.jpeg?w=1451&h=1080";
    this.fruitsImg = "https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg?w=1620&h=1080";
    this.vegetablesImg = "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?w=1440&h=1080";
  }
}
