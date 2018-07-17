import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-slider',
  templateUrl: './ad-slider.component.html',
  styleUrls: ['./ad-slider.component.css']
})
export class AdSliderComponent implements OnInit {
  @Input() Sliders
  @Input() baseImage
  constructor() { }

  ngOnInit() {
  }

}
