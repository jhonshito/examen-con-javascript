
// console.log('siiiiuuu')

const boton = document.querySelector('#boton');
const boton_dos = document.querySelector('#boton_dos');
const preguntas = document.querySelector('#preguntas');
const cargando = document.querySelector('#loading');
// console.log(boton);

document.addEventListener('DOMContentLoaded', () => {
    
});

boton_dos.addEventListener('click', (a) => {
    a.preventDefault()
    // console.log(inputs[0].value);

  
    // for(let i = 0; i < document.form.pregunta.length; i++){
        if(document.form.pregunta[2].checked){
        //    alert('siiiiuu');
        //    incorrecto = 'si';

            document.querySelector('#alerta_acertada').classList.remove('d-none');
            preguntas.classList.add('d-none');
        }

        if(document.form.pregunta[0].checked){
            // alert('triste')

            document.querySelector('#alerta_fallida').classList.remove('d-none');
            preguntas.classList.add('d-none');
        }

        if(document.form.pregunta[1].checked){
            // alert('triste')

            document.querySelector('#alerta_fallida').classList.remove('d-none');
            preguntas.classList.add('d-none');
        }

        if(document.form.pregunta[3].checked){
            // alert('triste')

            document.querySelector('#alerta_fallida').classList.remove('d-none');
            preguntas.classList.add('d-none');
        }

        if(document.form.pregunta[4].checked){
            // alert('triste')

            document.querySelector('#alerta_fallida').classList.remove('d-none');
            preguntas.classList.add('d-none');
        }
    // }

})

boton.addEventListener('click', (e) => {
    e.preventDefault()

    presentacion.classList.add('d-none');
    preguntas.classList.remove('d-none');
    // cargando.classList.remove('d-none');

});
