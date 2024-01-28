def get(request)
  posts = [{
    id: 0,
    title: "First post",
  }]
  Primate.view("svelte/PostIndex.svelte", { posts: posts })
end

def post(request)
  puts(request.body["foo"])
  "POST, " + request.url.origin + "/foo=" + request.query.get("foo") + request.url.hash
end
