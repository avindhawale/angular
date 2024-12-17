import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CourseCardComponent } from "./components/course-card/course-card.component";
import { DeferComponent } from "./components/defer/defer.component";
import { HttpClientModule } from "@angular/common/http";
import { LifeCycleComponent } from "./components/life-cycle/life-cycle.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CourseCardComponent,
    DeferComponent,
    HttpClientModule,
    LifeCycleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
