import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any;
  x:string= 'Ali';
  y:number = 9;
  constructor() { }

  ngOnInit() {
    this.news=[
      {id:1, name: 'Ali', date: '24-10-21', title: 'Title 1', img1:"assets/images/person_1.jpg", img2:"assets/images/img_1.jpg"},
      {id:2, name: 'Ali', date: '24-10-21', title: 'Title 2', img1:"assets/images/person_1.jpg", img2:"assets/images/img_1.jpg"},
      {id:3, name: 'Ali', date: '24-10-21', title: 'Title 3', img1:"assets/images/person_1.jpg", img2:"assets/images/img_1.jpg"},
      {id:4, name: 'Ali', date: '24-10-21', title: 'Title 4', img1:"assets/images/person_1.jpg", img2:"assets/images/img_1.jpg"}
      ];
  }

}
