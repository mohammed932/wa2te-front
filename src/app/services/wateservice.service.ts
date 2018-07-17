import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WateserviceService {

    // server = 'http://amrelmagic.website/wa2te/wateApi/api/';
    server = 'http://localhost/wateApi/public/api/';
    imageBaseUrl: any = "https://localhost/wateApi/public/storage/"
    constructor(private http: HttpClient) {
    }


    checkLang(): boolean {
        if (localStorage.getItem("lang") == 'en') return true;
        else return false;
    }

    getSiteSettings() {
        return this.http.get(this.server + "settings");
    }


    getAllgovernments() {
        return this.http.get(this.server + "governments");
    }

    // using in search component
    getSlidersSub() {
        return this.http.get(this.server + "slidersSubCat");
    }



    showAllCategories() {
        return this.http.get(this.server + "allCategories");
    }

    getSubCat(id, page): Observable<any> {
        return this.http.get(`${this.server}subCategory/${id}?page=${page}`);
    }

    getSingle(id): Observable<any> {
        return this.http.get(this.server + "contact/" + id);
    }

    addContact(info) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post<any>(this.server + "addContact", JSON.stringify(info), { headers });
    }
    addInvalidData(info) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post<any>(this.server + "addInvalidData", JSON.stringify(info), { headers });
    }

    search(param): Observable<any> {
        console.log('kkk : ', JSON.stringify(param));
        
        return this.http.get(`${this.server}search/${param.keyword}/${param.governate}/${param.cat}?page=${param.page}`);
    }
    filter(params): Observable<any> {
        console.log('params is : ', params);

        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post<any>(`${this.server}filterResults`, JSON.stringify(params), { headers });
    }


    searchItem(): Observable<any> {
        return this.http.get(this.server + "contactTerm");
    }

    getAllKeywords(): Observable<any> {
        return this.http.get(this.server + "allKeywords");
    }



}
