import { Component } from '@angular/core';
import { Http, Request, RequestMethod, RequestOptions, Response } from '@angular/http';

@Component({
  selector: 'page-odata',
  templateUrl: 'odata.html',
})
export class OdataPage {

  url: string = '/V2/(S(hawcsa05yancq1hq4s1chtwp))/OData/OData.svc/Products';
  request: Request;
  responseBody: string;

  constructor(private http:Http) {  }

  sendRequest() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let helper:any = {
      method: RequestMethod.Get,
      headers: headers,
      url: this.url
    }

    let options = new RequestOptions(helper);

    this.http.request(new Request(options)).subscribe(
      (data: Response) => {
        console.log(data.json());
        this.responseBody = data.json();
      },
      (err) => {
        console.error(err)
      }
    );

  }


}
