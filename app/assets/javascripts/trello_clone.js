window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TrelloClone.Routers.Boards();
    Backbone.history.start();
  }
};

$(document).ready(function() {
  TrelloClone.initialize();
});
