TrelloClone.Views.ListForm = Backbone.View.extend({
  formTemplate: JST['lists/form'],
  linkTemplate: JST['lists/form_link'],
  className: 'col-md-3',

  initialize: function () {
    this.formShowing = false;
  },

  events: {
    'click a': 'showForm',
    'click .close': 'hideForm',
    'submit' : 'create',
    'keydown textarea': 'maybeCreate'
  },

  create: function (event) {
    event.preventDefault();
    this.collection.create({
      title: this.$('textarea').val(),
      board_id: this.collection.board.id
    }, { wait: true });
    this.$('textarea').val('');
    this.$('textarea').focus();
  },

  hideForm: function () {
    this.formShowing = false;
    this.render();
  },

  maybeCreate: function (event) {
    if(event.keyCode === 13) {
      this.create(event);
    }
  },

  render: function () {
    var content;
    if(this.formShowing) {
      content = this.formTemplate();
    } else {
      content = this.linkTemplate();
    }

    this.$el.html(content);
    this.delegateEvents();
    return this;
  },

  showForm: function (event) {
    event.preventDefault();
    this.formShowing = true;
    this.render();
  }
});
