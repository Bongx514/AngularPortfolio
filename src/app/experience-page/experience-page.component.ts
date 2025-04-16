import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-experience-page',
  imports: [NgFor],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.less'
})
export class ExperiencePageComponent {
  
  pageTitle = 'Experience';
  pageDescription = 'My experience in software development.';
  buttonCaption = 'See More';
  buttonLink = '/projects';

  cards = [
      { title: 'Software 1', 
        description: 'Developing web applications using Angular and Node.js.' 
      },

      { title: 'Software 2', 
        description: 'Developing web applications using Angular and Node.js.'  
      },
      
      { title: 'Software 3', 
        description: 'Developing web applications using Angular and Node.js.'
      },
    ]

    onHover(event: MouseEvent, card: HTMLElement) {
      const { offsetX, offsetY, target } = event;
      const { offsetWidth, offsetHeight } = card;
      const x = (offsetX / offsetWidth - 0.5) * 20; // adjust the *20 for tilt strength
      const y = (offsetY / offsetHeight - 0.5) * -20;
  
      gsap.to(card, {
        rotateY: x,
        rotateX: y,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  
    onLeave(card: HTMLElement) {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
}
