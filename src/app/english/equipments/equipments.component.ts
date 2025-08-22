import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-equipments',
  standalone: true,
  imports: [NgFor],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css'
})
export class EquipmentsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('viewport', { static: true }) viewport!: ElementRef<HTMLDivElement>;

  Equipments = [
    { title: 'Saw cuttings',                  image: 'assets/equipments/equipment1.png' },
    { title: 'End Milling and copy Routings', image: 'assets/equipments/equipment2.png' },
    { title: 'Corner crimpings',              image: 'assets/equipments/equipment3.png' },
    { title: 'Welding machines co2 350A',     image: 'assets/equipments/equipment4.png' },
    { title: 'Drill machines APT 25',         image: 'assets/equipments/equipment5.png' },
  ];

  // Duplicate once → [A][A]. We’ll loop over the first half’s width.
  loop = [...this.Equipments, ...this.Equipments];

  private rafId: number | null = null;
  private speed = 2;     // px per frame (subtle “light” motion)
  private segment = 0;      // width of the first A segment

  ngAfterViewInit(): void {
    // Wait one frame so widths are computed, then start at 0 (no cut)
    requestAnimationFrame(() => {
      this.computeSegment();
      this.viewport.nativeElement.scrollLeft = 0; // ensure aligned start
      this.start();
      const el = this.viewport.nativeElement;
      el.addEventListener('mouseenter', this.pause);
      el.addEventListener('mouseleave', this.start);
      window.addEventListener('resize', this.onResize);
    });
  }

  ngOnDestroy(): void {
    this.pause();
    const el = this.viewport?.nativeElement;
    if (el) {
      el.removeEventListener('mouseenter', this.pause);
      el.removeEventListener('mouseleave', this.start);
    }
    window.removeEventListener('resize', this.onResize);
  }

  private onResize = () => {
    this.pause();
    this.computeSegment();
    this.start();
  };

  private computeSegment() {
    const el = this.viewport.nativeElement;
    // We rendered 2 identical segments; one segment = total / 2
    this.segment = el.scrollWidth / 2;
  }

  private step = () => {
    const el = this.viewport.nativeElement;
    el.scrollLeft += this.speed;

    // When we scrolled past the first segment, jump back by exactly 1 segment.
    // Because [A][A] are identical, this jump is visually seamless.
    if (el.scrollLeft >= this.segment) {
      el.scrollLeft -= this.segment;
    }
    this.rafId = requestAnimationFrame(this.step);
  };

  private start = () => {
    if (this.rafId == null) this.rafId = requestAnimationFrame(this.step);
  };

  private pause = () => {
    if (this.rafId != null) cancelAnimationFrame(this.rafId);
    this.rafId = null;
  };
}
