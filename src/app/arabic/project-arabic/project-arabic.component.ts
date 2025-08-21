import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ArabicCounterComponent } from '../arabic-counter/arabic-counter.component';

@Component({
  selector: 'app-project-arabic',
  imports: [NgFor,NgIf,ArabicCounterComponent],
  templateUrl: './project-arabic.component.html',
  styleUrl: './project-arabic.component.css'
})

export class ProjectArabicComponent {
  
  isArabicHome = false;
  isArabic = false;
   constructor(private router: Router) {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects.toLowerCase();

      // Check if it's an Arabic page (anywhere in URL)
      this.isArabic = url.includes('arabic');

      // Check if it's exactly the Arabic home page
      this.isArabicHome = url === '/arabic';
    });
}

ProjectList = [
    {
      title: 'مصرف الراجحي',
      image: 'assets/p1.png',
      description: 'جميع أعمال الألمنيوم للواجهات الخارجية والداخلية والأبواب'
    },
    {
      title: 'بنك الجزيرة',
      image: 'assets/p2.png',
      description: 'جميع أعمال الألمنيوم للواجهات والأبواب والنوافذ'
    },
    {
      title: 'بنك الإنماء',
      image: 'assets/p3.png',
      description: 'جميع الأعمال الخارجية والأبواب والنوافذ، أعمال الألمنيوم والزجاج في مختلف أنحاء المبنى'
    },
    {
      title: 'البنك السعودي الفرنسي',
      image: 'assets/p4.png',
      description: 'جميع أعمال الواجهات الخارجية، أعمال الألمنيوم والزجاج للأبواب والنوافذ والفواصل'
    },
    {
      title: 'وزارة الحرس الوطني',
      image: 'assets/p5.png',
      description: 'جميع أعمال الواجهات الخارجية للمباني، وأعمال الكلادينج'
    },
    {
      title: 'وزارة التعليم',
      image: 'assets/p6.png',
      description: `جميع أعمال الأبواب والنوافذ والسلالم،
الواجهات الخارجية،
أعمال الزجاج`
    },
    {
      title: 'أسكوت',
      image: 'assets/p7.png',
      description: 'أعمال الألمنيوم للواجهات والأبواب والنوافذ'
    },
    {
      title: 'البرحة',
      image: 'assets/s8.png',
      description: `تستخدم في الأعمال الداخلية والخارجية للأبواب والنوافذ لأغراض الأمان والخصوصية`
    },
    {
      title: 'بنك الإنماء (فرع آخر)',
      image: 'assets/p12.png',
      description: 'نوفر أنظمة كلادينج ألمنيوم متقدمة للتشطيبات الخارجية'
    }
  ];
}

