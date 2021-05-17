(function(){
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */
  
    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
  
    var person = {
        'name' : 'Rony',
        'lastname' : 'Melo',
        'agr' : 23,
    }
    person.toString()
    
  
    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    console.log( 'Propriedades de "person": ' + Object.keys(person) ); 
  
    /*
    Crie um array vazio chamado `books`.
    */
  
    var books = [];
  
    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */

        books.push({name: 'Homem Aranha','pages': 370})
        books.push({name: 'Pantera negra','pages': 490})
        books.push({name: 'Homem Formiga','pages': 420})
  
    /*
    Mostre no console todos os livros.
    */
    var text = '\nLista de livros :';
    for(var prop in books){
      text = text + books[prop].name + ', '
    }
    console.log(text)

    /*
    Remova o último livro, e mostre-o no console.
    */
    var removed = books.pop()
    console.log( '\nLivro que está sendo removido:', removed  );
  
    
    /*
    Mostre no console os livros restantes.
    */

    console.log( '\nAgora sobraram somente os livros:', books );
  
    /*
    Converta os objetos que ficaram em `books` para strings.
    */

   var bookString = JSON.stringify(books)
    
    /*
    Mostre os livros nesse formato no console:
    */

    console.log( '\nLivros em formato string:', bookString) ;
  
    /*
    Converta os livros novamente para objeto.
    */
    
    bookObj = JSON.parse(bookString)
    console.log( '\nAgora os livros são objetos novamente:',bookObj);
  
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    
    for(var i = 0; i < books.length; i++){
        for ( var prop in books[i] ){
            console.log(prop + ': ' + books[i][prop])
        }
    }
    console.log(Object.keys( books ))

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    var myName = ['R','o','n','y']
    

  
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log( '\nMeu nome é:',);
    console.log( myName.join('') )
  
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // ?
    console.log( '\nMeu nome invertido é:' );
    console.log( myName.reverse().join(''))
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log( '\nAgora em ordem alfabética:' );
    console.log(myName.sort())
    // ?
  }())
  
