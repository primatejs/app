def get(request)
  request.session.create({"count": false})
  puts(request.session.get("count"), request.session.get("count").class)

  "ses"
end
