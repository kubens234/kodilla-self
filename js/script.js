function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
	var self = this;
	this.$element = $('<button>');
	this.$element.text(this.text);
	this.$element.click(function() {
		alert(self.text);
	});
	$('body').append(this.$element);
}
}

var btn1 = new Button('Hello!');
btn1.create(); 
var btn2 = new Button('Znowu button!');
btn2.create(); 
var btn3 = new Button('Zaskocz mnie!');
btn3.create();
var nazwa = prompt("Podaj nazwę buttona 4:");
btn4 = new Button(nazwa);
btn4.create(); 