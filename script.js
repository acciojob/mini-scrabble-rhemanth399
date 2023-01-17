let input=document.getElementById('evaluatedText')
let letterCount=document.getElementById('letterCount')
input.addEventListener('input',hemanth())
function hemanth()
	{
		input.innerHTML=input.value
		letterCount.innerHTML=input.length
	}