import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css']
})
export class WorkingHoursComponent implements OnInit {
  modalRef: any
  @Input() workingHours
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  checkTime(time) {
    if (time > '12:00') {
      let myTime = moment.utc(time, "HH:mm")
      let end = moment.utc('12:00', "HH:mm")
      let x = moment.duration(myTime.diff(end));
      // x.subtract(30, 'minutes');
      var s = moment.utc(+x).format('H:mm');
      return `${s} P.M`
    } else {
      return `${time.replace(/^0(?:0:0?)?/, '')} A.M`
    }
  }

}
