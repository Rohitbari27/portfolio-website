import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  skills = [
    // Array of skill objects
    { name: 'HTML', level: 'Expert', rating: 90 },
    { name: 'CSS', level: 'Advanced', rating: 80 },
    { name: 'Bootstrap', level: 'Intermediate', rating: 75 },
    { name: 'MonogoDB', level: 'Beginner', rating: 45},
    { name: 'JavaScript', level: 'Intermediate', rating: 70 },
    { name: 'Angular', level: 'Intermediate', rating: 65 },
    { name: 'MySQL', level: 'Beginner', rating: 50 },
    { name: 'PHP', level: 'Intermediate', rating: 70 },
    { name: 'React', level: 'Beginner', rating: 50 },
    { name: 'ASP.Net', level: 'Beginner', rating: 40 },
    { name: 'Node.js', level: 'Beginner', rating: 55 },
    { name: 'Android', level: 'Intermediate', rating: 60 }
  ];

  skillsColumn1: any[] = [];
  skillsColumn2: any[] = [];

  ngOnInit() {
    const half = Math.ceil(this.skills.length / 2);
    this.skillsColumn1 = this.skills.slice(0, half);
    this.skillsColumn2 = this.skills.slice(half);
  }
}
