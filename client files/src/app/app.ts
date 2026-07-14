import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddStd } from './components/addstd/addstd';
import { GetStd } from './components/getstd/getstd';
import { SubStd } from './components/substd/substd';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GetStd, AddStd, SubStd],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone:true
})
export class App {
  protected readonly title = signal('student');
}
