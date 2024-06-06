import { Component, AfterViewInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}
 ngAfterViewInit(): void {
  const wrapper = document.querySelector<HTMLElement>(".wrapper")!;
  const carousel = document.querySelector<HTMLElement>(".carousel")!;
  const firstCardWidth = carousel.querySelector<HTMLElement>(".card")!.offsetWidth;
  const arrowBtns = document.querySelectorAll<HTMLElement>(".wrapper i");
  
  let isDragging = false, isAutoPlay = true, startX = 0, startScrollLeft = 0, timeoutId: number;
  
  // Get the number of cards that can fit in the carousel at once
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
  
  
  
  // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
  this.renderer.addClass(carousel, 'no-transition');
  this.renderer.removeClass(carousel, 'no-transition');
  
  // Add event listeners for the arrow buttons to scroll the carousel left and right
  arrowBtns.forEach(btn => {
    this.renderer.listen(btn, 'click', () => {
      carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
  
  const dragStart = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      startX = (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX);
      startScrollLeft = carousel.scrollLeft;
  }
  
  const dragging = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return; // if isDragging is false return from here
      // Updates the scroll position of the carousel based on the cursor movement
      const currentX = (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX);
      carousel.scrollLeft = startScrollLeft - (currentX - startX);
  }
  
  const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
  }
  
  const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
      // Autoplay the carousel after every 2500 ms
      timeoutId = window.setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
  }
  // autoPlay();
  
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchstart", dragStart);
  carousel.addEventListener("touchmove", dragging);
  document.addEventListener("touchend", dragStop);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  // wrapper.addEventListener("mouseleave", autoPlay);
  
 }
}
