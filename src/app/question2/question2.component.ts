import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './question2.component.html',
  styleUrl: './question2.component.scss',
})
export class Question2Component {
  private readonly _fizzDivisor: BehaviorSubject<number> = new BehaviorSubject(
    1
  );
  public readonly fizzDivisor: Observable<number> =
    this._fizzDivisor.asObservable();
  private readonly _buzzDivisor: BehaviorSubject<number> = new BehaviorSubject(
    1
  );
  public readonly buzzDivisor: Observable<number> =
    this._buzzDivisor.asObservable();
  public readonly fizzBuzzResult: Observable<string>;

  public readonly inputNumber: FormControl<number> = new FormControl<number>(
    10,
    {
      nonNullable: true,
    }
  );

  constructor() {
    interval(2800).subscribe(() => {
      this._fizzDivisor.next(this.generateRandomNumber(2, 10));
    });

    interval(5100).subscribe(() => {
      this._buzzDivisor.next(this.generateRandomNumber(2, 10));
    });

    // TODO: Redifine this.fizzBuzzResult
    this.fizzBuzzResult = new BehaviorSubject(
      'Update the "fizzBuzzResult" observable to react to changes in the above values'
    );
  }

  generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
