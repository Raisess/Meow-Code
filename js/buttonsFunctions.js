/*
* @author Danilo Santana
*	Um editor de código para ajudar no ensino da programação
*/
// Meow Code

// opções da barra lateral
const sideOptions = async ()=>{

	// configurações
	const configs = async ()=>{

		const configWindow = await document.querySelector('#configWindow');
		const configBtn = await document.querySelector('#openConfig');

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

const openHistoryWindow = ()=>{

	let historyBtn = document.getElementById('history');
	let historyWindow = document.getElementById('historyWindow');

	function open(){
		historyBtn.addEventListener('click', () => {
		  historyWindow.style.display = '';
		  close();
		});
	}
	function close(){
		historyBtn.addEventListener('click', () => {
		  historyWindow.style.display = 'none';
		  open();
		});
	}
	open();
}
openHistoryWindow();

// janela para salvar arquivo
const setArchiveName = async ()=>{

	const exportFileBtn = await document.getElementById('exportFile');
	const archiveWindow = await document.getElementById('archiveWindow');

	exportFileBtn.addEventListener('click', () => {
	  archiveWindow.style.display = '';
	});
}
setArchiveName();

// janela para abrir arquivo
const openImportArchive = async ()=>{

	const importWindow = await document.getElementById('importWindow');
	const importFileBtn = await document.getElementById('importFile');

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

// downloads de temas
const downloads = async ()=>{

	const cloudBtn = await document.getElementById('download');
	
	cloudBtn.addEventListener('click', () => {
	  window.open('https://meowcode.netlify.com/');
	});

}
downloads();

// botão para o github
const gitHub = async ()=>{

	const btn = await document.getElementById('git');

	btn.addEventListener('click', () => {
	  window.open('https://github.com');
	});
}
gitHub();