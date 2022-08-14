import {Router} from '@angular/router';
import {Result} from './result';

export function navigate(res: Result, router: Router) {
  switch (res) {
    case Result.RightAnswer: {
      router.navigate(['/', 'right-answer']);
      break;
    }
    case Result.WrongAnswer: {
      router.navigate(['/', 'wrong-answer']);
      break;
    }
    case Result.InputError: {
      router.navigate(['/', 'input-error']);
      break;
    }
  }
}
