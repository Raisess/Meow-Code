/*
* @author Danilo Santana
*	Um editor de código para ajudar no ensino da programação
*/
// Meow Code

// ativar as configurações de tema
const setConfig = async ()=>{

	const body = await document.getElementById('body');
	let input = await document.getElementById('input');
	const sideMenu = await document.getElementById('sideMenu');
	let configWindow = await document.getElementById('configWindow');
	const configContainer = await document.getElementById('configContainer');
	let projectWindow = await document.getElementById('historyWindow');
	const windowExport = await document.getElementById('archiveWindow');
	let windowExportLabel = await document.getElementById('archiveNameExport');
	const windowImport = await document.getElementById('importWindow');
	let windowImportLabel = await document.getElementById('archiveNameImport');
	let sideMap = await document.getElementById('sideMap');
	const historyBox = document.getElementById('archivesPlace');

	let importFont = await document.getElementById('newFont');

	const currentTheme = await document.getElementById('currentTheme');

	currentTheme.innerHTML = themeName;

	body.style.backgroundColor = config.background.color;
	body.style.color = config.background.fontColor;
	input.style.backgroundColor = config.background.color;
	input.style.color = config.code.fontColor;
	input.style.fontSize = config.code.fontSize+'px';
	input.style.fontFamily = config.code.fontFamily;
	sideMenu.style.backgroundColor = config.sideMenu.color;
	sideMenu.style.color = config.sideMenu.iconsColor;
	projectWindow.style.backgroundColor = config.libsWindow.color;
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
	historyBox.style.backgroundColor = config.history.color;
	document.getElementById('clear').style.backgroundColor = config.background.fontColor;
	document.getElementById('clear').style.color = config.background.color;

	importFont.href = config.code.fontImportLink;

	let transitionTime = '0.3s';

	function clearBtnAnimation(){
		document.getElementById('clear').addEventListener('mouseover', () => {
			document.getElementById('clear').style.transition = transitionTime;
	  	document.getElementById('clear').style.backgroundColor = 'red';
	  	document.getElementById('clear').style.color = '#fff';
		});
		document.getElementById('clear').addEventListener('mouseout', () => {
			document.getElementById('clear').style.transition = transitionTime;
	  	document.getElementById('clear').style.backgroundColor = config.background.fontColor;
	  	document.getElementById('clear').style.color = config.background.color;
		});
	}
	clearBtnAnimation();

	function sideMenuIconAnimation(){

		// quantidade de icones na sidebar
		let icons = ['0', '1', '2', '3', '4', '5'];

		for(let a = 0; a < icons.length; a++){
			document.querySelector('.icon'+icons[a]).addEventListener('mouseover', () => {
        document.querySelector('.icon'+icons[a]).style.transition = transitionTime;
			  document.querySelector('.icon'+icons[a]).style.color = config.code.fontColor;
			});
			document.querySelector('.icon'+icons[a]).addEventListener('mouseout', () => {
        document.querySelector('.icon'+icons[a]).style.transition = transitionTime;
			  document.querySelector('.icon'+icons[a]).style.color = config.sideMenu.iconsColor;
			});
			//console.log(i[a]);
		}
	}
	sideMenuIconAnimation();

}
setConfig();