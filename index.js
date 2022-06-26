var app = new Vue({
	el: '#app',
	data: {
		addText: '',
		list:[],
	},
	methods: {
		addToDo() {
			this.list.push({
				text: this.addText
			});
			this.addText = '';  //入力値初期化
		}
	}
});