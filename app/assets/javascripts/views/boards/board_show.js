TrelloClone.Views.BoardShow = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, 'sync change', this.render);
  },

  template: JST['boards/show'],

  render: function() {
    var content = this.template({ board: this.model })

    this.$el.html(content);

    this.model.lists().each(function(list) {
      var listShowView = new TrelloClone.Views.ListShow({
        model: list
      })

      $(".lists").append(listShowView.render().$el)
    })

    return this;
  }
});
