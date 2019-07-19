/*
* @author Danilo Santana
*	Um editor de código para ajudar no ensino da programação
*/
// Meow Code

// versão do código
const version = '0.1.6';
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

		label.value = config.code.fontSize;

		document.getElementById('font').innerHTML = config.code.fontSize+'px';

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

// janela para salvar arquivo
const setArchiveName = ()=>{

	const exportFileBtn = document.getElementById('exportFile');
	const archiveWindow = document.getElementById('archiveWindow');

	exportFileBtn.addEventListener('click', () => {
	  archiveWindow.style.display = '';
	});
}
setArchiveName();

// janela para abrir arquivo
const openImportArchive = ()=>{

	const importWindow = document.getElementById('importWindow');
	const importFileBtn = document.getElementById('importFile');

	importFileBtn.addEventListener('click', () => {
	  importWindow.style.display = '';
	});
}
openImportArchive();

// abrir a janela de prévia para HTML
const openPreviewWindow = ()=>{

	const onOff = document.getElementById('onOff');
	const html = document.getElementById('output');

	let sideMap = document.getElementById('sideMap');

	const code = document.getElementById('input');

	function open(){
		onOff.addEventListener('click', () => {
		  html.style.display = '';
		  sideMap.style.display = 'none';
		  code.style.width = '55.9%';
		  onOff.innerHTML = 'html preview on';
		  close();
		});
	}
	function close(){
		onOff.addEventListener('click', () => {
		  html.style.display = 'none';
		  sideMap.style.display = '';
		  code.style.width = '100.5%';
		  onOff.innerHTML = 'html preview off';
		  open();
		});
	}
	open();
}
openPreviewWindow();

// sistema de arquivos
const fileSystem = ()=>{
	
	var n;
	// resetar a mensagem
	function reset(){
		setTimeout(() => {
	    document.getElementById('event').innerHTML = '';
	  }, 2000);
	}

	document.getElementById('archiveNameExport').addEventListener('keydown', (keydown) => {
	  switch (keydown.keyCode) {
	  	case 13: // ENTER
	  		exportFile();
	  		break;
	  	default:
	  		null;
	  		break;
	  }
	});
	document.getElementById('archiveNameImport').addEventListener('keydown', (keydown) => {
	  switch (keydown.keyCode) {
	  	case 13: // ENTER
	  		importFile();
	  		break;
	  	default:
	  		null;
	  		break;
	  }
	});

	// salvar e criar arquivo
	function exportFile(){

		// nome do arquivo
		let name = document.getElementById('archiveNameExport');
		// escrever
		fs.writeFile('./build/'+name.value, document.getElementById('input').value, (error)=>{

			if(error){
				throw error;
			}
			console.log('projeto salvo');
		});

		document.getElementById('archiveWindow').style.display = 'none';
		document.getElementById('event').innerHTML = name.value+' salvo!';
		reset();
		n = name.value;
		name.value = '';
	}
	// importar a arquivo
	function importFile(){

		let name = document.getElementById('archiveNameImport');

		fs.readFile("./build/"+name.value, (error, content)=>{

			if(error){
				throw error;
			}
			document.getElementById('input').value = content;
		});
		console.log('arquivo importado: '+name.value);
		document.getElementById('importWindow').style.display = 'none';
		document.getElementById('event').innerHTML = 'arquivo importado: '+name.value;
		reset();
		n = name.value;
		name.value = '';
		console.log(n);
	}

	document.addEventListener('keydown', (keydown) => {
		switch (keydown.keyCode) {
			case 27: // ESC
	  		document.getElementById('archiveWindow').style.display = 'none';
	  		document.getElementById('importWindow').style.display = 'none';
	  		break;
	  	case 117: // F6 para salvar o arquivo aberto no momento
	  		fs.writeFile('./build/'+n, document.getElementById('input').value, (error)=>{
	  			if(error){
	  				throw error;
	  			}
	  			document.getElementById('event').innerHTML = 'arquivo salvo: '+n;
	  			reset();
	  			console.log('arquivo salvo:', n);
	  		});
	  		break;
	  	default:
	  		null;
	  		break;
		}
	});
}
fileSystem();

const sideMapOutput = ()=>{

	const sideMap = document.getElementById('sideMap');
	const input = document.getElementById('input');

	setInterval(() => {
	  sideMap.innerHTML = String(input.value);
	}, 1);

}
sideMapOutput();

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
	let sideMap = document.getElementById('sideMap');

	let importFont = document.getElementById('newFont');

	const currentTheme = document.getElementById('currentTheme');

	currentTheme.innerHTML = themeName;

	body.style.backgroundColor = config.background.color;
	body.style.color = config.background.fontColor;
	input.style.backgroundColor = config.background.color;
	input.style.color = config.code.fontColor;
	input.style.fontSize = config.code.fontSize+'px';
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
	windowExportLabel.style.color = config.background.fontColor;
	windowImport.style.backgroundColor = config.sideMenu.color;
	windowImportLabel.style.backgroundColor = config.background.color;
	windowImportLabel.style.color = config.background.fontColor;
	sideMap.style.backgroundColor = config.sideMenu.color;
	sideMap.style.color = config.code.fontColor;

	importFont.href = config.code.fontImportLink;

	function sideMenuIconAnimation(){

		let icons = ['0', '1', '2', '3', '4', '5'];
    let transitionTime = '0.3s';

		for(let a = 0; a < icons.length; a++){
			document.querySelector('.icon'+icons[a]).addEventListener('mouseover', () => {
        document.querySelector('.icon'+icons[a]).style.transition = transitionTime;
			  document.querySelector('.icon'+icons[a]).style.color = config.code.fontColor;
			});
			document.querySelector('.icon'+icons[a]).addEventListener('mouseout', () => {
        document.querySelector('.icon'+icons[a]).style.transition = transitionTime;
			  document.querySelector('.icon'+icons[a]).style.color = config.sideMenu.iconsColor;
			});
		}
	}
	sideMenuIconAnimation();

}
setConfig();

const downloads = ()=>{

	const cloudBtn = document.getElementById('download');
	
	cloudBtn.addEventListener('click', () => {
	  window.open('https://meowcode.netlify.com/');
	});

}
downloads();

const gitHub = ()=>{

	const btn = document.getElementById('git');

	btn.addEventListener('click', () => {
	  window.open('https://github.com');
	});
}
gitHub();

const onOpenConsole = ()=>{
	console.log('%cpara usar o JavaScript clique no icone do olho ali em cima para usar as live expressions', 'font-size: 20px; color: orange;');
}
onOpenConsole();

// checar o tempo de inicialização da aplicação
document.getElementById('startTime').innerHTML = performance.now();
console.log(performance.now());