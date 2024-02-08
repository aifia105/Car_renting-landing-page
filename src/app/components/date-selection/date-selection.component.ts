import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomMaterialModule } from './custom-material.module';

@Component({
  selector: 'app-date-selection',
  standalone: true,
  imports: [CommonModule, CustomMaterialModule],
  templateUrl: './date-selection.component.html',
  styleUrl: './date-selection.component.scss'
})
export class DateSelectionComponent {
  date = [{ startDate: new Date(), endDate: null, key: 'selection' }];
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onDateRangeChange(item: any) {
    this.date = [item.selection];
  }
  addDays(date: Date, days: number): Date {
    const newDate = new Date(date.getTime());
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

}
