import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      description: 'Full-stack developer with 10+ years of experience in web technologies.'
    },
    {
      name: 'Mike Chen',
      role: 'UX Designer',
      description: 'Creative designer focused on user-centered design and accessibility.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      description: 'Agile practitioner ensuring smooth project delivery and team coordination.'
    }
  ];
}
