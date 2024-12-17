import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Course } from "src/app/model/course";
import { COURSES } from "src/db-data";
import { CourseCardComponent } from "../course-card/course-card.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "life-cycle",
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: "./life-cycle.component.html",
  styleUrl: "./life-cycle.component.css",
})
export class LifeCycleComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  course: Course;

  constructor() {
    console.log("constructor");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges : ", changes);
  }

  onSelectedCourse(course: Course): void {
    console.log(course);
  }
}
