import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    {
      "icon": "fas fa-tasks",
      "value": "To Do List",
      "label": "https://github.com/Rohitbari27/ToDo-List"
    },
    {
      "icon": "fas fa-sort-numeric-up",
      "value": "Counter App",
      "label": "https://github.com/Rohitbari27/pure-js-counter-app"
    },
    {
      "icon": "fas fa-th-large",
      "value": "Tic-Tac-Toe App",
      "label": "https://github.com/Rohitbari27/tic-tac-toe"
    },
    {
      "icon": "fas fa-book",
      "value": "Library Website",
      "label": "https://github.com/poojakamble01/Library-WebApp"
    },
    {
      "icon": "fas fa-database",
      "value": "Basic DB Operation in SSMS",
      "label": "https://github.com/Rohitbari27/Basic-database-operations-using-SSMS"
    },
    {
      "icon": "fas fa-store",
      "value": "Simple Marketing Website",
      "label": "https://github.com/Rohitbari27/Fyle"
    }
  ];
}
