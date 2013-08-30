var MsgList = Backbone.Collection.extend({
    model: Msg,
    initialize: function() {
	this.on('remove', this.hideMsg);
    },
    hideModel: function(msg) {
	msg.trigger('hide');
    }
});

var msgs = [ {desc: 'This is my first message.'}, 
	     {desc: 'I am getting used to it.'}, 
	     {desc: 'And I am ready!'} ];

var msgList = new MsgList();
msgList.reset(msgs);
