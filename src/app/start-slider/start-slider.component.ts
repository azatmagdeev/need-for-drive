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

  getActiveSlideIndex() {
    this.activeSlideIndex = this.slides.findIndex(slide => slide.active)
  }

  getSlideWidth() {
    console.log(document.querySelector('.slider__slide'));
    // @ts-ignore
    this.slideWidth = document.querySelector('.slider__slide').getBoundingClientRect().width
  }

  constructor() {
    this.getActiveSlideIndex();
    // this.getSlideWidth();
  }

  ngOnInit(): void {
  }

  selectSlide($event: Event) {
    this.slides.forEach(slide => slide.active = false);
    // @ts-ignore
    const slide = this.slides.find(slide => slide.title === $event.target.title)
    // @ts-ignore
    slide.active = true;
    this.getSlideWidth();
    this.getActiveSlideIndex();

  }

  calculateRight() {
    // @ts-ignore
    return (this.activeSlideIndex * this.slideWidth)+'px'
  }
}
