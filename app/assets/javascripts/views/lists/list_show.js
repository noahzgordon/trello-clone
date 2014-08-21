TrelloClone.Views.ListShow = Backbone.View.extend({

  initialize: function() {
  },

  className: "list",

  template: JST['lists/show'],

  render: function() {

    var content = this.template({ list: this.model })

    this.$el.html(content);

    return this;
  }

});
