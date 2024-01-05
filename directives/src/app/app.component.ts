import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Himalayas',
      url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGltYWxheWFzfGVufDB8fDB8fHww',
    },
    {
      title: 'Africa',
      url: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'antarctica',
      url: 'https://images.unsplash.com/photo-1567323998917-ecfddb912147?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFudGFydGljYXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Himalayas',
      url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGltYWxheWFzfGVufDB8fDB8fHww',
    },
    {
      title: 'Africa',
      url: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'antarctica',
      url: 'https://images.unsplash.com/photo-1567323998917-ecfddb912147?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFudGFydGljYXxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  checkListIndex(index: number) {
    return Math.abs(this.currentPage - index) < 4;
  }
}
