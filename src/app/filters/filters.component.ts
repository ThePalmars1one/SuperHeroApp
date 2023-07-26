import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Input() title!: string;
  @Input() options!: any[];
  @Output() filterSelected = new EventEmitter<string>();

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectFilter(option: string) {
    this.filterSelected.emit(option);
    this.isMenuOpen = false;
  }

}
