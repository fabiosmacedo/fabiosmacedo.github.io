// variavel que vai armazenar o setInterval do scroll veritical
var intervalo;

function carregarPagina(pagina, title){
  // verifica se tem ancora, se não tiver não faz nada
  if( typeof pagina === "undefined" || pagina == "#") return;
  // carrega a nova pagina e coloca na div #conteudo
  $("#conteudo").load(pagina);
  // Se tiver conteudo na variavel 'title', colocar no title da página
  if( typeof title != "undefined"){
    document.title = title;
  }
  
  
}



  // página totalmente carregada (DOM, imagens etc.)
  // window.onload seria equivalente ao main do java ou do C++
window.onload = function () { 

    $(".menu").on("click", "a", function(e){ 

      var pagina = $(this).attr("href"); 
      var title = $(this).attr("title");

      console.log("nav-link", pagina);  

      carregarPagina(pagina, title);

      e.preventDefault();

    })

    efeitoCarroseul();


} 

/**
 * 
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





