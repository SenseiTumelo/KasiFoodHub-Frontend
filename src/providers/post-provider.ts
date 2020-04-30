import {Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider{

    server: string = "http://localhost/KasiFoodHub-Frontend/server_api/";
    
    constructor(public http : Http){


    }
    postData(body,file){

        let type = "application/json; charset= UTF-8";
        let headers = new Headers({'Content-Type': type});
        let Options = new RequestOptions({headers:headers});

        return this.http.post(this.server + file, JSON.stringify(body),Options)
        .map( res => res.json());
    
    }

}
