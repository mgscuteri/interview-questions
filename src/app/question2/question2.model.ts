import { FormControl } from '@angular/forms';

export interface Question1Form {
  inputText: FormControl<string>;
  maxNumberOfCharactersPerLine: FormControl<number>;
}
