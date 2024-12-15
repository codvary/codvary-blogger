import { Component } from '@angular/core';
import { DUMMY_USER } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USER.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USER[randomIndex];
}
