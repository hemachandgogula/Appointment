import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { without } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Get Cure Early';
  theList: object[];
  modifiedList: object[];
  deleteApt(theApt: object) {
    this.theList = without(this.theList, theApt);
    this.modifiedList = this.theList;
  }
  searchApt(theQuery: string) {
    this.modifiedList = this.theList.filter(eachItem => {
      return (
        eachItem['patientName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem['doctorName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem['aptNotes']
          .toLowerCase()
          .includes(theQuery.toLowerCase()));
    });
  }
  addApt(theApt: object) {
    this.theList.unshift(theApt);
    this.modifiedList = this.theList;
  }

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<object[]>('../assets/data.json').subscribe(data => {
      this.theList = data;
      this.modifiedList = data;
    });
  }

}
