import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCarouselComponent } from './second-carousel.component';

describe('SecondCarouselComponent', () => {
  let component: SecondCarouselComponent;
  let fixture: ComponentFixture<SecondCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
