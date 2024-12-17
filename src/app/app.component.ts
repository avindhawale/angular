import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./components/course-card/course-card.component";
import { Course } from "./model/course";
import { CourseService } from "./services/course.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit, OnInit {
  courses = COURSES;
  lifeCycleCourse: Course = COURSES[0];

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

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getData();
  }

  destroyLifeCycleComponent(): void {
    this.lifeCycleCourse = null;
  }
  changeDataLifeCycleComponent(): void {
    let newObj = {
      ...this.lifeCycleCourse,
      description: "description is changed",
    };
    this.lifeCycleCourse = newObj;
  }
}
