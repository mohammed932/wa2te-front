import { AfterViewChecked, Component, OnInit, ViewContainerRef } from '@angular/core';
import { WateserviceService } from '../services/wateservice.service';

import { ActivatedRoute, Router } from '@angular/router';
//import * as $ from 'jquery';


import { InvalidData } from "../invaliddata";
//Import ToastsManager
import { NgProgress } from 'ngx-progressbar';
import * as _ from "lodash";
declare let $: any;
import { NgxSpinnerService } from 'ngx-spinner';
//declare let jQuery: any;
@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.css']
})



export class SingleComponent implements OnInit, AfterViewChecked {

    contactID: number;
    single: any;
    related: any
    settings: any;
    isLoading: boolean = true
    lang: boolean;
    today = Date.now(); 

    user = {
        correct: [
            { name: 'phone', selected: false, id: 1 },
            { name: 'working hours', selected: false, id: 2 },
        ]
    };

    constructor(private _WateserviceService: WateserviceService,
        private router: Router,
        private vcr: ViewContainerRef,
        private spinner: NgxSpinnerService,
        private route: ActivatedRoute,
        public ngProgress: NgProgress) {
        route.params.subscribe(val => {
            // this.getSingle();
            this.getSiteSettings();
        });


    }





    ngOnInit() {
        this.contactID = this.route.snapshot.params['id'];
        this.spinner.show();
        this.ngProgress.start();
        this.getSingle();
        this.getSiteSettings();
        this.lang = this._WateserviceService.checkLang()
        this.ngProgress.done();
    }

    ngAfterViewChecked() {

        $(document).ready(function () {
            $("body").css("overflow", "hidden");
        });
        let width = $(window).width();
        if ((width <= 767)) {
            $('.categories-cards, #single .place-details').mCustomScrollbar({
                theme: "inset",
                mouseWheelPixels: 200,
                // scrollInertia: .1,
                scrollButtons: { enable: true }
            });
            // Fix Single Catg Row
            $('.single-card.asGrid').removeClass('asGrid').addClass('asRow');
        } else {
            $('.categories-cards, .place-details, .result-cards, header > nav > ul, #cities, #single .place-details').mCustomScrollbar({
                theme: "inset",
                mouseWheelPixels: 200,
                // scrollInertia: .1,
                scrollButtons: { enable: true }
            });
        }
    }

    getSiteSettings() {
        this._WateserviceService.getSiteSettings().subscribe(settings => {
            this.settings = settings[0];
        })
    }


    getSingle() {
        this._WateserviceService.getSingle(this.contactID).subscribe(single => {
            this.single = single.single[0]
            console.log('this.single : ', this.single);
            this.related = single.Related
            this.related = this.related.filter((v, i, a) => a.indexOf(v) === i); //unique items
            this.related = _.take(_.shuffle(this.related), 4)
            this.isLoading = true
            console.log('this.isLoading : ', this.isLoading);

        });
    }

    mapContact(lat, lng) {
        sessionStorage.setItem('lat', lat)
        sessionStorage.setItem('lng', lng)
    }

  

}
