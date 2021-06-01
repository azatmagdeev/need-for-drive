import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSliderComponent } from './start-slider.component';

describe('StartSliderComponent', () => {
  let component: StartSliderComponent;
  let fixture: ComponentFixture<StartSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
