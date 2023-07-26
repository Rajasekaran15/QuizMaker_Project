import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './shared/reusableComponents/drop-down/drop-down.component';
import { QuizMakerComponent } from './feature/quiz-maker/quiz-maker.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuizResultComponent } from './feature/quiz-result/quiz-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    QuizMakerComponent, QuizResultComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,MatButtonModule,MatSelectModule,FormsModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
