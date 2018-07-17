import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DatePipe } from '@angular/common';

import { WateserviceService } from '../services/wateservice.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { PagerService } from "../_services";
import * as _ from 'underscore';
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgProgress } from "ngx-progressbar";
declare var $: any;

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewChecked {
    data: any = {
        governate : 0,
        cat: 0,
        keyword : "",
        page : 1
    }
    constructor(private _WateserviceService: WateserviceService,
        private router: Router,
        private route: ActivatedRoute,
        public ngProgress: NgProgress,
        private pagerService: PagerService,
        private fb: FormBuilder, ) {
    }

    settings: any;
    Contacts: any
    gov: any;

    // paged items
    today = Date.now();
    lang: boolean;
    searchForm: FormGroup;
    governments: any;
    categories: any;
    query: any;

    ngOnInit() {
        this.ngProgress.start();
        this.data.keyword = this.route.snapshot.params['name'];
        this.data.governate = this.route.snapshot.params['gov'];
        this.data.page = this.route.snapshot.queryParamMap.get('page');
        this.getResult();
        this.getSiteSettings();
        this.getAllGovernments();
        this.lang = this.setValuseLang();
        this.getAllCategories();
        this.searchForm = this.fb.group({
            name: [''],
        });
        this.ngProgress.done();
    }

    ngAfterViewChecked() {
        $(document).ready(function () {
            $("body").css("overflow", "hidden");
        });

        var width = $(window).width();
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

        $(window).resize(function () {
            var width = $(window).width();
            if ((width <= 767)) {
                $('.categories-cards').mCustomScrollbar({
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
        });
    }
    setValuseLang() {
        return this._WateserviceService.checkLang();
    }
    getSiteSettings() {
        this._WateserviceService.getSiteSettings().subscribe(settings => {
            this.settings = settings[0];
            // console.log(this.categories);
        })
    }

    getResult() {
        console.log(this.data);      
        this._WateserviceService.search(this.data).subscribe(data => {
            this.Contacts = data
            console.log('search data : ', data);
        })
    }

    search() {
        console.log("my data : ", this.data)
        this.router.navigate(["search/", this.data.keyword, this.data.governate , this.data.cat],{queryParams:{page:this.data.page}});
        this._WateserviceService.search(this.data).subscribe(data => {
            this.Contacts = data
            console.log("data returned is : ", data);
        })
    }

    getAllGovernments() {
        this._WateserviceService.getAllgovernments().subscribe(governments => {
            this.governments = governments;
            // console.log(this.categories);
        })
    }
    getAllCategories() {
        this._WateserviceService.showAllCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

    pageChanged(page) {
        this.data.page = page;
        this.router.navigate(["search/", this.data.keyword, this.data.governate , this.data.cat],{queryParams:{page:this.data.page}});
        console.log(this.data);
        this._WateserviceService.search(this.data).subscribe(data => {
            this.Contacts = data
            console.log("filter data is : ", data);
        })
    }

}
