TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);

    this.model.lists().each(function (list) {
      var view = new TrelloClone.Views.ListShow({
        model: list
      });
      this.$('#lists').append(view.render().$el);
    }, this);

    return this;
  }
});
