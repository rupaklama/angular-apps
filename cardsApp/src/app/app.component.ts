import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // host element
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountain lover',
      content: 'Here is a picture of a snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Mountain Biking',
      username: 'biker',
      content: 'I did some biking today!',
      imageUrl: 'assets/biking.jpeg',
    },
  ];
}
