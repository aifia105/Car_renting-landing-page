import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hours-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hours-selection.component.html',
  styleUrl: './hours-selection.component.scss'
})
export class HoursSelectionComponent {
  isMenuOpen: boolean = false;
  selectedType : string = 'Select Type';
  types: string[] = ['Commercial car', 'Personal transportation'];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectLocation(location: string) {
    this.selectedType = location;
    this.isMenuOpen = false;
  }
}
