import { Component, OnInit, Input } from '@angular/core';
import {PostsService} from '../../services/posts.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() post: any;
  public activeClass;
  public news;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getNews().subscribe(res =>{
      this.news = res.body;
      console.log(res);
    });
  }

  
  focusFunction() {
    this.activeClass = 'focus';
  }
  focusOutFunction() {
    this.activeClass = '';
  }

}
