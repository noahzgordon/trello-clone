TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      boards: this.collection
    });

    this.$el.html(content);
    return this;
  }
});
