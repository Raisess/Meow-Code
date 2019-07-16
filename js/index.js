/*
* @author Danilo Santana
*	Uma IDE HTML5, CSS3 para ajudar no ensino dessas tecnologias
*/
// Meow Code

// versão do código
const version = '0.1.0';
// aplicar a versão no titulo
document.getElementById('title').innerHTML += `${version} created by Danilo Santana`;

// indetificador e retorno de erros
const errorStyle = 'color: red; text-align: center; margin-top: 30%;';
const errors = [
	[
		'',
	],
	[
		`<h3 style="${errorStyle}">parece que não à nada no seu HTML!</h3>`,
	]
];

// snippets padrão
const defaultSnippets = [
 'html',
 'react',
 'boots'
]

// aplicar o preview
const debug = ()=>{
	
	// saida da previa
	const debugWindow = document.querySelector('#output');
	// valor do textarea
	const toDebug = document.querySelector('#input');

	// valor padrão da previa
	debugWindow.innerHTML = '<h3 style="color: blue; text-align: center; margin-top: 30%;">previa do seu projeto</h3>';

	// checar o valor do textarea
	toDebug.addEventListener('blur', () => {

		if(toDebug.value === errors[0][0]){ //retorna o erro de valor null || undefined
			debugWindow.innerHTML = errors[1][0];
		}
		else if(toDebug.value === 'creator'){ // easter egg
			debugWindow.innerHTML = '<p><b>Danilo Santana</b></p>';
		}
		else if(toDebug.value === defaultSnippets[0]){ // boilerplate HTML5
			toDebug.value = snippets[0];
		}
		else if(toDebug.value === defaultSnippets[1]){ // add react
			toDebug.value = snippets[1];
		}
		else if(toDebug.value === defaultSnippets[2]){ // add bootstrap
			toDebug.value = snippets[2];
		}
		// aplicar o cádigo para saida
		else{
			debugWindow.innerHTML = `${toDebug.value}`;	
		}
	  
	});

}
debug();

// opções da barra lateral
const sideOptions = ()=>{

	// adicionar bibliotecas
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

	// configurações
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

// utilidades da barrra de rodapé
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

		document.getElementById('font').innerHTML = config.code.fontSize;

		label.addEventListener('blur', () => {

			input.style.fontSize = label.value+'px';
			document.getElementById('font').innerHTML = label.value+'px';

		});
	}
	setFontSize();

}
bottomUtilities();

// settar as novas libs
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

const setArchiveName = ()=>{

	const exportFileBtn = document.getElementById('exportFile');
	const archiveWindow = document.getElementById('archiveWindow');

	exportFileBtn.addEventListener('click', () => {
	  archiveWindow.style.display = '';
	});
}
setArchiveName();

const openImportArchive = ()=>{

	const importWindow = document.getElementById('importWindow');
	const importFileBtn = document.getElementById('importFile');

	importFileBtn.addEventListener('click', () => {
	  importWindow.style.display = '';
	});
}
openImportArchive();

// ativar as configurações e tema
const setConfig = ()=>{

	const body = document.getElementById('body');
	let input = document.getElementById('input');
	const sideMenu = document.getElementById('sideMenu');
	let configWindow = document.getElementById('configWindow');
	const configContainer = document.getElementById('configContainer');
	let libsWindow = document.getElementById('libsWindow');
	let libsWindowBtn = document.getElementById('setLibs');
	const windowExport = document.getElementById('archiveWindow');
	let windowExportLabel = document.getElementById('archiveNameExport');
	const windowImport = document.getElementById('importWindow');
	let windowImportLabel = document.getElementById('archiveNameImport');

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
	windowExport.style.backgroundColor = config.sideMenu.color;
	windowExportLabel.style.backgroundColor = config.background.color;
	windowImport.style.backgroundColor = config.sideMenu.color;
	windowImportLabel.style.backgroundColor = config.background.color;

	importFont.href = config.code.fontImportLink;
}
setConfig();

const onOpenConsole = ()=>{
	console.log('%cpara usar o JavaScript clique no icone do olho ali em cima para usar as live expressions', 'font-size: 20px; color: orange;');
}
onOpenConsole();

// checar o tempo de inicialização da aplicação
document.getElementById('startTime').innerHTML = performance.now();