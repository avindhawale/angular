import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

let counter = 0;

@Injectable({
  providedIn: "root", // Tree-Shakeable Provider
  /**
   * The angular dependency injection system works in a lazy way and if a service is not requested by any
      dependency, the provider will never get called and the service will never get created.
   */
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getData() {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe((data) => {
        console.log(data);
      });
  }
}
