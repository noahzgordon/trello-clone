TrelloClone.Collections.Items = Backbone.Collection.extend({
  model: TrelloClone.Models.Item,

  url: "api/items",

  initialize: function(models, options) {
    this.card = options.card;
  }
})