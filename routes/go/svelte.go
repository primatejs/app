import "github.com/primatejs/go/primate"

func Get(request Request) any {
  posts := Array{Object{
    "id": 1,
    "title": "First post",
  }};

  return primate.View("svelte/PostIndex.svelte", Object{ "posts": posts });
}
