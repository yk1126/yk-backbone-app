var MsgListView = Backbone.View.extend({
    el: '#msgs',
    initialize: function() {
	this.collection.on('add', this.addOne, this);
	this.collection.on('reset', this.addAll, this);
    },
    render: function() {
	this.collection.forEach(this.addOne, this);
    },
    addOne: function(msg) {
	//console.log(this.$el);
	var msgView = new MsgView({model: msg});
	//console.log("msgView item: " + msgView.render().el)
	this.$el.append(msgView.render().el);
    },
    addAll: function() {
	this.collection.forEach(this.addOne, this);
    }
});

var msgListView = new MsgListView({collection: msgList});
msgListView.render();
