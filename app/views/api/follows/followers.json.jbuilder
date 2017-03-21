json.array! @follows do |follow|
  json.id follow.id
  json.username follow.user.username
  json.avatar_url follow.user.avatar_url
end
