import { Component } from '@angular/core';
import { LocationSelectionComponent } from '../location-selection/location-selection.component';
import { DateSelectionComponent } from '../date-selection/date-selection.component';
import { HoursSelectionComponent } from '../hours-selection/hours-selection.component';

@Component({
  selector: 'app-search-mobile',
  standalone: true,
  imports: [LocationSelectionComponent, DateSelectionComponent, HoursSelectionComponent],
  templateUrl: './search-mobile.component.html',
  styleUrl: './search-mobile.component.scss'
})
export class SearchMobileComponent {

}
