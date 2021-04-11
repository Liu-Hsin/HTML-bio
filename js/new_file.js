var aBut = document.getElementsByTagName('button')
var aHdr = document.getElementsByTagName('header')
			
for (var i=0;i<aBut.length;i++){
	aBut[i].onmouseover = function	(){
		for (var i=0;i<aBut.length;i++){
			aBut[i].className =''
			aBut[i].index = i 
			aHdr[i].style.display = 'none'
		}
		this.className = 'on'
		aHdr[this.index].style.display = 'block'
	}
	aBut[i].onmouseout = function(){
		this.className = ''
	}
}