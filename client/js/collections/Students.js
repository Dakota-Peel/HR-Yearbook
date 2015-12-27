var Students = Backbone.Collection.extend({

  model: Student,

  initialize: function (options) {
    this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + options.cohort;
    this.populateCohort();
  },
  populateCohort: function() {
    var that = this;
    this.fetch({
      success:function(data){
        that.add(data);
          that.models.forEach(function(person){
          var names = person.attributes.name.split(' ');
          person.attributes.first = names[0];
          person.attributes.last = names[1];
          person.attributes.nickname = generateNickname();
          });
      },

      error: function(){
        console.log('fetch error');
      },

    });
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
  }
});