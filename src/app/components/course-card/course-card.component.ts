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
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [HighlighterDirective, BeautifierDirective],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
  providers: [
    //CourseService
    /**
     * what would happen if a given component would try to find a provider for a dependency and it would not find a provider in its own private list of providers?
      So if we reload the application, we are going to see that indeed this application is still working
      as before.
      But now if we open here the console, we are going to see that there is only one instance at the level
      of the application of courses service.

      It's the one created here in root component number one, this same instance with ID number one.
      It's also being used in all the course card components we have here, ten occurrences of the logging
      of the courses service with ID number one.
      
      So what exactly happened here and how does this work?
      Well, what happened is that this component here tried to find a provider for the courses service dependency
      in its own list of providers.
      It did not find a provider that would satisfy that dependency, so it moved on to its parent component,
      in this case, the application component, to see if there would be a provider that would satisfy the
      dependency.

      If that would be the case, then the course card component here, which is a child component of the
      application component, would then take its dependency from the parent component.
      So that is why this is called a hierarchical dependency injection system.
      It's because there is a hierarchy of injectors that follows the hierarchy of the components themselves.
      So child components like the course card component will ask the parent components for their dependencies
      in case the component cannot create the dependency themselves.
      That will go all the way down until the root of the application.
      So if there are multiple levels of components and the dependency is needed in a deeply nested component,
      then that component is going to ask its multiple parent components for the dependency.
      And this will go on until the root component of the application and even further down the injection
      tree until the very root of the application.
      This means that the hierarchical dependency injection system allows each component to create its own
      dependencies if necessary.

      Now, when is this functionality useful?
      In the case of the courses service this service other than the ID that we have created here just for
      troubleshooting purposes, does not really have any state.
      These are stateless functions that call the back end and return the result directly.
      There is no data stored here at the level of the courses service.
      In those cases, these multiple instances of courses, service are interchangeable.
      There is no need to create multiple copies of this particular service.
      We can all share the same courses, service that we can make a global application.

      Singleton But if on the other hand, the service that we are injecting here does have some state that
      is private to a given part of the application, then in that case we might want to define here a provider
      at the level of a component and have that dependency injected and make sure that that dependency is
      not visible anywhere else on the application.

      Notice also that if we use a local provider at the level of a component, then the services created
      by those providers are linked to the life cycle of the component.
      So when the component gets destroyed, those service instances are also removed from memory.
  */
  ],
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Input({ required: true })
  index: number;

  @Output()
  selectedCourse = new EventEmitter<Course>();

  constructor(private courseService: CourseService) {
    console.log("Course card : ", this.courseService.id);
  }

  courseClicked(): void {
    this.selectedCourse.emit(this.course);
  }
}
