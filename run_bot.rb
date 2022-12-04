require "mastodon"
require "rufus-scheduler"
require "rest-client"
require "json"
require "byebug"

client = Mastodon::REST::Client.new(
  base_url: "https://botsin.space/",
  bearer_token: "9ZKcLS1TIIYh89xlpHPXvsdnc-VlNuKjVkyIXhDXJBE",
)

scheduler = Rufus::Scheduler.new

scheduler.every "5s" do
  golf_course = JSON.parse(RestClient.get("localhost:3000/random"))
  # byebug
  client.create_status(golf_course["comparison"])
end

scheduler.join
# client.create_status("I'm a little test post.")
