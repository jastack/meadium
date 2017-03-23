json.id @user.id
json.username @user.username
json.avatar_url @user.avatar_url
json.description @user.description
json.following @user.following do |author|
  json.follow_id author.id
end
