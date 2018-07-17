import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-image',
  templateUrl: './menu-image.component.html',
  styleUrls: ['./menu-image.component.css']
})
export class MenuImageComponent implements OnInit {
  @Input() menuImg
  @Input() baseImage
  constructor() { }

  ngOnInit() {
  }

}
