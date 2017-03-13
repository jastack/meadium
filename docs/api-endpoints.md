# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Stories

- `GET /api/stories`
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Comments

- `GET /api/:story.id/comments`
- `POST /api/:story.id/comments`
- `GET /api/:story.id/comments/:id`
- `DELETE /api/:story.id/comment/:id`

### Follows

- `GET /api/:author_id/follows`
- `POST /api/:author_id/follows`
- `DELETE /api/:author_id/follows/:id`

### Likes

- `GET /api/:story_id/likes`
- `POST /api/:story_id/likes`
- `DELETE /api/:story_id/likes/:id`
