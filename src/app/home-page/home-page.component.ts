import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.less'
})
export class HomePageComponent {
   pageTitle = 'Frontend Developer';
   pageDescription = 'Welcome to the home page of our Angular application!'+
   'Here you can find various features and information about our app.';

   btnCaption = "Get Started";
   btnLink = "/experience";

   constructor(private router: Router) {}

   onGetStartedClick(): void {
      this.router.navigate([this.btnLink]);
   }

   ngAfterViewInit(): void {
      const phrases = ['Hi, My name is Bongani Thwala.', 'Welcome to my web app.', 'Let\'s get started.'];
      const el = document.querySelector('.typewriter-text') as HTMLElement;
      let currentPhrase = 0;
  
      const typeText = (text: string, onComplete: () => void) => {
        gsap.to(el, {
          duration: 0,
          text: '',
          onComplete: () => {
            gsap.to(el, {
              duration: text.length * 0.05,
              text: text,
              ease: 'none',
              onComplete
            });
          }
        });
      };
  
      const deleteText = (onComplete: () => void) => {
        gsap.to(el, {
          duration: 1,
          text: '',
          ease: 'none',
          onComplete
        });
      };
  
      const loop = () => {
        typeText(phrases[currentPhrase], () => {
          setTimeout(() => {
            deleteText(() => {
              currentPhrase = (currentPhrase + 1) % phrases.length;
              loop();
            });
          }, 2000);
        });
      };
  
      if (el) loop();
    }
   
}
