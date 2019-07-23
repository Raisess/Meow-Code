/*
* @author Danilo Santana
*	Um editor de código para ajudar no ensino da programação
*/
// Meow Code

// saida do mapa lateral
const sideMapOutput = ()=>{

	const sideMap = document.getElementById('sideMap');
	const input = document.getElementById('input');

	setInterval(() => {
	  sideMap.value = String(input.value);
	}, 1);

}
sideMapOutput();