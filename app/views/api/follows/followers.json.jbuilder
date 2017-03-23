json.array! @follows do |follow|
  json.id follow.id
  json.username follow.user.username
  json.avatar_url follow.user.avatar_url
  json.user_id follow.user.id
end
