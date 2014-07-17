TrelloClone.Views.ListForm = Backbone.LinkFormView.extend({
  formTemplate: JST['lists/form'],
  linkTemplate: JST['lists/form_link'],
  className: 'col-md-3',

  create: function (event) {
    event.preventDefault();
    this.collection.create({
      title: this.$('textarea').val(),
      board_id: this.collection.board.id
    }, { wait: true });
    this.$('textarea').val('');
    this.$('textarea').focus();
  },
});
