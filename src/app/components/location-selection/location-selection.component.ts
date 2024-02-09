import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-location-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-selection.component.html',
  styleUrl: './location-selection.component.scss'
})
export class LocationSelectionComponent {
  locations = [
    'Main Street 123, Inited States',
    'Business Center, New York, United States',
    'Park Road 789, United Kingdom',
    'Central Avenue 456, Canada',
  ];
  selectedLocation : string = 'Select Location';
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  selectLocation(location: string) {
    this.selectedLocation = location;
    this.isMenuOpen = false;
  }

}
