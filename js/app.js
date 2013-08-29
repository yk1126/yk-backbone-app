var Msg = Backbone.Model.extend({
    defaults: {desc: 'Sample message', read: false},
    //  localStorage: new Backbone.LocalStorage('msg-backbone')
    toggleRead: function() {
	if(this.get('read'))
	    this.set({read: false});
	else
	    this.set({read: true});
    }
});

var msg = new Msg({desc: 'This is my first message.'});

msg.on('change', function() {console.log("Data changed");});

var MsgView = Backbone.View.extend({
    el: '#msgs',     //Set an existing element with id '#msgs'
    myList: _.template('<li><input type=checkbox id="listedMsg"' + '<% if(read) print("checked") %>/>' + 'Msg: "<%= desc %>"</li>'),
    events: {
	'dblclick li': 'alertClick',
	'change input[id="listedMsg"]': 'toggleRead'
    },
    render: function() {
	//var html = '<li>' + this.model.get('desc') + '</li>';
	//console.log(this.model.get('desc'));
	//console.log(html);
	//console.log(this.el);
	var attributes = this.model.toJSON();
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


