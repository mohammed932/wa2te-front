import { WateserviceService } from './../services/wateservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-home-footer',
    templateUrl: './home-footer.component.html',
    styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {
    @Input() settings
    lang: boolean
    constructor(private router: Router, private _WateserviceService: WateserviceService) { }

    ngOnInit() {
        this.lang = this.setValuseLang()
        console.log("my lang : ", this.lang);
    }


    changeLanguage($event) {
        console.log("sdsd");
        if ($event == 'en') {
            localStorage.setItem('lang', 'en');
        } else {
            localStorage.setItem('lang', 'ar');
        }
        this.router.navigate(['/']);
    }

    setValuseLang() {
        return this._WateserviceService.checkLang();
    }

}
