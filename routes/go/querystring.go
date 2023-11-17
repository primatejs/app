func Get(request Request) any {
  return request.Query.Get("name").(string);
}
