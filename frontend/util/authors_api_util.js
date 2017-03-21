export const fetchAuthor = id => (
  $.ajax({
    method: "GET",
    url: `/api/authors/${id}`
  })
);
