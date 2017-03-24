json.array! @comments do |comment|
  json.id comment.id
  json.story_id comment.story_id
  json.comment comment.comment
  json.username comment.user.username
  json.user_id comment.user_id
  json.avatarUrl comment.user.avatar_url
  json.date comment.created_at
end
