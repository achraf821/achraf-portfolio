import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, About, Contact, Experience, Hero, Projects, Skills,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('achraf-portfolio');
}
