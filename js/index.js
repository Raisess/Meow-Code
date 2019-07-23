/*
* @author Danilo Santana
*	Um editor de código para ajudar no ensino da programação
*/
// Meow Code

// versão do código
const version = '0.2.3';
// aplicar a versão no titulo
document.getElementById('title').innerHTML += `${version} created by Danilo Santana`;


// SISTEMA DE ARQUIVOS !!(importante)!!
// #######################################################################################
let openArchives = []; // espaço na memória para arquivos abertos
let n; // nome do arquivo na memória
let his = [];
const fileSystem = async ()=>{
	
	let g = []; // espaço na memória para o dom dos arquivos abertos
	let x = -1;
	let o = 0;


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
	  		saveOpenArchivesNames(n);
	  		fullHistory();
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
			//console.log('projeto salvo');
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

		//console.log('arquivo importado: '+name.value);

		document.getElementById('importWindow').style.display = 'none';
		document.getElementById('event').innerHTML = 'arquivo importado: '+name.value;
		reset();
		n = name.value;
		name.value = '';

		//console.log(n);

		return n;

	}

	// settar o nome do arquivo como valor do input de abertura de arquivos
	function setArchiveNameValue(v){
		document.getElementById('archiveNameImport').value = v;
	}

	// salvar os arquivos abertos no historico
	const saveOpenArchivesNames = (a)=>{

		const openedArchives = document.getElementById('openedArchives');

		// settar a data e hora no historico
		const time = new Date();
		let day = (time.getDay())+21;
		let month = (time.getMonth())+1;
		let year = (time.getYear())-100;
		let hour = time.getHours();
		let min = time.getMinutes();

		let color = '#fff';

		if(day < 10) day = '0'+(time.getDay()+21);
		if(month < 10) month = '0'+(time.getMonth()+1);
		if(year < 10) year = '0'+(time.getYear()-100);
		if(min < 10) min = '0'+time.getMinutes();
		if(hour < 10) hour = '0'+time.getHours();

		if(hour >= 22) color = '#f21f07';
		if(hour >= 18 && hour < 22 ) color = '#4e0ddb';
		if(hour >= 13 && hour < 18) color = '#26f207';
		if(hour >= 10 && hour < 13) color = '#fc5000';
		if(hour >= 6 && hour < 10) color = '#09ebc1';

		openArchives.push(a);
		// gerar arquivo no historico
		for(o >= 0; o < openArchives.length; o++){
			openedArchives.innerHTML += `
				<div class="archive-box" id="archive${o}">
					<p id="arc${o}">${openArchives[o]}</p>
				</div>
				<hr id="line${o}" class="line" />
			`;
			his.push(`<p id="a${o}" style="color: ${color};">${day}/${month}/${year}, ${hour}:${min} |<b>${openArchives[o]}</b></p>`);
			console.log(his);
			// escrever no arquivo history.txt
			fs.writeFile('./history.txt', his, (error)=>{
				if(error) throw error;
			});
		}

		x+=1;
		g.push(String(x));
		// settar nome do arquivo como input value
		for(let i = 0; i < openArchives.length; i++){
			document.querySelector('#arc'+g[i]).addEventListener('click', () => {
		  	setArchiveNameValue(openArchives[i]);
			});
		}

		// limpar historico
		document.getElementById('clear').addEventListener('click', () => {
		  
		  document.getElementById('openedArchives').innerHTML = '<p style="text-align: center;">historico limpo</p>';

		  setTimeout(() => {
		    document.getElementById('openedArchives').innerHTML = '';
		  }, 1000);

		  openArchives = [];
		  //console.log(openArchives.toString());
		  x = -1;
		  o = 0;
		});

		//console.log(openArchives.toString());

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

	  			//console.log('arquivo salvo:', n);
	  		});
	  		break;
	  	default:
	  		null;
	  		break;
		}
	});

}
fileSystem();
async function fullHistory(){

	fs.readFile('./history.txt', (error, content)=>{
		if(error){
			throw error;
		}

		document.getElementById('archivesPlace').innerHTML = content;
		his.push(content);
		console.log(his);
	});

}

// #######################################################################################



const onOpenConsole = ()=>{
	console.log('%cpara usar o JavaScript clique no icone do olho ali em cima para usar as live expressions', 'font-size: 20px; color: orange;');
}
onOpenConsole();

// checar o tempo de inicialização da aplicação
document.getElementById('startTime').innerHTML = performance.now();
console.log(performance.now());

fullHistory();