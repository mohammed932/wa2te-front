import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

// noinspection TypeScriptCheckImport
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';

import { WateserviceService } from './services/wateservice.service';
import { MessageService } from "./services/message.service";
import { SafeUrlPipe } from "./safeurlpipe";
import { SingleCategoryComponent } from './single-category/single-category.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { PagerService } from "./_services";
//Import toast module
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { SearchPipePipe } from './search-pipe.pipe';
import { NgProgressModule } from 'ngx-progressbar';
import { AppBranchComponent } from './single/app-branch/app-branch.component';
import { SliderComponent } from './single/slider/slider.component';
import { AdSliderComponent } from './single-category/ad-slider/ad-slider.component';
import { CopyRightsComponent } from './copy-rights/copy-rights.component';
import { FooterComponent } from './footer/footer.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { MenuImageComponent } from './single/menu-image/menu-image.component';
import { WorkingHoursComponent } from './single/working-hours/working-hours.component';
import { ReportContactComponent } from './single/report-contact/report-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    SingleCategoryComponent,
    SidenavComponent,
    HomeComponent,
    SingleComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    SafeUrlPipe,
    SearchPipePipe,
    AppBranchComponent,
    SliderComponent,
    AdSliderComponent,
    CopyRightsComponent,
    FooterComponent,
    ContactCardComponent,
    HomeFooterComponent,
    MenuImageComponent,
    WorkingHoursComponent,
    ReportContactComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, NgbModule.forRoot(),
    MatInputModule, 
    ModalModule.forRoot(), 
    ToastModule.forRoot(),
    ReactiveFormsModule, 
    HttpClientModule, 
    TypeaheadModule.forRoot(), 
    NgxSpinnerModule,
    NgProgressModule,
    MatAutocompleteModule, 
    BrowserAnimationsModule, 
    Ng2AutoCompleteModule ,
    NgxPaginationModule
  ],
  providers: [WateserviceService, MessageService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
