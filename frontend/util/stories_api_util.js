export const fetchStories = () => (
  $.ajax({
    method: "GET",
    url: "/api/stories"
  })
);

export const fetchStory = id => (
  $.ajax({
    method: "GET",
    url: `/api/stories/${id}`
  })
);
