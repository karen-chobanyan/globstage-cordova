import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-smiles',
  templateUrl: './smiles.component.html',
  styleUrls: ['./smiles.component.scss']
})
export class SmilesComponent implements OnInit, OnChanges {

  smiles = [];
  private _opened;
  @Output() smile = new EventEmitter();

  get opened(): string {
    return this._opened;
  }

  @Input()
  set opened(opened) {
    this._opened = opened;
  }

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i < 39; i = i + 1) {
      this.smiles.push(i);
    }
  }

  insetSmile(id) {
    // this._opened = false;
    this.smile.emit(id);
  }

  ngOnChanges(changes: SimpleChanges) {
    const opened: SimpleChange = changes.opened;
    console.log(changes.opened);
    this._opened = opened.currentValue;
  }

}
