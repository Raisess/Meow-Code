/*
* @author Danilo Santana
*	Uma IDE HTML5, CSS3 para ajudar no ensino dessas tecnologias
*/
// Meow Code

const version = '0.0.6';

document.getElementById('title').innerHTML += `${version} created by Danilo Santana`;

const errorStyle = 'color: red; text-align: center; margin-top: 30%;';

const errors = [
	[
		'',
		'fodase'
	],
	[
		`<h3 style="${errorStyle}">parece que não à nada no seu HTML!</h3>`,
		'fodase vc'
	]
];

const defaultSnippets = [
 'html'
]

const debug = ()=>{
	
	const debugWindow = document.querySelector('#output');
	const toDebug = document.querySelector('#input');

	debugWindow.innerHTML = '<h3 style="color: blue; text-align: center; margin-top: 30%;">previa do seu projeto</h3>';

	toDebug.addEventListener('blur', () => {

		if(toDebug.value === errors[0][0]){
			debugWindow.innerHTML = errors[1][0];
		}
		else if(toDebug.value === 'creator'){
			debugWindow.innerHTML = '<p><b>Danilo Santana</b></p>';
		}
		else if(toDebug.value === errors[0][1]){
			debugWindow.innerHTML = errors[1][1];
		}
		else if(toDebug.value === defaultSnippets[0]){
			toDebug.value = snippets[0];
		}
		else{
			debugWindow.innerHTML = `${toDebug.value}`;	
		}
	  
	});

}
debug();

const sideOptions = ()=>{

	const addLibs = ()=>{

		const libsBtn = document.querySelector('#openLibs');
		const libsWindow = document.querySelector('#libsWindow');

		function open(){
			libsBtn.addEventListener('click', () => {
			  libsWindow.style.display = '';
			  close();
			});
		}
		function close(){
			libsBtn.addEventListener('click', () => {
			  libsWindow.style.display = 'none';
			  open();
			});	
		}
		open();
	}
	addLibs();

	const configs = ()=>{

		const configWindow = document.querySelector('#configWindow');
		const configBtn = document.querySelector('#openConfig');

		function open(){
			configBtn.addEventListener('click', () => {
			  configWindow.style.display = '';
			  close();
			});
		}
		function close(){
			configBtn.addEventListener('click', () => {
			  configWindow.style.display = 'none';
			  open();
			});	
		}
		open();
	}
	configs();

}
sideOptions();

const bottomUtilities = ()=>{

	function clock(){

		const clockDisplay = document.getElementById('clock');

		let time = new Date();
		let hours = time.getHours();
		let mins = time.getMinutes();
		//let sec = time.getSeconds();

		if(hours < 10){
			return clockDisplay.innerHTML = '0'+hours+':'+mins;
		}
		else if(mins < 10){
			return clockDisplay.innerHTML = hours+':0'+mins;
		}
		else if(hours < 10 && mins < 10){
			return clockDisplay.innerHTML = '0'+hours+':0'+mins;
		}
		else{
			return clockDisplay.innerHTML = hours+':'+mins;	
		}

	}
	setInterval(() => {
	  clock();
	}, 1000);

	function getTheme(){

		const themeDisplay = document.getElementById('theme');

		themeDisplay.innerHTML += themeName;
	}
	getTheme();

	function setFontSize(){

		const label = document.getElementById('fontSize');
		let input = document.getElementById('input');

		label.addEventListener('keydown', (keydown) => {
			switch (keydown.keyCode) {
				case 13:
					input.style.fontSize = label.value+'px';
					break;
				default:
					null;
					break;
			}
		});
	}
	setFontSize();

}
bottomUtilities();

const setLibs = ()=>{

	const jsLibLabel0 = document.querySelector('#jsLib0');
	const cssLibLabel0 = document.querySelector('#cssLib0');
	const jsLibLabel1 = document.querySelector('#jsLib1');
	const cssLibLabel1 = document.querySelector('#cssLib1');

	const setLibsBtn = document.querySelector('#setLibs');

	setLibsBtn.addEventListener('click', () => {
	  document.getElementById('jsLibLocation0').src = jsLibLabel0.value;
	  document.getElementById('cssLibLocation0').href = cssLibLabel0.value;
	  document.getElementById('jsLibLocation1').src = jsLibLabel1.value;
	  document.getElementById('cssLibLocation1').href = cssLibLabel1.value;
	  console.log('js lib 0 setted to:', jsLibLabel0.value);
	  console.log('css lib 0 setted to:', cssLibLabel0.value);
	  console.log('js lib 1 setted to:', jsLibLabel1.value);
	  console.log('css lib 1 setted to:', cssLibLabel1.value);
	});

}
setLibs();

const setConfig = ()=>{

	const body = document.getElementById('body');
	let input = document.getElementById('input');
	const sideMenu = document.getElementById('sideMenu');
	let configWindow = document.getElementById('configWindow');
	const configContainer = document.getElementById('configContainer');
	let libsWindow = document.getElementById('libsWindow');
	let libsWindowBtn = document.getElementById('setLibs');

	let importFont = document.getElementById('newFont');

	const currentTheme = document.getElementById('currentTheme');

	currentTheme.innerHTML = themeName;

	body.style.backgroundColor = config.background.color;
	body.style.color = config.background.fontColor;
	input.style.backgroundColor = config.background.color;
	input.style.color = config.code.fontColor;
	input.style.fontSize = config.code.fontSize;
	input.style.fontFamily = config.code.fontFamily;
	sideMenu.style.backgroundColor = config.sideMenu.color;
	sideMenu.style.color = config.sideMenu.iconsColor;
	libsWindow.style.backgroundColor = config.libsWindow.color;
	libsWindowBtn.style.backgroundColor = config.sideMenu.iconsColor;
	libsWindowBtn.style.color = config.libsWindow.fontColor;
	configWindow.style.backgroundColor = config.configWindow.color;
	configContainer.style.backgroundColor = config.sideMenu.color;
	configContainer.style.color = config.background.fontColor;

	importFont.href = config.code.fontImportLink;
}
setConfig();

const onOpenConsole = ()=>{
	console.log('%cpara usar o JavaScript clique no icone do olho ali em cima para usar as live expressions', 'font-size: 20px; color: orange;');
}
onOpenConsole();

document.getElementById('startTime').innerHTML = performance.now();