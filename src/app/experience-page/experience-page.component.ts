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
  buttonCaption = 'See More';
  buttonLink = '/projects';

  phrases = [
    'Welcome to my experience in software development.',
    'Creating beautiful user interfaces working for various companies.',
    'Delivering smooth web apps.'
  ];

  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';

  cards = [
    { title: 'Software 1', description: 'Developing web applications using Angular and Node.js.' },
    { title: 'Software 2', description: 'Developing web applications using Angular and Node.js.' },
    { title: 'Software 3', description: 'Developing web applications using Angular and Node.js.' }
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
