json.extract! @board, :id, :title, :created_at, :updated_at

json.lists @board.lists do |list|
  json.extract! list, :id, :title, :created_at, :updated_at

  json.cards list.cards do |card|
    json.extract! card, :id, :title, :created_at, :updated_at
  end
end
