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
  toot = client.create_status(golf_course["comparison"])
  scheduler.in "5s" do
    # reply = client.create_status(
    #   "Local Govt Contact Info:\n
    #   Phone: #{golf_course["city"]["local_gov_phone"]}\n
    #   Email: #{golf_course["city"]["local_gov_email"]}",
    #   params = { in_reply_to_id: JSON.parse(RestClient.get("#{account}/statuses")).last.id }
    # )
  end
end

scheduler.join
# client.create_status("I'm a little test post.")
