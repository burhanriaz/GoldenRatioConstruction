import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-serv-a',
  imports: [NgFor],
  templateUrl: './serv-a.component.html',
  styleUrl: './serv-a.component.css'
})
export class ServAComponent {
services = [
  {
    title: 'أنظمة الألمنيوم',
    image: 'assets/s1.png',
    description: 'نصمم ونركب أنظمة واجهات الألمنيوم المتينة والأنيقة.'
  },
  {
    title: 'الجدران الستائرية',
    image: 'assets/s2.png',
    description: 'أبواب ونوافذ زجاجية حديثة بإطارات ألمنيوم لجميع أنواع المباني.'
  },
  {
    title: 'النوافذ والأبواب',
    image: 'assets/s3.png',
    description: 'نوافذ سقفية مخصصة للعقارات التجارية والسكنية لتعظيم الإضاءة الطبيعية.'
  },
  {
    title: 'أعمال الزجاج',
    image: 'assets/s4.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'أعمال الزجاج',
    image: 'assets/s5.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'أعمال التكسية',
    image: 'assets/s6.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'الزجاج الفني',
    image: 'assets/s7.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'الملحقات',
    image: 'assets/s8.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'نوافذ السقف',
    image: 'assets/s9.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'الستائر الدوارة',
    image: 'assets/s10.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'الأبواب الدوارة',
    image: 'assets/s11.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'الأبواب المنزلقة',
    image: 'assets/s12.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'السلالم وحواجز الحماية',
    image: 'assets/s13.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'أنظمة الفواصل',
    image: 'assets/s14.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  },
  {
    title: 'مقصورات الاستحمام',
    image: 'assets/s15.png',
    description: 'نقدم أنظمة تكسية ألمنيوم متقدمة للتشطيبات الخارجية.'
  }
];

}
