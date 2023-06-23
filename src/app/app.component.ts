import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgOfTheDay: any;

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((data) => {
      this.imgOfTheDay = data;
    });
  }
}
