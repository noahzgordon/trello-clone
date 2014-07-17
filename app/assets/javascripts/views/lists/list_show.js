TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
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
    this.addSubview("#cards", view);
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
    this.model.cards().each(this.addCard.bind(this));
  },

  renderFooter: function () {
    var formView = new TrelloClone.Views.CardForm({
      collection: this.model.cards()
    });
    this.addSubview(".panel-footer", formView);
  }
});
