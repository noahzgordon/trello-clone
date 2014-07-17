TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);

    this.model.cards().each(function (card) {
      var view = new TrelloClone.Views.CardShow({
        model: card
      });
      this.$('#cards').append(view.render().$el);
    }, this);

    return this;
  },
});
