json.id @author.id
json.username @author.username
json.avatarUrl @author.avatar_url
json.description @author.description
json.stories @author.stories do |story|
  json.title story.title
  json.image_url story.image_url
  json.subtitle story.subtitle
end
