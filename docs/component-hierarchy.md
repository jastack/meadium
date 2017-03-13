## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
  - Home
  - Header
  - Sidebar
  - UserFeed
   + Story
    - Tags
      + Tag
    - Author
    - Likes
    - StoryDetail
        * Title, Subtitle, Img

**StoryContainer**
  - Story
    + Tags
      - Tag
    - Author
    - Likes
    - StoryDetail
        * Title, Subtitle, Img, Body
  - Comments      

**AuthorContainer**
  - AuthorDetails
    + Name, Info, Image
  - Follow  
  - AuthorFeed
    + Story
      - Tags
        + Tag
      - Likes
      - StoryDetail
          * Title, Subtitle, Img

**NewStoryContainer**
 - NewStory
  - Publish
    + AddTags


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/new" | "NewStoryContainer" |
| "/home/:author_id" | "AuthorContainer" |
| "/home/:story_id" | "StoryContainer" |
