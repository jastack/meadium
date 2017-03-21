export const fetchLikes = (storyId) => (
  $.ajax({
    method: "GET",
    url: `api/stories/${storyId}/likes`
  })
);

export const newLike = (storyId, like) => (
  $.ajax({
    method: "POST",
    url: `api/stories/${storyId}/likes`,
    data: { like }
  })
);

export const removeLike = (storyId, likeId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/stories/${storyId}/likes/${likeId}`
  })
);
