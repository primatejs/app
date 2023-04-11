import {html, view} from "primate";

export default {
  get() {
    return view("post-add.htmx");
  },
  post({body}) {
    return html(
      `<h2>Adding a post with:</h2>
      <div><strong>Title</strong> ${body.title}</div>
      <div><strong>Text</strong> ${body.text}</div>`,
    {partial: true});
  },
};
