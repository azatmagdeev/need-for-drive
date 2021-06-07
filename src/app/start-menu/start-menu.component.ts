import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {
  open: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggle() {
    this.open = !this.open;
  }
}
