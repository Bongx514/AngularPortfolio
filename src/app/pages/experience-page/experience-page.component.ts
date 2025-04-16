import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-experience-page',
  imports: [NgFor],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.less'
})

export class ExperiencePageComponent implements AfterViewInit {

  @ViewChild('scrambleText') scrambleText!: ElementRef;

  pageTitle = 'Experience';
  buttonCaption = 'Learn More...';
  buttonLink = '/projects';

  phrases = [
    'Welcome to my experience in software development.',
    'Creating beautiful user interfaces working for various companies.',
    'Delivering smooth web application for your needs.'
  ];

  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';

  cards = [
    { title: 'Frontend Developer', description: 'Developing ecommerce web application using magento 2 (adobe ecommerce) for various clients' },
    { title: 'IT Intern', description: 'Developing and implementing a user-friendly and responsive Admin portal for Zarfinco Insurance using HTML5, CSS3, and JavaScript.' },
    { title: 'Sales Rep', description: 'Greeting and welcoming customers as they enter the store.' }
  ];

  ngAfterViewInit(): void {
    this.startScrambleLoop();
  }

  startScrambleLoop() {
    let index = 0;

    const scramble = (text: string, duration = 1500) => {
      const el = this.scrambleText.nativeElement;
      const revealDelay = duration / text.length;
      let progress = 0;

      const scrambleInterval = setInterval(() => {
        let displayText = '';
        for (let i = 0; i < text.length; i++) {
          if (i < progress) {
            displayText += text[i];
          } else {
            displayText += this.characters[Math.floor(Math.random() * this.characters.length)];
          }
        }

        el.textContent = displayText;

        progress++;

        if (progress > text.length) {
          clearInterval(scrambleInterval);
          setTimeout(() => {
            index = (index + 1) % this.phrases.length;
            scramble(this.phrases[index]);
          }, 1500);
        }
      }, revealDelay);
    };

    scramble(this.phrases[index]);
  }

  onHover(event: MouseEvent, card: HTMLElement) {
    const { offsetX, offsetY } = event;
    const { offsetWidth, offsetHeight } = card;
    const x = (offsetX / offsetWidth - 0.5) * 20;
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
