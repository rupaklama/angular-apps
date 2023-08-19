import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card', // host element
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  // defining input props that will be receiving by this component with Input Decorator
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';
}
