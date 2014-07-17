TrelloClone.Views.CardForm = Backbone.View.extend({
  formTemplate: JST['cards/form'],
  linkTemplate: JST['cards/form_link'],

  initialize: function () {
    this.formShowing = false;
  },

  events: {
    'click a': 'showForm',
    'submit' : 'createCard'
  },

  createCard: function (event) {
    event.preventDefault();
    debugger
    this.collection.create({ title: this.$('textarea').val() }, { wait: true });
  },

  render: function () {
    var content;
    if(this.formShowing) {
      content = this.formTemplate();
    } else {
      content = this.linkTemplate();
    }

    this.$el.html(content);
    return this;
  },

  showForm: function (event) {
    event.preventDefault();
    this.formShowing = true;
    this.render();
  }
});
