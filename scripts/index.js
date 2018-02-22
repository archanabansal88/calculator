(function() {
	var Calculator = function(button, result) {
		this.button = button;
		this.result = result;
		this.init();
	};
	Calculator.prototype.init = function() {
		this.attachEvent();
	};

	Calculator.prototype.attachEvent = function() {
		this.button.on('click', '.button', this.handleClick.bind(this));
	};

	Calculator.prototype.handleClick = function(e) {
		let eventValue = e.target.value;
		let result = this.result.html();

		if (eventValue === '=') {
			result = eval(result);
		} else if (eventValue === 'clear') {
			result = '';
		} else {
			result += eventValue;
		}

		result = this.result.html(result);
	};

	window.Calculator = Calculator;
})();

(function() {
	new Calculator($('.button-container'), $('.display-area'));
})();
