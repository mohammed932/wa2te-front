import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './app-branch.component.html',
  styleUrls: ['./app-branch.component.css']
})
export class AppBranchComponent implements OnInit {

  @Input() Branches
  @Input() baseImage
  constructor() { }

  ngOnInit() {
  }

  mapBranch(lat, lng) {
    console.log('branch lat : ', lat);
    sessionStorage.setItem('lat', lat)
    sessionStorage.setItem('lng', lng)
  }

}
