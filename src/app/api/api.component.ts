import { Component, OnInit, Input} from '@angular/core';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import { RequestModel } from './request.model';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  response: string;
  request = new RequestModel();


  constructor(private http: Http) { }

    ngOnInit() {
      this.request.url = 'http://httpbin.org';
      this.request.body = '{ param1: data1, param2: data2 }';
    }

    onGet() {
      this.response = '';
      let url: string = this.request.url + '/get';
     // let search = new URLSearchParams();
     // search.set(this.request.body);
      this.http.get(url).subscribe(
        res => this.response = res.text(),
        msg => this.response = msg.status + ': ' + msg.statusText
      );
    }

    onPost() {
      console.log('POST');
      this.response = '';
      let url: string = this.request.url + '/get';
      let search = new URLSearchParams();
      search.set('foo', 'moo');
     // search.set('limit', 25);
      this.http.post(url, 'foo', 'moo').subscribe(
        res => this.response = res.text(),
        msg => this.response = msg.status + ': ' + msg.statusText
      );
    }

    onPut() {
      console.log('POST');
      console.log(this.request);
    }

    onDelete() {
      console.log('POST');
      console.log(this.request);
    }
}
