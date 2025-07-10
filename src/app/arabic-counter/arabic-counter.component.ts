import { NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FooAComponent } from '../foo-a/foo-a.component';

@Component({
  selector: 'app-arabic-counter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './arabic-counter.component.html',
  styleUrl: './arabic-counter.component.css'
})
export class ArabicCounterComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  @ViewChild('counterSection', { static: true }) counterSection!: ElementRef;

  counters = [
    { target: 100,  current: 0, label: 'النجاح في الحصول على عملاء سعداء' },
    { target: 80,  current: 0, label:  'آلاف من المشاريع الناجحة' },
    { target: 60,  current: 0, label:  'إجمالي العملاء الذين يحبون هاي تك' },
    { target: 5,  current: 0, label:   'تقييمات 5 نجوم من العملاء الراضين' }
  ];

  hasAnimated = false;

  ngOnInit() {
    this.checkScroll(); // Initial check
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
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
          this.cdr.detectChanges();
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
  }

  convertToArabicNumerals(num: number): string {
    const arabicNumbers = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return num.toString().split('').map(digit => arabicNumbers[+digit]).join('');
  }
}
