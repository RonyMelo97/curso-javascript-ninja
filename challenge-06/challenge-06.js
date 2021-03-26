/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

var championship = 'Paulista';
console.log(championship)
//Paulista

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

var championship = 'Paulista';
//console.log(championship)


var teams = ['Corinthians','São Paulo','Santos','Palmeiras','Bota Fogo']

function showTeamPosition(posicao){
    return posicao < 6 ? 'O time que está em ' + posicao +  'º lugar é o ' + teams[posicao -1] +  '.' : 'Não temos a informação do time que está nessa posição.'
}

//
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1)
//"O time que está em 1º lugar é o Corinthians."

showTeamPosition(2)
//"O time que está em 2º lugar é o São Paulo."

showTeamPosition(3)
//"O time que está em 3º lugar é o Santos."

showTeamPosition(4)
//"O time que está em 4º lugar é o Palmeiras."

showTeamPosition(6)
//"Não temos a informação do time que está nessa posição."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var lopping = 20;
while(lopping <= 30){
    console.log( lopping++ )
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

var cores = {
    red:'#B22222',
    blue:'#0000FF',
    green:'#008000',
    yellow:'#FFFF00',
    orange:'#FFA500'
}

switch(cor){
            case 'red': // se cor igual a cores
                console.log( 'O hexadecimal para a cor ' + cor + ' é ' + cores[cor] + '.' )
                break;            
            case 'blue':
                console.log( 'O hexadecimal para a cor ' + cor + ' é ' + cores[cor] + '.' )
                break;
            case 'yellow':
                console.log( 'O hexadecimal para a cor ' + cor + ' é ' + cores[cor] + '.' )
                break;
            case 'green':
                console.log( 'O hexadecimal para a cor ' + cor + ' é ' + cores[cor] + '.' )
                break;
            case 'orange':
                console.log( 'O hexadecimal para a cor ' + cor + ' é ' + cores[cor] + '.' )
                break;
                default: 
                console.log ( 'Não temos o equivalente hexadecimal para ' + cor)           
    }
}
convertToHex('blue')

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red')
convertToHex('blue')
convertToHex('green')
convertToHex('orange')
convertToHex('yellow')
convertToHex('pink')
convertToHex('white')
convertToHex('black')
/*
O hexadecimal para a cor red é #B22222.
O hexadecimal para a cor blue é #0000FF.
O hexadecimal para a cor green é #008000.
O hexadecimal para a cor orange é #FFA500.
O hexadecimal para a cor yellow é #FFFF00.
Não temos o equivalente hexadecimal para pink
Não temos o equivalente hexadecimal para white
Não temos o equivalente hexadecimal para black
*/

