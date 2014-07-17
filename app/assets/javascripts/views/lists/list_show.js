TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],
  className: "col-md-3",

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add', this.addCard);
  },

  addCard: function (card) {
    var view = new TrelloClone.Views.CardShow({
      model: card
    });
    this.$('#cards').append(view.render().$el);
  },

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);

    this.renderCards();
    this.renderFooter();
    return this;
  },

  renderCards: function () {
    this.model.cards().each(function (card) {
      this.addCard(card);
    }, this);
  },

  renderFooter: function () {
    var formView = new TrelloClone.Views.CardForm({
      collection: this.model.cards()
    });
    this.$('.panel-footer').html(formView.render().$el);
  }
});
