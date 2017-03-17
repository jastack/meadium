json.array! @stories do |story|
  json.id story.id
  json.title story.title
  json.author story.author.username
  json.image_url story.image_url
  json.avatar_url story.author.avatar_url
end
