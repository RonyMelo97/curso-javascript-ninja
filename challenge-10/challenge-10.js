(function(){
    /*
    Crie uma função chamada `isOperatorValid`, que receberá um operador por
    parâmetro.
    - Essa função será responsável por verificar se o operador passado por
    parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
    '%'.
    - Se for igual a qualquer um desses, ela deverá retornar "true".
    Caso contrário, "false".
    - O desafio é fazer o retorno sem usar "if" ou "switch".
    */
    // ?

    function isOperatorValid(operator) {
        return !!operation[operator] //diferente doque eu fiz
    }
 

    /*
    Agora vamos criar a calculadora.
    - Crie uma função chamada `calculator`, que receberá como parâmetro um
    operador;
    - Se o operador não for válido, a função deve retornar "false";
    - Se o operador for válido, retornar uma segunda função que receberá dois
    parâmetros;
    - Se algum dos parâmetros não for um número, retornar "false";
    - Senão, retornar o método do objeto "operation" criado acima, baseado no
    operador passado para a função "calculator", e passando para esse método
    os dois parâmetros da função de retorno de "calculator".
    */
    // ?

    function calculator(operator){
        if( !isOperatorValid(operator) ){ //diferente doque eu fiz
            return false
        } 
        else{
            return function (number1,number2){
                if(typeof number1 !== 'number' && typeof number2 !== 'number'){
                    return 'numero invalido'

            } else{
                return operation[operator](number1,number2)
            }
        }
    }    
}

 //calculator('+')(2,3)


    /*
    Crie uma função chamada "showOperationMessage" que recebe três parâmetros:
    - o operador, o primeiro número e o segundo número. O retorno da função
    deve ser a frase:
    'A operação [NUMBER1] [OPERATOR] [NUMBER2] =';
    Essa função mostrará a mensagem da operação que criaremos mais abaixo.
    */
    
    function showOperationMessage (operator,number1,number2){
        return 'A operação '+ number1 + ' ' + operator + ' ' + number2 + ' ='
    } 

   //console.log(showOperationMessage('+',1,2))

    /*
    Crie uma função chamada "showErrorMessage" que recebe um parâmetro: o
    operador da operação cálculo, quando a operação não for válida.
    Essa função deverá retornar a frase:
    'Operação "[OPERATOR]" não permitida!'
    */
    function showErrorMessage(operator){
        if(isOperatorValid(operator) === false){
            return 'Operação ' + operator +' não permitida!'
        }
    }

    console.log( showErrorMessage( '*' ) )

    /*
    Nossa calculadora está pronta! Agora vamos testá-la:
    PASSO 1:
    - Declare 3 variáveis: "number1" e "number2", iniciando com valor zero, e
    "operationSignal", sem valor por enquanto.
    */
    var number1 = 0;
    var number2 = 0;
    var operationSignal 

    /*
    PASSO 2:
    Atribua à variável operationSignal o operador de soma, e declare uma
    variável chamada "sum", que receba a função "calculator", passando por
    parâmetro a variável que recebeu o sinal da operação.
    */
    operationSignal = '+';

    var sum = calculator(operationSignal)
    
    
    /*
    PASSO 3:
    "sum" agora é uma função, e, se o sinal correto não foi passado para a
    função "calculator", "sum" será false. Certifique-se de que "sum" não é
    "false", e então atribua às variáveis "number1" e "number2", dois números
    que serão os operandos da operação de soma.
    Após isso, mostre no console o resultado da operação, passando dois
    parâmetros para o método "log" de "console":
    - O primeiro será a mensagem da operação (usando a função criada acima);
    - O segundo, a função de soma, passando os dois operandos.
    - Se "sum" for "false", mostrar no console a mensagem de erro. //////////////////////////////////////////////////////////
    */
   if (sum){
       number1 = 10;
       number2 = 12;
       console.log(showOperationMessage(operationSignal,number1,number2),sum(number1,number2))
   } 
   else{
       console.log( showErrorMessage(perationSignal) )
   }
    

    /*
    Repita desde o "PASSO 2" com as operações de subtração, multiplicação,
    divisão e resto. Crie variáveis com os nomes "subtraction",
    "multiplication", "division" e "mod".
    */

    operationSignal = '-';
    var subtraction = calculator(operationSignal)
    if (subtraction){
        number1 = 20;
        number2 = 12;
        console.log(showOperationMessage(operationSignal,number1,number2),subtraction(number1,number2))
    } 
    else{
        console.log( showErrorMessage(perationSignal) )
    }

    operationSignal = '*';
    var multiplication = calculator(operationSignal)
    if (multiplication){
        number1 = 7;
        number2 = 5;
        console.log(showOperationMessage(operationSignal,number1,number2),multiplication(number1,number2))
    } 
    else{
        console.log( showErrorMessage(perationSignal) )
    }

    operationSignal = '/';
    var division = calculator(operationSignal)
    if (division){
        number1 = 90;
        number2 = 6;
        console.log(showOperationMessage(operationSignal,number1,number2),division(number1,number2))
    } 
    else{
        console.log( showErrorMessage(perationSignal) )
    }
     

    operationSignal = '%';
    var mod = calculator(operationSignal)
    if (mod){
        number1 = 9;
        number2 = 8;
        console.log(showOperationMessage(operationSignal,number1,number2),mod(number1,number2))
    } 
    else{
        console.log( showErrorMessage(perationSignal) )
    }
    
    /*
    Repita o PASSO 2 novamente, mas passando um operador inválido, para ver se
    a mensagem de erro será mostrada no console.
    */
    // ?

    operationSignal = 'x';
    var lala = calculator(operationSignal)
    if (lala){
        number1 = 9;
        number2 = 8;
        console.log(showOperationMessage(operationSignal,number1,number2),lala(number1,number2))
    } 
    else{
        console.log( showErrorMessage(operationSignal) )
    }// Falto validar o erro
}())
