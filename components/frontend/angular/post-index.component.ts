import { Component, Input } from "@angular/core";

@Component({
  selector: 'post-index',
  template: `
    <h1>{{test}}</h1>
    <h3>{{posts.length}} says:</h3>
    <p>I, hero.name, am at your service, masterName.</p>
  `,
  standalone: true,
})
export default class PostIndex {
  @Input() posts = [];
  @Input() test = "bar";
}
