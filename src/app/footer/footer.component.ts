import { Component, OnInit } from '@angular/core';
import { WateserviceService } from './../services/wateservice.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today = Date.now();
  settings: any
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
