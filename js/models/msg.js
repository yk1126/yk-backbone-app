var Msg = Backbone.Model.extend({
    defaults: {desc: 'Sample message', status: 'unread'},
    url: '/msg.json',
    parse: function(response) {
	console.log(response);
	return response;
    },
    //localStorage: new Backbone.LocalStorage('msg-backbone')
    toggleRead: function() {
	if(this.get('status') === 'read')
	    this.set({status: 'unread'});
	else
	    this.set({status: 'read'});
    }
});
