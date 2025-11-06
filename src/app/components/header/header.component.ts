import { Component, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkMode = signal(false);
  isMobileMenuOpen = signal(false);
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    // Initialize dark mode from localStorage or system preference
    if (this.isBrowser) {
      const stored = localStorage.getItem('darkMode');
      if (stored !== null) {
        this.isDarkMode.set(stored === 'true');
      } else {
        this.isDarkMode.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }

      // Apply initial theme
      this.applyTheme();
    }

    // Effect to update theme when isDarkMode changes
    effect(() => {
      this.applyTheme();
    });
  }

  toggleDarkMode() {
    this.isDarkMode.update(value => !value);
    if (this.isBrowser) {
      localStorage.setItem('darkMode', this.isDarkMode().toString());
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  private applyTheme() {
    if (this.isBrowser) {
      if (this.isDarkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
