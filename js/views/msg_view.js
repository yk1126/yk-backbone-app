var MsgView = Backbone.View.extend({
    tagName: 'li',
    myList: _.template('<span class="<%= status %>"><input type=checkbox id="listedMsg"' + 
		       '<% if(status === "read") print("checked") %>/>' + 
		       'Msg: <%= desc %></span>'),
    events: {
	'dblclick span': 'alertClick',
	'change input[id="listedMsg"]': 'toggleRead'
    },
    initialize: function() {
	this.model.on('change', this.render, this);
	this.model.on('hide', this.remove, this);
    },
    render: function() {
	var attributes = this.model.toJSON();
	this.$el.html(this.myList(attributes));
	return this;
    },
    alertClick: function(event) {
	console.log("Double click on 'span' element");
    },
    toggleRead: function() {
	this.model.toggleRead();
    }
});
