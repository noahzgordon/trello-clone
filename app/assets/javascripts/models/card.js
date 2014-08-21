TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: "api/cards",

  items: function() {
    this._items = this._items || new TrelloClone.Collections.Items([], {
      card: this
    });

    return this._items;
  },

  parse: function(response) {
    if (response['items']) {
      this.items().set(response['items'], { parse: true });
      delete response['items']
    }

    return response;
  }
});