# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140716203208) do

  create_table "board_memberships", force: true do |t|
    t.integer  "user_id",    null: false
    t.integer  "board_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "board_memberships", ["user_id", "board_id"], name: "index_board_memberships_on_user_id_and_board_id", unique: true

  create_table "boards", force: true do |t|
    t.string   "title",      null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "boards", ["user_id"], name: "index_boards_on_user_id"

  create_table "card_assignments", force: true do |t|
    t.integer  "card_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "card_assignments", ["card_id", "user_id"], name: "index_card_assignments_on_card_id_and_user_id", unique: true

  create_table "cards", force: true do |t|
    t.string   "title",                     null: false
    t.integer  "list_id",                   null: false
    t.text     "description"
    t.float    "ord",         default: 0.0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "cards", ["list_id"], name: "index_cards_on_list_id"

  create_table "items", force: true do |t|
    t.string   "title",                      null: false
    t.integer  "card_id",                    null: false
    t.boolean  "done",       default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "items", ["card_id"], name: "index_items_on_card_id"

  create_table "lists", force: true do |t|
    t.string   "title",                    null: false
    t.integer  "board_id",                 null: false
    t.float    "ord",        default: 0.0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "lists", ["board_id"], name: "index_lists_on_board_id"

  create_table "users", force: true do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["session_token"], name: "index_users_on_session_token"

end
