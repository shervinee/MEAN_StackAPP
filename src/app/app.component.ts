import { Component } from '@angular/core';

import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // users propoert in our app to hold our users data
  users: Array<any>;

  // creating an instance of the DataService (a dependency) within constructor
  constructor(private _dataService: DataService) {
    this._dataService.getData()
    .subscribe(res => this.users = res);
  }
  title = 'An intorudcotry MEAN App';
}
