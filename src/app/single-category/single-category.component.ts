import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { WateserviceService } from '../services/wateservice.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgProgress } from "ngx-progressbar";
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any;

@Component({
    selector: 'app-single-category',
    templateUrl: './single-category.component.html',
    styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit, AfterViewChecked {
    subcatId: number
    Subcat: any
    settings: any;
    isLoading : boolean = false
    current_page: number = 1
    today = Date.now();
    lang: boolean;
    page :any = 1
    constructor(
        private _WateserviceService: WateserviceService,
        private router: Router,
        private route: ActivatedRoute,
        private spinner: NgxSpinnerService,
        public ngProgress: NgProgress) {
        route.params.subscribe(val => {
            this.getSingleCategory();
            this.getSiteSettings();
            this.lang = this.setValuseLang();
        });
    }



    ngOnInit() {
        this.page = this.route.snapshot.queryParamMap.get('page');
        this.subcatId = this.route.snapshot.params['id'];
        this.ngProgress.start();
        this.getSingleCategory();
        this.getSiteSettings();
        this.lang = this.setValuseLang();
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
    }

    setValuseLang() {
        return this._WateserviceService.checkLang();
    }
    getSiteSettings() {
        this._WateserviceService.getSiteSettings().subscribe(settings => {
            this.settings = settings[0];
        })
    }

    getSingleCategory(): any {
        this._WateserviceService.getSubCat(this.route.snapshot.params['id'], this.current_page).subscribe(data => {
            this.Subcat = data
            console.log('subCategory : ', this.Subcat);
        })
    }

    pageChanged(page) {
        this.isLoading = true
        this.spinner.show();
        this.page = page;
        this.router.navigate(["singleSubCategory/", this.subcatId],{queryParams:{page:this.page}});
        this._WateserviceService.getSubCat(this.subcatId, page).subscribe(data => {
            this.Subcat = data
            this.spinner.hide();
            console.log('subCategory : ', this.Subcat);
        })
    }

}
