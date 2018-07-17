import { WateserviceService } from './../services/wateservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-rights',
  templateUrl: './copy-rights.component.html',
  styleUrls: ['./copy-rights.component.css']
})
export class CopyRightsComponent implements OnInit {
  settings: any
  today = Date.now();
  constructor(private _WateserviceService: WateserviceService) { }

  ngOnInit() {
    this.getSiteSettings()
  }

  getSiteSettings() {
    this._WateserviceService.getSiteSettings().subscribe(settings => {
      this.settings = settings[0];
    })
  }

}
