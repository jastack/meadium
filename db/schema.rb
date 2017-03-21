# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170320213036) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "story_id",   null: false
    t.integer  "user_id",    null: false
    t.text     "comment",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["story_id", "user_id"], name: "index_comments_on_story_id_and_user_id", using: :btree
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id", "user_id"], name: "index_follows_on_author_id_and_user_id", using: :btree
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "story_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["story_id", "user_id"], name: "index_likes_on_story_id_and_user_id", using: :btree
  end

  create_table "stories", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.string   "author_id",  null: false
    t.string   "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "subtitle"
    t.integer  "likes"
    t.index ["title", "author_id"], name: "index_stories_on_title_and_author_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "avatar_url"
    t.text     "description"
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
