import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { SecondCarouselComponent } from './second-carousel/second-carousel.component';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, SecondCarouselComponent, CommonModule, HammerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'scroller';
  myItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
