export const fetchComments = storyId => (
  $.ajax({
    method: "GET",
    url: `/api/stories/${storyId}/comments`
  })
);


export const createComment = (storyId, comment) => (
  $.ajax({
    method: "POST",
    url: `/api/stories/${storyId}/comments`,
    data: { comment }
  })
);
