import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor() { }


  post(serviceName: string, data: any) {
    const headers = new HttpHeaders();
    const options = { header: headers, withCredentials : false};
    const url = environment.apiUrl + serviceName;

    console.log("JSON.stringify(data) : "  + JSON.stringify(data) );
    
    return this.http.post(url, data, options);
  }
}