import {Component, OnInit} from '@angular/core';

const slides = [
  {
    title: 'Бесплатный парковка',
    descr: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    img: 'img_1.png',
    active: true
  },
  {
    title: 'Страховка',
    descr: 'Полная страховка автомобиля.',
    img: 'img_2.png',
    active: false
  },
  {
    title: 'Бензин',
    descr: 'Полный бак на любой заправке города за наш счёт.',
    img: 'img_3.png',
    active: false
  },
  {
    title: 'Обслуживание',
    descr: 'Автомобиль проходит еженедельное ТО.',
    img: 'img_4.png',
    active: false
  },
]

@Component({
  selector: 'app-start-slider',
  templateUrl: './start-slider.component.html',
  styleUrls: ['./start-slider.component.scss']
})
export class StartSliderComponent implements OnInit {

  slides = slides;
  activeSlideIndex: number | undefined;
  slideWidth: number | undefined = 0;
  private intervalId: number | undefined = undefined;

  getActiveSlideIndex() {
    this.activeSlideIndex = this.slides.findIndex(slide => slide.active)
  }

  getSlideWidth() {
    // @ts-ignore
    this.slideWidth = document.querySelector('.slider__slide').getBoundingClientRect().width
  }

  constructor() {
    this.getActiveSlideIndex();
    this.setInterval();
  }

  setInterval() {
    this.intervalId = setInterval(()=>this.next(),7000)
  }

  ngOnInit(): void {
  }

  selectSlide($event: Event) {
    clearInterval(this.intervalId)
    this.slides.forEach(slide => slide.active = false);
    // @ts-ignore
    const slide = this.slides.find(slide => slide.title === $event.target.title)
    // @ts-ignore
    slide.active = true;
    this.getSlideWidth();
    this.getActiveSlideIndex();
    this.setInterval();
  }

  next() {
    clearInterval(this.intervalId)
    const index = this.activeSlideIndex;
    // @ts-ignore
    let newIndex = index + 1;
    if (newIndex >= this.slides.length) newIndex = 0;
    this.slides.forEach(slide => slide.active = false);
    this.slides[newIndex].active = true;
    this.getSlideWidth();
    this.getActiveSlideIndex();
    this.setInterval();
  }

  prev() {
    clearInterval(this.intervalId)
    const index = this.activeSlideIndex;
    // @ts-ignore
    let newIndex = index - 1;
    if (newIndex < 0) newIndex = this.slides.length - 1;
    this.slides.forEach(slide => slide.active = false);
    this.slides[newIndex].active = true;
    this.getSlideWidth();
    this.getActiveSlideIndex();
    this.setInterval();
  }

  calculateRight() {
    // @ts-ignore
    return (this.activeSlideIndex * this.slideWidth) + 'px'
  }
}
