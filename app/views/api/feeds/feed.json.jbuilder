json.array! @feed do |story|
  json.id story.id
  json.title story.title
  json.author story.author.username
  json.author_id story.author.id
  json.image_url story.image_url
  json.avatar_url story.author.avatar_url
  json.subtitle story.subtitle
  json.date story.created_at
end
