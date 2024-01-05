import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  date = '';
  amount = 0;

  height = 0;

  car = {
    make: 'Toyota',
    model: 'Celica',
    year: 2006,
  };

  onHeightChange(e: Event) {
    const targetEl = e.target as HTMLInputElement;
    if (targetEl) {
      this.height = parseFloat(targetEl.value);
    }
  }

  onNameChange(e: Event) {
    const targetEl = e.target as HTMLInputElement;
    if (targetEl) {
      this.name = targetEl.value;
    }
  }

  onDateChange(e: Event) {
    const targetEl = e.target as HTMLInputElement;
    if (targetEl) {
      this.date = targetEl.value;
    }
  }

  onAmountChange(e: Event) {
    const targetEl = e.target as HTMLInputElement;
    if (targetEl) {
      this.amount = parseFloat(targetEl.value);
    }
  }
}
