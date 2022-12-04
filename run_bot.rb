require "mastodon"
require "rufus-scheduler"
require "rest-client"
require "json"
require "byebug"

client = Mastodon::REST::Client.new(
  base_url: "https://botsin.space/",
  bearer_token: "9ZKcLS1TIIYh89xlpHPXvsdnc-VlNuKjVkyIXhDXJBE",
)

account = "https://botsin.space/api/v1/accounts/109450821478454845"

scheduler = Rufus::Scheduler.new

scheduler.every "5s" do
  golf_course = JSON.parse(RestClient.get("localhost:3000/random"))
  toot = client.create_status(
    "#{golf_course["comparison"]}\n
  Local Govt Contact Info:
    Phone: #{golf_course["city"]["local_gov_phone"]}
    Email: #{golf_course["city"]["local_gov_email"]}
    "
  )
end

scheduler.join