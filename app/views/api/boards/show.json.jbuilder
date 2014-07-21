json.extract! @board, :id, :title, :created_at, :updated_at

json.members @board.members do |member|
  json.id member.id
  json.email member.email
  json.gravatar_url member.gravatar_url
end

json.lists @board.lists do |list|
  json.extract! list, :id, :title, :ord, :created_at, :updated_at

  json.cards list.cards do |card|
    json.extract! card, :id, :title, :ord, :created_at, :updated_at
  end
end
