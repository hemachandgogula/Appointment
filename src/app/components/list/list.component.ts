import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();
  handleDelete(theApt: object) {
    this.deleteEvt.emit(theApt);
  }
  constructor() { }

  ngOnInit() {
  }

}
