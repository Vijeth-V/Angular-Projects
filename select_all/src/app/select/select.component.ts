import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: false,
  
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {

  @Input() itemList: string[] = [];
  @Output() selectedMoviesChange = new EventEmitter<string[]>();

  checkboxState: { [key: string]: boolean } = {};
  selectAllChecked: boolean = false;

  constructor() {}
  
  onSelectAllChange() {
    this.itemList.forEach(movie => {
      this.checkboxState[movie] = this.selectAllChecked;
    });
    this.selectedMoviesChange.emit(this.itemList.filter(movie => this.checkboxState[movie]));
  }

  onCheckChange() {
    this.selectAllChecked = this.itemList.every(movie => this.checkboxState[movie]);
    this.selectedMoviesChange.emit(this.itemList.filter(movie => this.checkboxState[movie]));
  }

  onClearAll() {
    this.selectAllChecked = false;
    this.itemList.forEach(movie => {
      this.checkboxState[movie] = false;
    });
    this.selectedMoviesChange.emit([]);
  }
  
}
