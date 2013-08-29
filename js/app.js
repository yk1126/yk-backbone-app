var Msg = Backbone.Model.extend({
    defaults: {desc: 'Sample message'}
});

var msg = new Msg({desc: 'This is my first message.'});


var MsgView = Backbone.View.extend({
    el: '#msgs',
    render: function() {
	var html = '<li>' + this.model.get('desc') + '</li>';
	console.log(this.model.get('desc'));
	console.log(html);
	console.log(this.el);
	$(this.el).html(html);
    }
});

var msgView = new MsgView({model: msg});
