import { Component } from '@angular/core';
import { SkillComponent } from "../skill/skill.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
