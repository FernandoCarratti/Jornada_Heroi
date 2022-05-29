const prompt = require("prompt-sync")();

const nome = prompt('Digite o seu nome: ');
console.log();
console.log(`Olá ${nome}, vou te fazer umas perguntas para comparar o seu dia com o meu!`);
console.log("Responda apenas com S/N");
console.log()

let perguntas = ['Você acordou às 6h da manhã hoje? [S/N]', 'Você já fez exercícios hoje? [S/N]', 
'Você já estudou outra lingua hoje? [S/N]', 'Você já trabalhou hoje? [S/N]', 'Você já fez as atividades do seu curso hoje? [S/N]']

let sim = 0;
let resposta = 's' || 'n';
    for(let index = 0; index <= 4; index++){  //variável index é a posição do array. A cada loop, adiciona +1 e passa para a proxima posição.
        console.log();
        resposta = prompt(perguntas[index]);
        if(resposta == 's'){  //se a resposta for "s" adiciona +1 a variável "sim"
            sim++
        }else if(resposta =='n'){
            sim = sim   //se a resposta for "n" não altera a variável "sim"
        }
        while(resposta != 's' && resposta != 'n'){   //enquanto a resposta não for igual a "s" e "n" faz a pergunta novamente
            console.log();
            console.log('Resposta inválida!');
            resposta = prompt(perguntas[index]);
            if(resposta == 's'){
                sim++
            }else{
                sim = sim
            }
        }
}
console.log()
if(sim == 5){
    console.log(`Parabéns ${nome}, você é um herói e seu momento de mudar de vida chegará em breve!`)
}
else if(sim == 4){
    console.log(`Legal ${nome}, você já é quase um heroi!`)
}
else if(sim == 3){
    console.log(`${nome}, você está no caminho certo, mas precisa de um pouco mais de empenho para ter melhores resultados!`)
}
else if(sim <= 2 && sim != 0){
    console.log(`${nome}... Assim fica difícil alcançar os resultados né! Se esforça um pouco mais!`)
}
else{
    console.log(`${nome}... ${nome}... Se não começar a fazer alguma coisa por você agora mesmo, nunca sairá do lugar!`)
}
