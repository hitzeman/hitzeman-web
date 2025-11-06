import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  color: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'blue'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      technologies: ['Angular', 'Firebase', 'RxJS', 'Material UI'],
      color: 'green'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with scheduling features.',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'Tailwind'],
      color: 'purple'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with forecasts, maps, and location-based alerts.',
      technologies: ['Angular', 'OpenWeather API', 'Leaflet', 'PWA'],
      color: 'orange'
    }
  ];

  getColorClasses(color: string): string {
    const colorMap: { [key: string]: string } = {
      blue: 'from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800',
      green: 'from-green-50 to-green-100 dark:from-green-900 dark:to-green-800',
      purple: 'from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800',
      orange: 'from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800'
    };
    return colorMap[color] || colorMap['blue'];
  }
}
