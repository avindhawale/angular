import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
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
