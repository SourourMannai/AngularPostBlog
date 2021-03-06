import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
  
})
export class PostComponent implements OnInit {

  @Input() title: string  ;
  @Input() content: string ;
  @Input() loveIts: number = 0;
   created_at = new Date();


  constructor() { }

  ngOnInit() {
  }

  onLikeIt(){ 
    this.loveIts++ ;
    
  }

  onDontLikeIt(){
    this.loveIts-- ;
    
  }

}
