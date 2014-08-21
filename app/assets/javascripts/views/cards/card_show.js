TrelloClone.Views.CardShow = Backbone.View.extend({

  initialize: function() {
  },

  tagName: "li",

  className: "card",

  template: JST['cards/show'],

  render: function() {
    var content = this.template({ card: this.model })

    this.$el.html(content);

    return this;
  }

});
