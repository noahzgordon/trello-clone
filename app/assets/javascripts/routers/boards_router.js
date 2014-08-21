TrelloClone.Routers.Boards = Backbone.Router.extend({
  routes: {
    "" : "boardsIndex",
    "boards/new" : "newBoard",
    "boards/:id" : "showBoard"
  },

  boardsIndex: function() {
    TrelloClone.Collections.boards.fetch();
    var boardIndexView = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.Collections.boards
    });

    this._swapView(boardIndexView);

  },

  newBoard: function() {
    var boardNewView = new TrelloClone.Views.BoardNew();

    this._swapView(boardNewView);
  },

  showBoard: function(id) {
    var board = TrelloClone.Collections.boards.getOrFetch(id);
    var boardShowView = new TrelloClone.Views.BoardShow({
      model: board
    });

    this._swapView(boardShowView);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;

    $("#main").html(newView.render().$el);
  }

});
