require 'mastodon'

client = Mastodon::REST::Client.new(
  base_url: 'https://botsin.space/',
  bearer_token: '9ZKcLS1TIIYh89xlpHPXvsdnc-VlNuKjVkyIXhDXJBE'
)

client.create_status("I'm a little test post.")