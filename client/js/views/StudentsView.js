var StudentsView = Backbone.View.extend({

  el: '#page-content-container',

  initialize: function() {
    this.render();
  },

  render: function() {
    var that = this;
    console.log(this.collection);
      this.collection.models.map(function(person){
        console.log(person, 'person');
        debugger
        return new StudentEntryView(person.attributes);
      });
      return this.$el;
  }

});