//  Cuando el usuario haga clic en la zona de ".a", se active el lightbox,
//se cargue la imagen, se redimensione la imagen y luego se pueda cerrar la imagen (1)
	//  .lightbox 'activo'
	// .img me cambiará los atributos y me cambiará esa imagen a través de src
	// .grande javascript me colocará en grande esa imagen .img que a buscado a través de la ruta src

// Cuando hacemos clic en .cerrar 
	// .lightbox cierre 'activo'


// Tengo una constante llamada enlaces y que cuando el usuario haga clic, seleccione TODO .ul y .a y haga algo (1)
// Seleccionar solo .lightbox
// Seleccionmos solo .grande
// Seleccionamos solo .cerrar

const enlaces = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.grande')
const cerrar = document.querySelector('.cerrar')

// forEach (a cada uno). Cada uno que sea .ul o cada uno que tenga enlaces, haga algo.
// i significa autosuma, de uno en uno.
// enlaces[i].add todo lo que tenga que ver con esos eventos con listado, ->
// hasta que no consiga detectar que el usuario utiliza la accion de clic, no haga nada
// Quiero que hagas algo a (e). Quiero que si la imagen es horizontal y mide X, conserve esas medidas.
// let - indicamos la ruta de cada enlace y con querySelector encontrará la ruta de todas las imágenes.
// lightbox.classList.add('activo') coja todas las clases del listado de esa clase lightbox. Todo lo que hay dentro lo pueda unir, lo convierta en activo.
// grande.setAttibute('src', ruta). Cambio los atributos. En el css tendré unas medidas y simplemente indicamos que las cambie.

enlaces.forEach(( cadaEnlace , i )=>{
	enlaces[i].addEventListener('click', ( e )=>{
		e.preventDefault()
		let ruta = cadaEnlace.querySelector('.img').src
		console.log( ruta )

		lightbox.classList.add('activo')
		grande.setAttribute('src', ruta)
	})
})

// En la constante cerrar, quiero que hagas un addEventListenner a través de un clic, no quiero contenido dentro.
// Cambiamos añadir por remover. 

cerrar.addEventListener('click', ()=>{
lightbox.classList.remove('activo')

})
