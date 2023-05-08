import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  isVisible!:boolean;
  timer!: any

  showIcon() {
    this.isVisible = true

    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.isVisible = false
    }, 3000)
  }
}
