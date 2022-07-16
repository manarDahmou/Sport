import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles:any;
  constructor() { }

  ngOnInit() {
    this.articles = [
      {id:1,title: "title 1", content: 'Content 1', date: "24-10-21", img:"" },
      {id:2,title: "title 2", content: 'Content 2', date: "24-10-21", img:"" },
      {id:3,title: "title 3", content: 'Content 3', date: "24-10-21", img:"" },
      {id:4,title: "title 4", content: 'Content 4', date: "24-10-21", img:"" }
    ]
  }

}
