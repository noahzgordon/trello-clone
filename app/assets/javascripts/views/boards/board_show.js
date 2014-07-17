TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.lists(), 'add', this.addList);
  },

  addList: function (list) {
    var view = new TrelloClone.Views.ListShow({
      model: list
    });
    this.$('#lists').append(view.render().$el);
  },

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    this.renderLists();
    this.renderListForm();
    return this;
  },

  renderLists: function () {
    this.model.lists().each(function (list) {
      this.addList(list);
    }, this);
  },

  renderListForm: function () {
    var formView = new TrelloClone.Views.ListForm({
      collection: this.model.lists()
    });
    this.$('#list-form').html(formView.render().$el);
  }
});
