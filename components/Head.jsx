import React from "react";
const is_client = globalThis.document?.createElement !== undefined;

const to_array = maybe => Array.isArray(maybe) ? maybe : [maybe];

const head = is_client ? globalThis.document.head : null;

const allowed_tags = [
  "title", "meta", "style", "meta", "link", "script", "base",
];

const make_tag = (child, id) => {
  const attributes = Object.entries(child.props)
    .map(([key, value]) => `${key}="${value}"`)
    .concat(`data-rh="${id}"`)
    .join(" ");

  return `<${child.type} ${attributes}/>`;
}

export default class extends React.Component {
  componentDidMount() {
    this.id = globalThis.crypto.randomUUID();
    if (is_client) {
      const elements = head.querySelectorAll(`[data-rh="1"]`);
      elements.forEach(element => {
        element.remove();
      })
      const children = to_array(this.props.children);
      const titles = children.filter(child => child.type === "title");
      titles.forEach(title => {
        globalThis.document.title = title.props.children;
      });
      const others = children.filter(child => child.type !== "title");
      for (const child of others) {
        head.prepend(make_tag(child, this.id));
      }
    }
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    return "";
  }
}
