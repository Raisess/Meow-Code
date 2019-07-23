/*
* @author Danilo Santana
*	Um editor de código para ajudar no ensino da programação
*/
// Meow Code

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