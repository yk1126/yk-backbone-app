var Msg = Backbone.Model.extend({
    defaults: {desc: 'Sample message', read: false, status: 'unread'},
    //localStorage: new Backbone.LocalStorage('msg-backbone')
    toggleRead: function() {
	if(this.get('read'))
	{
	    this.set({read: false});
	    this.set({status: 'unread'});
	}
	else
	{
	    this.set({read: true});
	    this.set({status: 'read'});
	}
    }
});

var msg = new Msg({desc: 'This is my first message.'});

msg.on('change', function() {console.log("Data changed");});

var MsgView = Backbone.View.extend({
    el: '#msgs',
    myList: _.template('<li class="<%= status %>"><input type=checkbox id="listedMsg"' + 
		       '<% if(read) print("checked") %>/>' + 
		       'Msg: <%= desc %></li>'),
    events: {
	'dblclick li': 'alertClick',
	'change input[id="listedMsg"]': 'toggleRead'
    },
    initialize: function() {
	this.model.on('change', this.render, this);
    },
    render: function() {
	//var html = '<li>' + this.model.get('desc') + '</li>';
	//console.log(this.model.get('desc'));
	//console.log(html);
	//console.log(this.el);
	var attributes = this.model.toJSON();
	console.log(attributes);
	this.$el.html(this.myList(attributes));
    },
    alertClick: function(event) {
	console.log("Double click on 'li' element");
    },
    toggleRead: function() {
	this.model.toggleRead();
    }
});

var msgView = new MsgView({model: msg});
msgView.render();


