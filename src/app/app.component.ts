import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  socials = [
    {
      title: 'Twitch.tv',
      icon: '',
      url: 'https://twitch.tv/marxy_tv'
    },
    {
      title: 'Twitter',
      icon: '',
      url: 'https://twitter.com/WherePantGo'
    },
    {
      title: 'Youtube',
      icon: '',
      url: 'https://youtube.com/channel/UCKp9j5Vz3SBgGhZJLC5cpOg"'
    }
  ]
}
