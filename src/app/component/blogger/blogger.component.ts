import { Component } from '@angular/core';
import { DUMMY_BLOGGER } from '../../dummy-blogger';

const randomIndex = Math.floor(Math.random() * DUMMY_BLOGGER.length);

@Component({
  selector: 'app-blogger',
  standalone: true,
  imports: [],
  templateUrl: './blogger.component.html',
  styleUrl: './blogger.component.css'
})
export class BloggerComponent {

    selectedBlogger =  DUMMY_BLOGGER[randomIndex];

    get imagePath(){
      return 'assets/users/'+this.selectedBlogger.avatar;
    }

    onSelectBlogger(){
      console.log("Clicked!")
    }
}
