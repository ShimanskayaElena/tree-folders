import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

import { ContainerComponent } from './container.component';
import { InnerComponent } from './inner.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ContainerComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InnerComponent]
})
export class AppModule { }
