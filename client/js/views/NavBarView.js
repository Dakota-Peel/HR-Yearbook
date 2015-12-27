var NavBarView = Backbone.View.extend({

  el: '#navbar-container',
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<div>nav bar</div>');
  }

});

