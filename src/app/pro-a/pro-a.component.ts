import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pro-a',
  imports: [NgFor],
  templateUrl: './pro-a.component.html',
  styleUrl: './pro-a.component.css'
})
export class ProAComponent {
Project = [
  {
    title: 'بنك الراجحي',
    image: 'assets/p1.png',
    description: 'جميع أعمال الألمنيوم للواجهات الخارجية والداخلية والأبواب'
  },
  {
    title: 'بنك الجزيرة',
    image: 'assets/p2.png',
    description: 'جميع أعمال الألمنيوم للواجهات، الأبواب والنوافذ'
  },
  {
    title: 'بنك الإنماء',
    image: 'assets/p3.png',
    description: 'جميع الأعمال الخارجية، الأبواب والنوافذ. أعمال الألمنيوم والزجاج في مختلف مناطق المبنى'
  },
  {
    title: 'البنك السعودي الفرنسي',
    image: 'assets/p4.png',
    description: 'جميع أعمال الواجهات الخارجية. أعمال الألمنيوم والزجاج للأبواب والنوافذ والفواصل'
  },
  {
    title: 'وزارة الحرس الوطني',
    image: 'assets/p5.png',
    description: 'جميع أعمال الواجهات الخارجية للمباني. جميع أعمال التكسية'
  },
  {
    title: 'وزارة التعليم',
    image: 'assets/p6.png',
    description: `جميع أعمال الأبواب، النوافذ والسلالم
الواجهات الخارجية
أعمال الزجاج`
  },
  {
    title: 'أسكوت',
    image: 'assets/p7.png',
    description: 'أعمال الألمنيوم للواجهات، الأبواب والنوافذ'
  },
  {
    title: 'البرحاء',
    image: 'assets/s8.png',
    description: 'تُستخدم في الأعمال الداخلية والخارجية للأبواب والنوافذ، وتُستخدم للسلامة والخصوصية'
  },
  {
    title: 'بنك الإيماء',
    image: 'assets/p12.png',
    description: 'نوفر أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
];

}
