import {Component, OnInit} from '@angular/core';
import {slides} from '../../constants';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {
  slides = slides;
  open: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggle() {
    this.open = !this.open;
  }
}
