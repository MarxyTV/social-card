import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'Marxy';
  socials = [
    {
      title: 'Twitch.tv',
      url: 'https://twitch.tv/marxy_tv'
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/WherePantGo'
    },
    {
      title: 'Youtube',
      url: 'https://youtube.com/channel/UCKp9j5Vz3SBgGhZJLC5cpOg'
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/NztSVR8TmT'
    }
  ];
}
