import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements OnInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      this.cards.forEach(card => {
        observer.observe(card.nativeElement);
      });
    }, 100);
  }
}