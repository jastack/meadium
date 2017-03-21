json.array! @likes do |like|
  json.id like.id
  json.user_id like.user_id
  json.username like.user.username
  json.story like.story.title
end
