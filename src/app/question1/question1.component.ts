import { Component, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { max } from 'rxjs';
import { Question1Form } from './question1.model';

@Component({
  selector: 'app-question1',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './question1.component.html',
  styleUrl: './question1.component.scss',
})
export class Question1Component {
  public output = 'Wordwrapped input text should be displayed here';

  private readonly maxNumberOfCharactersPerLine: FormControl<number> =
    new FormControl<number>(10, {
      nonNullable: true,
    });
  private readonly inputText: FormControl<string> = new FormControl<string>(
    'The quick brown fox jumps over the lazy dog',
    {
      nonNullable: true,
    }
  );

  public readonly formGroup: FormGroup<Question1Form> = new FormGroup({
    maxNumberOfCharactersPerLine: this.maxNumberOfCharactersPerLine,
    inputText: this.inputText,
  });

  onSubmit(form: FormGroup<Question1Form>) {
    console.log('form submitted');
    console.log(JSON.stringify(form.getRawValue(), null, 2));
    this.output = 'See onSubmit function in question1.component.ts';
  }
}
