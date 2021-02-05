var h = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element');
var diff = require('virtual-dom/diff');
var patch = require('Virtual-dom/patch');

var data = ['vue.js', 'angular', 'react'];

function render(data) {
	var lists = data.map(function (item, index) {
		return h('li', [
			item,
			h(
				'button',
				{
					type: 'button',
					onclick: function (e) {
						data.splice(index, 1);
						console.log(data);
						update();
					},
				},
				'delete'
			),
		]);
	});

	var list = h('ul', lists);

	var input = h('input.add-content', {
		type: 'text',
		placeholder: 'Add Favorite Framework',
	});

	var add_button = h(
		'button.add-button',
		{
			type: 'button',
			onclick: function (e) {
				var input = document.querySelector('.add-content');
				// 모델 데이터 업데이트
				data.push(input.value);
				// 화면 뷰 업데이트
				update();
				// 콘솔 변경된 데이터 출력
				input.value = '';
			},
		},
		'Add'
	);

	var container = h('div.container', [input, add_button, list]);
	return container;
}

function update() {
	var newTree = render(data);
	var patches = diff(tree, newTree);
	patch(rootNode, patches);
	// tree 변수 값 업데이트
	tree = newTree;
}

// Virtual DOM
var tree = render(data);
var rootNode = createElement(tree);
document.body.appendChild(rootNode);

// window.setInterval(function () {
//   update()
// }, 1400)

var name = 'hanna';
