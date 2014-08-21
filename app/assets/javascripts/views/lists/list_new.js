TrelloClone.Views.ListNew = Backbone.View.extend({

  initialize: function() {
  },

  template: JST['lists/new'],

  tagName: "div",

  className: "list-form",

  render: function() {
    var content = this.template();

    this.$el.html(content);

    return this;
  }

});