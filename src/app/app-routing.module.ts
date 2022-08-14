import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewAttemptComponent} from "./new-attempt/new-attempt.component";
import {RightAnswerComponent} from "./right-answer/right-answer.component";
import {SeeAnswerComponent} from "./see-answer/see-answer.component";
import {InputErrorComponent} from "./input-error/input-error.component";
import {WrongAnswerComponent} from "./wrong-answer/wrong-answer.component";

const routes: Routes = [
  {path: 'new-attempt', component: NewAttemptComponent},
  {path: 'right-answer', component: RightAnswerComponent},
  {path: 'wrong-answer', component: WrongAnswerComponent},
  {path: 'see-answer', component: SeeAnswerComponent},
  {path: 'input-error', component: InputErrorComponent},
  // {path: 'try-again', component: TryAgainComponent},
  {path: '', redirectTo: 'new-attempt', pathMatch: 'full'},
  {path: '**', redirectTo: 'new-attempt'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
