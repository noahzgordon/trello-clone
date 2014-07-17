TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],

  render: function () {
    var content = this.template({
      list: this.model
    });

    this.$el.html(content);

    return this;
  },
});
