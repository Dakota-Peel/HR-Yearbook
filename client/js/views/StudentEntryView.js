var StudentEntryView = Backbone.View.extend({

    template : _.template('<div><%= name %></div><div>test</div>'),

    initalize:function(){
      conosle.log('inside view');
      this.render();
    },

    render: function(){
      console.log('this',this);
      console.log('template',template);
      this.$el.html(this.template(this.model.attributes));
      return this;

    }
});