export const fetchTopicStories = id => (
  $.ajax({
    method: "GET",
    url: `/api/topics/${id}`
  })
);
