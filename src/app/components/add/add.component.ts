import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  showForm: boolean;
  @Output() addEvt = new EventEmitter();
  toggleAptDisplay() {
    this.showForm = !this.showForm;

  }
  handledAdd(formInfo: any) {
    const tempItem: object = {
      patientName: formInfo.patientName,
      aptDate: formInfo.aptDate + ' ' + formInfo.aptTime,
      cost: formInfo.cost,
      doctorName: formInfo.doctorName
    };
    this.addEvt.emit(tempItem);
    this.showForm = !this.showForm;
  }
  constructor() {
    this.showForm = true;
  }

  ngOnInit() {
  }

}
