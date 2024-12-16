import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./components/course-card/course-card.component";
import { Course } from "./model/course";
import { CourseService } from "./services/course.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit, OnInit {
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

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getData();
  }
}
