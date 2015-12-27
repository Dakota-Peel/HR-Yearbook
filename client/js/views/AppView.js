var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {

    options.router.on('route:landing', function() {
      console.log('Hit landing Route');
    }.bind(this));
    this.renderCohort(37);
    this.renderLanding();

  },

  renderCohort: function(cohort) {
    var collection = new Students({cohort: 37});
    collection.populateCohort();
    setTimeout(function(){
    return new StudentsView({collection: collection});
  },1000);
  },

  renderLanding: function() {
    $('#page-content-container').html(new LandingView().render());
  }
});