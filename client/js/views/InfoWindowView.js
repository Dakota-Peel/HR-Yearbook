var InfoWindowView = Backbone.View.extend({

  el: '#info-window-container',

  template: _.template('<div>info window view</div>'),
  initialize: function() {
    this.render();
  },

  render: function() {
    console.log('this',this);
    this.$el.html(this.template);
    return this;
  }

});
