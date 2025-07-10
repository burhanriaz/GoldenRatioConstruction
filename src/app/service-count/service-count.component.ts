import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, HostListener, NgModule } from '@angular/core';
import { CountComponent } from '../count/count.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-count',
  imports: [CommonModule],
  templateUrl: './service-count.component.html',
  styleUrl: './service-count.component.css'
})
export class ServiceCountComponent implements OnInit {
  @ViewChild('counterSection', { static: true }) counterSection!: ElementRef;

  counters = [
    { target: 100, current: 0, label: 'Success in getting happy customer' },
    { target: 80, current: 0, label: 'Thousands of successful business' },
    { target: 60, current: 0, label: 'Total clients who love HighTech' },
    { target: 5, current: 0, label: 'Stars reviews given by satisfied clients' }
  ];

  hasAnimated = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.checkScroll(); // Initial check in case it's already visible
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    if (!this.counterSection) return;

    const top = this.counterSection.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight && !this.hasAnimated) {
      this.animateCounters();
      this.hasAnimated = true;
    }
  }

  animateCounters() {
    this.counters.forEach((counter) => {
      const interval = setInterval(() => {
        if (counter.current < counter.target) {
          counter.current++;
          this.cdr.detectChanges(); // Refresh view
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust speed here
    });
  }

}
