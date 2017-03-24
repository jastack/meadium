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

export const createStory = story => (
  $.ajax({
    method: "POST",
    url: "/api/stories",
    data: { story }
  })
);

export const deleteStory = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/stories/${id}`
  });
};

export const updateStory = (story) => {
  return $.ajax({
    method: "PATCH",
    url: `api/stories/${story.id}`,
    data: { story }
  });
};
