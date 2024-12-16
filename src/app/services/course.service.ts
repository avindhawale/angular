import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

let counter = 0;

@Injectable()
export class CourseService {
  id: number;
  constructor(private http: HttpClient) {
    counter++;
    this.id = counter;
  }

  getData() {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe((data) => {
        console.log(data);
      });
  }
}
