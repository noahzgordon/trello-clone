TrelloClone.Views.BoardsIndex = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['boards/index'],

  render: function() {

    var content = this.template({ boards: this.collection })

    this.$el.html(content);

    return this;
  }

});
