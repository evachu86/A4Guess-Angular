import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NewAttemptComponent } from './new-attempt/new-attempt.component';
import { RightAnswerComponent } from './right-answer/right-answer.component';
import { WrongAnswerComponent } from './wrong-answer/wrong-answer.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { TryAgainComponent } from './try-again/try-again.component';
import { SeeAnswerComponent } from './see-answer/see-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewAttemptComponent,
    RightAnswerComponent,
    WrongAnswerComponent,
    InputErrorComponent,
    TryAgainComponent,
    SeeAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
