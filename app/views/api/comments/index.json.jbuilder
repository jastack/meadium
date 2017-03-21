json.array! @comments do |comment|
  json.id comment.id
  json.story_id comment.story_id
  json.comment comment.comment
end
