import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./components/course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChild("topMenu", { read: ElementRef })
  topMenu: ElementRef;

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  @ViewChildren(CourseCardComponent)
  cards: CourseCardComponent;

  ngAfterViewInit(): void {
    console.log(this.topMenu);
    console.log(this.card);
    console.log(this.cards);
  }

  onSelectedCourse(course: Course): void {
    console.log(course);
  }
}
