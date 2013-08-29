var Msg = Backbone.Model.extend({
    defaults: {desc: 'Sample message'},
  //  localStorage: new Backbone.LocalStorage('msg-backbone')
});

var msg = new Msg({desc: 'This is my first message.'});

msg.on('change', function() {console.log("Data changed");});

var MsgView = Backbone.View.extend({
    el: '#msgs',     //Set an existing element with id '#msgs'
    myList: _.template('<li>Msg: "<%= desc %>"</li>'),
    render: function() {
	//var html = '<li>' + this.model.get('desc') + '</li>';
	//console.log(this.model.get('desc'));
	//console.log(html);
	//console.log(this.el);
	var attributes = this.model.toJSON();
	this.$el.html(this.myList(attributes));
    }
});

var msgView = new MsgView({model: msg});


