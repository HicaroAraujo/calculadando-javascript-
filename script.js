const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const resultado = document.getElementById('resultado')

const ap1 = document.getElementById('ap1')
const ap2 = document.getElementById('ap2')
const As = document.getElementById('as')
const resultado2 = document.getElementById('resultado2')

const bt1 = document.getElementById('bt1')
const bt2 = document.getElementeById('bt2')
const bt3 = document.getElementeById('bt3')
const bt4 = document.getElementeById('bt4')
const bt5 = document.getElementeById('bt5')

function somar() {
    if (numero1.value == '' || numero2.value == '') {
        alert('É obrigatorio preencher os dois campos')
        numero1.focus()
    }
    if (isNaN(numero1.value)) {
        alert('O número 1 está inválido!')
        numero1.focus()
      
    

    } if (isNaN(numero2.value)) {
        alert('O número 2 está inválido!')
        numero2.focus()   
        
    } 

    else {
        let soma = Number(numero1.value) + Number(numero2.value)
        resultado.innerText =  soma
    }
}
 

function subtrair() {
    if (numero1.value == '' || numero2.value == '') {
        alert('É obrigatorio preencher os dois campos')
        numero1.focus()
    }
    if (isNaN(numero1.value) ) {
        alert('O número 1 está inválido!')
        numero1.focus()


    } if (isNaN(numero2.value)) {
        alert('O número 2 está inválido!')
        numero2.focus()   
    } 
    
    else {
        let soma = Number(numero1.value) - Number(numero2.value)

        resultado.innerText = soma
    }
}

function multiplicar() {
    if (numero1.value == '' || numero2.value == '') {
        alert('É obrigatorio preencher os dois campos')
        numero1.focus()
    }
    if (isNaN(numero1.value)) {
        alert('O número 1 está inválido!')
        numero1.focus()
    } if (isNaN(numero2.value)) {
        alert('O número 2 está inválido!')
        numero2.focus()   
    } 
    else {
        let soma = Number(numero1.value) * Number(numero2.value)
        resultado.innerText =  soma
    }

}

function dividir() {
    if (numero1.value == '' || numero2.value == '') {
        alert('É obrigatorio preencher os dois campos')
        numero1.focus()
    }
    if (isNaN(numero1.value)) {
        alert('O número 1 está inválido!')
        numero1.focus()
    } if (isNaN(numero2.value)) {
        alert('O número 2 está inválido!')
        numero2.focus()   
    } 
    if (numero2.value == 0) {
        alert(` ${numero1.value} dividido por 0, não existe!`)
        numero2.focus()
    } else {
        let divisao = Number(numero1.value) / Number(numero2.value)
        resultado.innerText = divisao
    }
}

function limpar() {
    resultado.innerText = ""
    numero1.value = ""
    numero2.value = ""

}





// >>>>>>>>>>>>>>>>>>>>>>>>>>



function verficarP1() {
    if (ap1.value < 0 || ap1.value > 1.5) {
        alert('Nota da ap1 invalida! (nota P1 é de 0 até 1.5)')
        ap1.value = ''
        ap1.focus()
    }
    if(isNaN(ap1.value)){
        alert("Nota da ap1 invalida. Digite um número válido!")
        ap1.value = ''
        ap1.focus()
        
    }

}
function verficarP2(){
    if (ap2.value < 0 || ap2.value > 2.5) {
         alert('Nota da ap2 invalida! (nota P2 é de 0 até 2.5)')
        ap2.value = ''
        ap2.focus() 
    }
    if(isNaN(ap2.value)){
        alert("Nota da ap2 invalida. Digite um número válido!")
        ap2.value = ''
        ap2.focus() 

    }
    
    
}

function verficarAs(){
    if (As.value < 0 || As.value > 6) {
         alert('Nota da As invalida! (nota da As é de 0 até 6)')
        As.value = ''
        As.focus() 
    } if(isNaN(As.value)){
        alert(" Nota da As invalida. Digite um número válido!")
        As.value = ''
        As.focus() 
    }
      
}

function verficar(){  
     if (ap1.value == '' || ap2.value == '' || As.value == '') {
        alert('É obrigatorio preencher todos os campos')
         ap1.focus()
    }
 }

function verificar2(){
   let ap1 = document.getElementById("ap1").value;
   let ap2 = document.getElementById("ap2").value;
     let As = document.getElementById("as").value;
   

     let somando = Number(ap1) + Number(ap2) + Number(As);
      if (somando >= 6) { resultado2.innerText = `Nota: ${somando} Você foi Aprovado. Parabéns!!`}


      if (somando < 6) { resultado2.innerText = `Nota: ${somando}. A famosa AF te espera!`}
      if (ap1 == '' || ap2 == '' || As == '') {
         resultado2.innerText = `você precisa esclarecer todas as Notas!!`
         ap1.focus()
    }
    
     }

function limpar_nota() {
     
        ap1.value = ""
        ap2.value = ""
        As.value = ""
        resultado2.innerText = ""
    
    }



      
         
    

 


