TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  className: 'well well-sm',

  render: function () {
    var content = this.template({
      card: this.model
    });
    this.$el.html(content);
    return this;
  }
});
