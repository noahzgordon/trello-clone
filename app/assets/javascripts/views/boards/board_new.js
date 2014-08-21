TrelloClone.Views.BoardNew = Backbone.View.extend({

  template: JST['boards/new'],

  events: {
    "submit form" : "newBoard"
  },

  newBoard: function(event) {
    event.preventDefault();

    var formData = $(event.target).serializeJSON()["board"]
    TrelloClone.Collections.boards.create(formData, {
      success: function() {

        Backbone.history.navigate("/", { trigger: true })
      },

      error: function(model, response) {
        $('.error-bar').html(response.responseJSON[0]);
      }
    })
  },

  render: function() {
    var content = this.template()

    this.$el.html(content);

    return this;
  }

});
