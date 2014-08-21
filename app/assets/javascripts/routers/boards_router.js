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

  showBoard: function() {

  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove()
    this._currentView = newView

    $("#main").html(newView.render().$el)
  }

});
