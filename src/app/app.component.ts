import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  isVisible!:boolean;
  timer!: any

  constructor(private cdRef: ChangeDetectorRef) {
  }

  showIcon() {
    this.isVisible = true

    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.isVisible = false
      this.cdRef.detectChanges()
    }, 3000)
  }
}
