import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { BeautifierDirective } from "src/app/directives/beautifier.directive";
import { HighlighterDirective } from "src/app/directives/highlighter.directive";
import { Course } from "src/app/model/course";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [HighlighterDirective, BeautifierDirective],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Input({ required: true })
  index: number;

  @Output()
  selectedCourse = new EventEmitter<Course>();

  courseClicked(): void {
    this.selectedCourse.emit(this.course);
  }
}
