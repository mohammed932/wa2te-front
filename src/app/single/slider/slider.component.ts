import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() Sliders
  @Input() lat
  @Input() lng
  @Input() baseImage
  constructor() { }

  ngOnInit() {
  }

  getUrl() {    
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyC8RGMfpx-R-YOR2QwLc69OZN4CEW25StE&q=${sessionStorage.getItem('lat')},${sessionStorage.getItem('lng')}`;
  }
}
