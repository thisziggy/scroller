import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-carousel.component.html',
  styleUrl: './second-carousel.component.scss'
})

export class SecondCarouselComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() itemsPerView: number = 3;
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  get visibleItems(): any[] {
    return this.items.slice(this.currentIndex, this.currentIndex + this.itemsPerView);
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next(): void {
    if (this.currentIndex < this.items.length - this.itemsPerView) {
      this.currentIndex++;
    }
  }
}
