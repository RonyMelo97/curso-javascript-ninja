(function(){
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    console.log( 'O array em formato de string é:' );
    var arr = [1,2,3,4,5,6]
    console.log(arr.toString())

    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    
    var sul = ['Rio Grande do Sul', 'Santa Catarina', 'Paraná']
    var sudeste = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro','Espírito Santo']

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    var Brasil = []
    console.log( '\nAlguns Estados do Brasil:' );
    
    var Brasil = sul.concat(sudeste)
    console.log(Brasil)

    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    console.log( '\nMais estados adicionados:' );
    Brasil.unshift('Acre', 'Amapá', 'Amazonas')
    console.log(Brasil)

    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log( '\nEstado removido:' );
    console.log(Brasil.shift())
    //Acre

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    newSul = Brasil.slice(5,9)

    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log( '\nEstados do Sul do Brasil:' );
    console.log(newSul)
    //[ 'Rio Grande do Sul', 'Santa Catarina', 'Paraná' ]

    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log( '\nAlguns Estados do Brasil:' );
    console.log(Brasil)
    [/*
      'Amapá',
      'Amazonas',
      'Rio Grande do Sul',
      'Santa Catarina',
      'Paraná',
      'São Paulo',
      'Minas Gerais',
      'Rio de Janeiro',
      'Espírito Santo'
    */]
    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    var nordeste = ['Maranhão', 'Maranhão', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia']

    /*
    Mostre no console os estados do nordeste.
    */
    console.log( '\nEstados do Nordeste:' );
    console.log(nordeste)
    /*
    [
      'Maranhão',
      'Ceará',
      'Rio Grande do Norte',
      'Paraíba',
      'Pernambuco',
      'Alagoas',
      'Sergipe',
      'Bahia'
    ]
    */
    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
    var newSudeste = Brasil.splice(5,10)

    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    nordeste.forEach(function(estado){
    Brasil.push(estado)
    })
    /*
    
    */

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log( '\nEstados em newSudeste:' );
    console.log(newSudeste)
    //[ 'São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Espírito Santo' ]
  
    /*
    Mostre no console os estados do `brasil`.
    */
    console.log( '\nAlguns estados do Brasil:' );
    console.log(Brasil)
    [
      'Amapá',
      'Amazonas',
      'Rio Grande do Sul',
      'Santa Catarina',
      'Paraná',
      'Maranhão',
      'Ceará',
      'Rio Grande do Norte',
      'Paraíba',
      'Pernambuco',
      'Alagoas',
      'Sergipe',
      'Bahia'
    ]

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
  
    var newBrasil = []
    Brasil.forEach(function(estado, index){
        newBrasil.push( {'id':index , 'estado':estado} ) 
    })

    /*
    Mostre o array `newBrasil` no console
    */
    console.log( '\nnewBrasil:' );
    console.log(newBrasil)
    /*
    [
      { id: 0, estado: 'Amapá' },
      { id: 1, estado: 'Amazonas' },
      { id: 2, estado: 'Rio Grande do Sul' },
      { id: 3, estado: 'Santa Catarina' },
      { id: 4, estado: 'Paraná' },
      { id: 5, estado: 'Maranhão' },
      { id: 6, estado: 'Ceará' },
      { id: 7, estado: 'Rio Grande do Norte' },
      { id: 8, estado: 'Paraíba' },
      { id: 9, estado: 'Pernambuco' },
      { id: 10, estado: 'Alagoas' },
      { id: 11, estado: 'Sergipe' },
      { id: 12, estado: 'Bahia' }
    ]
*/
    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
    
    var greaterThanSeven = Brasil.every(function(estado){
    return estado.length > 7
});

    var itsBigger = function(greaterThanSeven) {
        if(greaterThanSeven){
            return 'Sim, todos os estados tem mais de 7 letras!'
        } else {
            return 'Nem todos os estados tem mais de 7 letras!'
        }
    }
    console.log(itsBigger(greaterThanSeven))

    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    console.log( '\nCeará está incluído em `brasil`?' );
    // ?

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    // ?

    /*
    Mostre no console o array criado acima:
    */
    console.log( '\nnewBrasil agora com mais informações:' );
    // ?

    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    // ?

    /*
    Mostre o array filtrado acima no console.
    */
    console.log( '\nEstados com ID par:' );
    // ?
  });
