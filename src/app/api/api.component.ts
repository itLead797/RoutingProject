import { Component, OnInit, Input} from '@angular/core';
import { Http, HttpModule } from '@angular/http';
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
    }

    onGet() {
      this.response = '';
      let url: string = this.request.url + '/get';
      this.http.get(url).subscribe(
        res => this.response = res.text(),
        msg => this.response = msg.status + ': ' + msg.statusText
      );
    }

    onPost() {
      console.log('POST');
      console.log(this.request);
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
