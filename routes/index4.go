import "github.com/primatejs/go/primate"
import "fmt"

func Get(request Request) any {
  posts := Array{Object{
    "id": 1,
    "title": "First post",
  }};

  return primate.View("PostIndex.svelte", Object{"posts": posts});
}

func Post(request Request) any {
  name := request.Body.Get("name").(string);
  fmt.Println(request.Body.Get("T"))
  return "Hello, " + name;
}

