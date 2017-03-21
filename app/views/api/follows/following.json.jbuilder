json.array! @follows do |follow|
  json.id follow.id
  json.username follow.author.username
  json.avatar_url follow.author.avatar_url
end
