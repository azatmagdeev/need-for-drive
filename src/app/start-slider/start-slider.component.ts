import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {slides} from '../../constants';

@Component({
  selector: 'app-start-slider',
  templateUrl: './start-slider.component.html',
  styleUrls: ['./start-slider.component.scss']
})
export class StartSliderComponent implements OnInit {

  @ViewChild("slideEl")
  slideEl?: ElementRef;

  private intervalId?: number;
  slides: {
    descr: string;
    img: string;
    active: boolean;
    title: string
  }[];

  constructor() {
    this.slides = slides;
  }

  ngOnInit(): void {
    this.setInterval();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  getActiveSlideIndex() {
    return this.slides.findIndex(slide => slide.active)
  }

  getSlideWidth() {
    if (this.slideEl) return this.slideEl.nativeElement.clientWidth;
  }

  setInterval() {
    this.intervalId = setInterval(() => {
      this.setActiveSlide(this.getNextIndex());
    }, 7000)
  }

  getNextIndex(){
    const newIndex = this.getActiveSlideIndex() + 1;
    return newIndex >= this.slides.length? 0 : newIndex;
  }

  selectSlide(title: string) {
    const newIndex = this.slides.findIndex(slide => slide.title === title);
    this.changeActiveSlideByUser(newIndex)
  }

  next() {
    this.changeActiveSlideByUser(this.getNextIndex())
  }

  prev() {
    let newIndex = this.getActiveSlideIndex() - 1;
    if (newIndex < 0) newIndex = this.slides.length - 1;
    this.changeActiveSlideByUser(newIndex)
  }

  changeActiveSlideByUser(index: number) {
    clearInterval(this.intervalId);
    this.setActiveSlide(index);
    this.setInterval();
  }

  setActiveSlide(index: number) {
    this.slides.forEach(slide => slide.active = false);
    this.slides[index].active = true;
  }

  calculateRight() {
    const right = this.getActiveSlideIndex() * this.getSlideWidth();
    return (right ? right : 0) + 'px'
  }
}
