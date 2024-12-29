import { Component, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BehaviorSubject, delay, interval, map, max, Observable } from 'rxjs';
import { Question1Form } from './question2.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './question2.component.html',
  styleUrl: './question2.component.scss',
})
export class Question2Component {
  public readonly fizzDivisor: Observable<number>;
  public readonly buzzDivisor: Observable<number>;
  public readonly fizzBuzzResult: Observable<string>;

  public readonly inputNumber: FormControl<number> = new FormControl<number>(
    10,
    {
      nonNullable: true,
    }
  );

  constructor() {
    this.fizzDivisor = interval(2000).pipe(
      map(() => {
        return Math.floor(this.generateRandomNumber(2, 10));
      })
    );

    this.buzzDivisor = interval(2000).pipe(
      delay(1000),
      map(() => {
        return Math.floor(this.generateRandomNumber(2, 10));
      })
    );

    // TODO: Redifine this.fizzBuzzResult
    this.fizzBuzzResult = new BehaviorSubject(
      'Update the "fizzBuzzResult" observable to react to changes in the above values'
    );
  }

  generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  start() {
    console.log('form submitted');
  }
}
