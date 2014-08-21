TrelloClone.Collections.Boards = Backbone.Collection.extend({

  model: TrelloClone.Models.Board,

  url: "/api/boards"

});

TrelloClone.Collections.boards = new TrelloClone.Collections.Boards();