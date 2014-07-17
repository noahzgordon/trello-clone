TrelloClone.Views.CardForm = Backbone.LinkFormView.extend({
  formTemplate: JST['cards/form'],
  linkTemplate: JST['cards/form_link'],

  create: function (event) {
    event.preventDefault();

    this.collection.create({
      title: this.$('textarea').val(),
      list_id: this.collection.list.id
    }, { wait: true });

    this.$('textarea').val('');
    this.$('textarea').focus();
  }
});
