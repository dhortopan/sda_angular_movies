import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'sda_angular_movies';
    viewType: string = 'login';
  //  viewType:string = 'movie';

  onViewType(): void {
    if (this.viewType == 'login') {
      this.viewType = 'register';
    } else {
      this.viewType = 'login';
    }
  }

  redirectToMovie(): void {
    this.viewType='movie';

  }
}
