// variavel que vai armazenar o setInterval do scroll veritical
var intervalo;

  // página totalmente carregada (DOM, imagens etc.)
  // window.onload seria equivalente ao main do java ou do C++
window.onload = function () { 

  // quando passar o mouse emcima da seta
  $(".handle").mouseover(function(){
    // a variavel $this guarda o elemento que sofreu o evento 'mouseover'
    var $this = $(this);
    // testa se o elemento tem a classe 'handlePrev' que da o sentiro do scroll vertical
    if($($this).hasClass("handlePrev")){
      // se tiver pega o proximo elemento no DOM
      var el =$($this).next();   
      // chama a função scrollEsqueda e passa o proximo elemento como parametro
      scrollEsquerda(el);
    }else{
      // se não, pega o elemento anterior
      var el =$($this).prev();  
      // chama a função scroolDireta e passa o elemento como parametro
      scrollDireita(el);
    }
  }).mouseout(function(){
    // quando o mouse sair de cima do elemento que tem a classe '.handle' acontece o evento 'mouseout'
    // esse evento chamando a função clearScroll
    clearScroll();
  })

} 

/**
 * função para fazer o Scroll para a Direita
 */
function scrollDireita(elemento){
  intervalo = setInterval(function(){ 
    $(elemento).animate( { scrollLeft: '+=1' }, 0);  
  } , 5);

  
  // intervalo = setInterval(function(){ $(elemento).scrollLeft() += 1 }  , 5);
};

/**
 * função para fazer o Scroll para a esquerda
 */
function scrollEsquerda(elemento){  
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





