TrelloClone.Views.CardShow = Backbone.View.extend({

  initialize: function() {
  },

  events: {
    'dblclick' : 'renderModal'
  },

  tagName: "li",

  className: "card",

  template: JST['cards/show'],

  render: function() {
    var content = this.template({ card: this.model })

    this.$el.html(content);
    this.$el.attr('data-id', this.model.id)

    return this;
  },

  renderModal: function() {
    $('.modal-screen').addClass('active');
    $('.modal-card').addClass('active');

    $('.modal-card').html(
      JST['cards/modal']({
        card: this.model,
        items: this.model.items()
      })
    )

    $('.modal-screen').on('click', function() {
      $('.modal-screen').empty();
      $('.modal-card').empty();

      $('.modal-screen').removeClass('active');
      $('.modal-card').removeClass('active');
    })

    //Insert: dimmer screen
    //Insert: modal
    //Listeners: X
  }

});
