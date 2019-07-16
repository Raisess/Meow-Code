const fs = require('fs');

function exportFile(){

	fs.writeFile("./hello.txt", "Hello World!", (error)=>{

		if(error){
			throw error;
		}

		console.log('criou arquivo');

	});
}