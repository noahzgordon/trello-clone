TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],
  className: "col-md-3",

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
      var view = new TrelloClone.Views.CardShow({
        model: card
      });
      this.$('#cards').append(view.render().$el);
    }, this);
  },

  renderFooter: function () {
    var formView = new TrelloClone.Views.CardForm({
      collection: this.model.cards()
    });
    this.$('.panel-footer').html(formView.render().$el);
  },
});
