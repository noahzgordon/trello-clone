TrelloClone.Views.ListShow = Backbone.View.extend({

  initialize: function() {
  },

  className: "list",

  tagName: "li",

  template: JST['lists/show'],

  render: function() {

    var content = this.template({ list: this.model })
    var view = this;

    this.$el.html(content);

    this.model.cards().each(function(card) {
      var cardShowView = new TrelloClone.Views.CardShow({
        model: card
      })

      view.$(".cards").append(cardShowView.render().$el)
    })

    this.$('.cards').sortable();

    return this;
  }

});
