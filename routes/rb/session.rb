def get(request)
  if !request.session.exists
    request.session.create({"count": 0})
  else
    count = request.session.get("count")
    request.session.set("count", count + 1)
  end

  { count: request.session.get("count")}
end
