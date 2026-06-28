import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Resume } from './components/resume/resume';
import { Footer } from './components/footer/footer';
import { Toast } from './components/toast/toast';

declare const AOS: any;


@Component({
  selector: 'app-root',
  imports: [Navbar, About, Contact, Experience, Hero, Projects, Skills, Resume, Footer, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('achraf-portfolio');

   ngOnInit() {
    setTimeout(() => {
      AOS.init({
        duration: 600,
        once: true,
        offset: 100
      });
    }, 100);
  }
}
