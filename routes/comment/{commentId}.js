export default {
    put(request) {
      const {path, query, cookies, headers, body} = request;
      return `
      You've sent a PUT request with the following data:

      Path:
        /comment/${path.commentId}
      Query:
        timestamps: ${query.timestamps}
      Cookies:
        jar: ${cookies.jar}
      Headers:
        host: ${headers.host}
      Body:
        title: ${body.title}
        text: ${body.text}
      `;
    },
};
