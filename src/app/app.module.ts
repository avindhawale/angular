import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CourseCardComponent } from "./components/course-card/course-card.component";
import { DeferComponent } from "./components/defer/defer.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CourseCardComponent,
    DeferComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
