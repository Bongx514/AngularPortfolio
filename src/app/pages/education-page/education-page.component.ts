import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-education-page',
  imports: [NgFor],
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.less'
})
export class EducationPageComponent {
  pageTitle = 'Education';

  messages = [
    'Welcome to the education page of my Angular application!',
    'Explore my academic background and certifications.',
    'Learning never stops — see what I’ve been up to!'
  ];

  educationItems = [
    { title: 'National Diploma: Software Development', institution: 'Tshwane University of Technology', year: 2023 },
    { title: 'Matriculant', institution: 'Elizabeth Matsemela Sec School', year: 2015 },
    { title: 'Certified Kanban Systems Design', institution: 'Kanban Universty', year: 2022 },
  ];

  ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
      const direction = ['x', 'y'][Math.floor(Math.random() * 2)];
      const fromValue = (Math.random() > 0.5 ? 100 : -100) * (Math.random() + 0.5);

      gsap.from(card, {
        [direction]: fromValue,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 150%',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.1
      });
    });

    // Floating decor movement on scroll
    const floatingItems = document.querySelectorAll('.floating-decor');
    floatingItems.forEach((item) => {
      const xMove = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 100);
      const yMove = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 100);

      gsap.to(item, {
        x: xMove,
        y: yMove,
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          scrub: true,
        },
        duration: 2,
        ease: 'sine.inOut'
      });
    });

    // Start typewriter loop
    this.startTypewriterLoop('page-description', 50, 2000);
  }

  startTypewriterLoop(elementId: string, speed: number, pause: number): void {
    const element = document.getElementById(elementId);
    if (!element) return;

    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeLoop = () => {
      const currentMessage = this.messages[msgIndex];
      const displayedText = isDeleting
        ? currentMessage.substring(0, charIndex--)
        : currentMessage.substring(0, charIndex++);

      element.innerHTML = displayedText;

      let delay = speed;

      if (!isDeleting && charIndex === currentMessage.length + 1) {
        delay = pause;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        msgIndex = (msgIndex + 1) % this.messages.length;
        delay = speed;
      }

      setTimeout(typeLoop, delay);
    };

    typeLoop();
  }
}

