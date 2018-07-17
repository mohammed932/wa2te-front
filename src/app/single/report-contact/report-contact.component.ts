import { WateserviceService } from './../../services/wateservice.service'
import { InvalidData } from './../../invaliddata'
import { Component, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-report-contact',
  templateUrl: './report-contact.component.html',
  styleUrls: ['./report-contact.component.css']
})
export class ReportContactComponent implements OnInit {
  data = new InvalidData()
  lang: any
  modalRef: BsModalRef;
  @Input() contactID
  constructor(private _WateserviceService: WateserviceService,
    private vcr: ViewContainerRef,
    private modalService: BsModalService,
    public toastr: ToastsManager
  ) {
    this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {
    this.lang = this._WateserviceService.checkLang()
  }

  addinvalidData() {
    this.data.contact_id = this.contactID
    console.log("dddsa : ", this.data)
    this._WateserviceService.addInvalidData(this.data).subscribe(response => {
      if (response.success) {
        this.modalRef.hide();
        this.modalRef = null;
        if (this.lang)
          this.toastr.success('Thanks for Interesting!', 'Success!')
        else
          this.toastr.success('شكرا علي إهتمامك !', 'Success!')
      }
    })
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
