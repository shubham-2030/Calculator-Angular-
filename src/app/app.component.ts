import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  
  screen: any = '';

  inputButton(input: number | string) {
    this.screen += input;
    
  }

  clearScreen() {
    this.screen = '';
  }

  delChar() {
    this.screen = this.screen.slice(0, -1);
  }

  result() {
    this.screen = eval(this.screen);
  }
}
