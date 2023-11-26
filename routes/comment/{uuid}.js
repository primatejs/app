export default {
  get(request) {
    return request.path.get("uuid");
  },
  post(request) {
    const {path, query, cookies, headers, body} = request;
    return `
    You've sent a PUT request with the following data:

    Path:
      /comment/${path.get("uuid")}
    Query:
      timestamps: ${query.get("timestamps")}
    Cookies:
      jar: ${cookies.get("jar")}
    Headers:
      host: ${headers.get("host")}
    Body:
      title: ${body.title}
      text: ${body.text}
    `;
  },
};
