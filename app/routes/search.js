import Ember from 'ember';

export default Ember.Route.extend({
		model(params) {
    //return this.store.findAll('post');
   
     var d = Ember.RSVP.hash({
      user : this.store.peekRecord('user-info',1),
    // post: this.store.findAll('post',{"id":"home"}),
     //post: this.get('store').query('post',"123", {"route" : "this"})
      //sendPost:this.store.createRecord('home')
     
       suggest:this.store.query('user',{"type":"suggester"}),
       friend:this.store.query('user',{"type":"friend"}),

    });
     // console.log(d);
      bootstrap_alert.loader('Loading...', 'loader',undefined,d);
     return d;

  }
});
