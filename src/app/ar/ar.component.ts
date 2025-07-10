import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ArabicnarComponent } from '../arabicnar/arabicnar.component';
import { ArabicCounterComponent } from '../arabic-counter/arabic-counter.component';
import { FooAComponent } from '../foo-a/foo-a.component';

@Component({
  selector: 'app-ar',
  imports: [NgFor,ArabicnarComponent,ArabicCounterComponent,FooAComponent],
  templateUrl: './ar.component.html',
  styleUrl: './ar.component.css'
})
export class ArComponent {
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
