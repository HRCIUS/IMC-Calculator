function calcular(){
    var peso = document.querySelector("#number").value;
    var altura = document.querySelector("#number1").value / 100;
    var nome = document.getElementById("nome").value;
    let imc = peso/(altura*altura);
    alert("Olá, " + nome);
    if(imc < 18.5)
        alert("Seu IMC é: " + imc.toFixed(1) + " Você está abaixo do peso");
    
    else if(imc >= 18.5 && imc < 25)
        alert("Seu IMC é: " + imc.toFixed(1) + " Você está no peso ideal");
    
    else if(imc >= 25.0 && imc < 30)
        alert("Seu IMC é: " + imc.toFixed(1) + " Você está um pouco acima do peso");
    
    else if(imc >= 30 && imc < 35)
        alert("Seu IMC é: " + imc.toFixed(1) + " Você está obeso(a)");
    else
        alert("Seu IMC é: " + imc.toFixed(1) + " Você está com obesidade em estado grave");
    
    
    var img = document.querySelector("#xaropinho");
    img.setAttribute('src', 'imagens/xaropinho.jfif')
    
    var audio = document.getElementById('audio')
    audio.src = "audios/xaropinho-ratinho-rapaz.mp3";
    audio.play()
}