import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input() contact
  @Input() baseImage
  constructor() { }

  ngOnInit() {
  }


  truncate(string) {
    return _.truncate(string, {
      'length': 40,
      'separator': ' '
    });
  }

}
