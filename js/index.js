// variavel que vai armazenar o setInterval do scroll veritical
var intervalo;


  // página totalmente carregada (DOM, imagens etc.)
  // window.onload seria equivalente ao main do java ou do C++
window.onload = function () { 
    // carrega a pagina menu
    $("menu").load("menu.html");
    // carrega a pgina home
    $("#conteudo").load("home.html");
    // carrega a pagina rodape
    $("footer").load("rodape.html");
    // coloca a ação 'click' nos links dentro da classe menu depois de ser carregada no corpo html
    $("body").on("click", ".menu a", function(e){
      // entra nessa função quando clicar no link dentro da classe menu
      // pega o atributo href
      var pagina = $(this).attr("href"); 
      // pega o atributo title
      var title = $(this).attr("title"); 
      // chama a função para carregar a pg e trocar o title
      carregarPagina(pagina, title);
      // o 'e' se refere ao elemento que está sendo referenciado no momento do 'click'
      // o metodo 'preventDefault()' anula o efeito do link ou do elemento que estiver sendo usado
      e.preventDefault();

    });
    // chama a função para inserir o carroseul nos itens
    efeitoCarroseul();
} 

/**
 * função para para carregar a pagina e colocar o titulo na pagina de destino
 * @param {*} pagina 
 * @param {*} title 
 */
function carregarPagina(pagina, title){
  // verifica se tem ancora, se não tiver não faz nada
  if( typeof pagina === "undefined" || pagina == "#") return;
  // carrega a nova pagina e coloca na div #conteudo
  $("#conteudo").load(pagina);
  // Se tiver conteudo na variavel 'title', colocar no title da página
  if( typeof title != "undefined"){
    document.title = title;
  }else{
    // se não tiver um title
    // pegar o nome da pagina, tirar a estensão    
    // split retona um array, por isso usamos o [0], para pegar a string que esta lá dentro
    title = pagina.split('.', 1)[0];
    // aqui deixamos a primeira letra maiuscula
    title = title.substring(0,1).toUpperCase().concat(title.substring(1));
    // colocamos no title da pagina
    document.title = title;
  }
}


/**
 * Função associar aos elementos o evento 'mouseover' e 'mouseout' para disparar a função do efeito de scroll vertical
 */
function efeitoCarroseul(){  
  // quando passar o mouse emcima da seta
  $("#conteudo").on("mouseover", ".handle", function(){
    // a variavel $this guarda o elemento que sofreu o evento 'mouseover'
    var $this = $(this);
    // testa se o elemento tem a classe 'handlePrev' que da o sentiro do scroll vertical
    if($($this).hasClass("handlePrev")){
      console.log('elemento esquerdo ', $($this) );
      // se tiver pega o proximo elemento no DOM
      var el = $($this).next();   
      // chama a função scrollEsqueda e passa o proximo elemento como parametro
      scrollEsquerda(el);
    }else{
      console.log('elemento direito ', $($this) );
      // se não, pega o elemento anterior
      var el =$($this).prev();  
      // chama a função scroolDireta e passa o elemento como parametro
      scrollDireita(el);
    }
  }).on("mouseout", ".handle",function(){    
    // quando o mouse sair de cima do elemento que tem a classe '.handle' acontece o evento 'mouseout'
    // esse evento chamando a função clearScroll
    clearScroll();
  });

}

/**
 * função para fazer o Scroll para a Direita
 */
function scrollDireita(elemento){
  console.log('ligar direito ', elemento);
  intervalo = setInterval(function(){ 
    $(elemento).animate( { scrollLeft: '+=1' }, 0);  
  } , 5);

  
  // intervalo = setInterval(function(){ $(elemento).scrollLeft() += 1 }  , 5);
};

/**
 * função para fazer o Scroll para a esquerda
 */
function scrollEsquerda(elemento){  
  console.log('desligar esquerdo', elemento);
 intervalo = setInterval(function(){ 
  $(elemento).animate( { scrollLeft: '-=1' }, 0); 
  }  , 5);
};

/**
 * função para parar o Scroll
 */
function clearScroll(){
  console.log('desligar ');
  clearInterval(intervalo);
};





