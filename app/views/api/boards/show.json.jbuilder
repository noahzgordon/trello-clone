# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list




#json.lists @board.lists, :title, :ord
json.title @board.title

json.lists @board.lists do |json, list|
  json.title list.title
  json.ord list.ord

  json.cards list.cards do |json, card|
    json.title card.title
    json.ord card.ord
    json.description card.description

    json.items card.items do |json, item|
      json.done? item.done?
      json.title item.title
    end
  end
end

