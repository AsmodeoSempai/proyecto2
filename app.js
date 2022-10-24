    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const horario = document.getElementById('time');
    const agregarboton = document.getElementById('agregarboton');
    const cajaApartado =document.getElementById('cajaApartado');
    const arregloCanchasApartada = [];
    
    

agregarboton.addEventListener("click",apartado);
cajaApartado.addEventListener('click', eliminarOeditar);
document.addEventListener('DOMContentLoaded', cargarDatosGuardados);


function apartado (event){
    event.preventDefault();

    if( (player1.value === "") | (player2.value === "") | (horario.value === "")){
        alert('faltan datos, llenar todos los campos');
        return;
    }
    let objetoApartado ={
        player1:player1.value,
        player2:player2.value,
        horario:horario.value,
    }

    arregloCanchasApartada.push(objetoApartado)

    player1.value = '';
    player2.value = '';
    horario.value = '';

    

    if(localStorage.getItem('apartado') ==null){
        
        localStorage.setItem('apartado', JSON.stringify(arregloCanchasApartada));
         
    }else{

        let datos = JSON.parse(localStorage.getItem('apartado'));
        datos.push(objetoApartado);
        localStorage.setItem('apartado', JSON.stringify(datos));
    }

    pintar()

}



function pintar (){

    arregloCanchasApartada.innerHTML=''

    arregloCanchasApartada.forEach((element) =>{
        let divcajaForm2 = document.createElement('div');
        divcajaForm2.className = 'cajaForm2';
        let formcajaNombre3 = document.createElement('form');
        formcajaNombre3.className = 'cajaNombre3';
        let divplayer1 = document.createElement('div');
        divplayer1.className = 'Player1';
        let divplayer2 = document.createElement('div');
        divplayer2.className = 'Player1';
        let divtime1 = document.createElement('div');
        divtime1.className = 'time1';
        let divbtnedit = document.createElement('div');
        divbtnedit.className = 'cajabtnedit';
        let divbtndelete = document.createElement('div');
        divbtndelete.className = 'cajabtndelte';
        let spanPlayer1 = document.createElement('span');
        let spanPlayer2 = document.createElement('span');
        let spanTime = document.createElement('span');
        let btnedit = document.createElement('button')
        btnedit.className = 'boton';
        let btndelete = document.createElement('button')
        btndelete.className = 'boton';
        let Player1a = document.createTextNode(element.player1);
        let Player2a = document.createTextNode(element.player2);
        let btn = document.createTextNode('edit');
        let btnd = document.createTextNode('delete');
        let Time1 = document.createTextNode(element.horario);

        divcajaForm2.appendChild(formcajaNombre3); //caja form
        formcajaNombre3.appendChild(divplayer1); //  div player 1 dentro del form
        divplayer1.appendChild(spanPlayer1); // espan dentro del div player 1
        spanPlayer1.appendChild(Player1a); // texto del player 1 dentro del span
        formcajaNombre3.appendChild(divplayer2); // div player 2 dentro del form
        divplayer2.appendChild(spanPlayer2); // span dentro del div player 2
        spanPlayer2.appendChild(Player2a); // texto del player 2 dentro del span
        formcajaNombre3.appendChild(divtime1); // div time dentro del form
        divtime1.appendChild(spanTime); // span dentro del div time
        spanTime.appendChild(Time1); // texto  del time dentro del span
        formcajaNombre3.appendChild(divbtnedit); // div edit dentro del form
        divbtnedit.appendChild(btnedit); //boton dentro del div
        btnedit.appendChild(btn); //texto edit dentro del boton
        formcajaNombre3.appendChild(divbtndelete);
        divbtndelete.appendChild(btndelete);
        btndelete.appendChild(btnd);


        cajaApartado.appendChild(divcajaForm2); //toda la caja en el apartado
    })

}


function eliminarOeditar(e){
    
    if (e.target.innerHTML === 'edit'){
        console.log(e.path[2].childNodes[0].childNodes[0].innerHTML)




    } else if (e.target.innerHTML === 'delete'){
        let datos = e.path[2].childNodes[0].childNodes[0].innerHTML
        let index = arregloCanchasApartada.findIndex(element => element.player1 === datos);
        arregloCanchasApartada.splice(index, 1);
        console.log(index) 
      
    }
}



function cargarDatosGuardados(e){
    e.preventDefault();

    if (localStorage.getItem('apartado') !=null){
        let datosGuardados = JSON.parse(localStorage.getItem('apartado'));
                 
        datosGuardados.forEach((element) =>{
            let divcajaForm2 = document.createElement('div');
            divcajaForm2.className = 'cajaForm2';
            let formcajaNombre3 = document.createElement('form');
            formcajaNombre3.className = 'cajaNombre3';
            let divplayer1 = document.createElement('div');
            divplayer1.className = 'Player1';
            let divplayer2 = document.createElement('div');
            divplayer2.className = 'Player1';
            let divtime1 = document.createElement('div');
            divtime1.className = 'time1';
            let divbtnedit = document.createElement('div');
            divbtnedit.className = 'cajabtnedit';
            let divbtndelete = document.createElement('div');
            divbtndelete.className = 'cajabtndelte';
            let spanPlayer1 = document.createElement('span');
            let spanPlayer2 = document.createElement('span');
            let spanTime = document.createElement('span');
            let btnedit = document.createElement('button')
            btnedit.className = 'boton';
            let btndelete = document.createElement('button')
            btndelete.className = 'boton';
            let Player1a = document.createTextNode(element.player1);
            let Player2a = document.createTextNode(element.player2);
            let btn = document.createTextNode('edit');
            let btnd = document.createTextNode('delete');
            let Time1 = document.createTextNode(element.horario);
    
            divcajaForm2.appendChild(formcajaNombre3); //caja form
            formcajaNombre3.appendChild(divplayer1); //  div player 1 dentro del form
            divplayer1.appendChild(spanPlayer1); // espan dentro del div player 1
            spanPlayer1.appendChild(Player1a); // texto del player 1 dentro del span
            formcajaNombre3.appendChild(divplayer2); // div player 2 dentro del form
            divplayer2.appendChild(spanPlayer2); // span dentro del div player 2
            spanPlayer2.appendChild(Player2a); // texto del player 2 dentro del span
            formcajaNombre3.appendChild(divtime1); // div time dentro del form
            divtime1.appendChild(spanTime); // span dentro del div time
            spanTime.appendChild(Time1); // texto  del time dentro del span
            formcajaNombre3.appendChild(divbtnedit); // div edit dentro del form
            divbtnedit.appendChild(btnedit); //boton dentro del div
            btnedit.appendChild(btn); //texto edit dentro del boton
            formcajaNombre3.appendChild(divbtndelete);
            divbtndelete.appendChild(btndelete);
            btndelete.appendChild(btnd);
    
    
            cajaApartado.appendChild(divcajaForm2); //toda la caja en el apartado
     
        });
        

    
    }
}




