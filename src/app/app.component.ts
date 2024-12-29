import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tests';

  constructor(private router: Router) {}

  public readonly interviewQuestions: TechnicalQuestion[] = [
    { title: 'Question 1', link: 'question1' },
    { title: 'Question 2', link: 'question2' },
  ];

  handleTechnicalQuestionClick(clickEvent: TechnicalQuestion) {
    this.router.navigate([clickEvent.link]);
  }
}

export interface TechnicalQuestion {
  title: string;
  link: string;
}
