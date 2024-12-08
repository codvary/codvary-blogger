import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { BloggerComponent } from "./component/blogger/blogger.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BloggerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogger home';
}
