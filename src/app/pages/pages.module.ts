import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { ErrorComponent } from './error/error.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
  ], 
  exports: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    ErrorComponent,
  ]
})
export class PagesModule { }
