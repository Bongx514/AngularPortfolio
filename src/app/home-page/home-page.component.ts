import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.less'
})
export class HomePageComponent {
   pageTitle = 'Home Page';
   pageDescription = 'Welcome to the home page of our Angular application!'+
   'Here you can find various features and information about our app.';

   btnCaption = "Get Started";
   btnLink = "/experience";

   constructor(private router: Router) {}

   onGetStartedClick(): void {
      this.router.navigate([this.btnLink]);
   }
}
