import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ngNasa';

  imgOfTheDay = ""

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(url => {
      this.imgOfTheDay = url;
      console.log(this.imgOfTheDay); // Optionally log the URL in the component as well
    });
  }
}
