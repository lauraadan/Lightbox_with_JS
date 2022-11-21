const enlaces = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.big')
const cerrar = document.querySelector('.close')

enlaces.forEach(( cadaEnlace , i )=>{
	enlaces[i].addEventListener('click', ( e )=>{
		e.preventDefault()
		let ruta = cadaEnlace.querySelector('.img').src
		console.log( ruta )

		lightbox.classList.add('active')
		grande.setAttribute('src', ruta)
	})
})

cerrar.addEventListener('click', ()=>{
lightbox.classList.remove('active')

})
