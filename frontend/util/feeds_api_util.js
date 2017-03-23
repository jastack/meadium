export const fetchFeed = (userId) => (
  $.ajax({
    method: "GET",
    url: `/api/authors/${userId}/feeds`
  })
);
