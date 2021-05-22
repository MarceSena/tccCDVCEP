$(document).ready(function() {
    var cont = 0;
    var soma = 0;
    var media = 0;
    var amplitude = 0;
    var mediaDasMedias = [];
  
    
  
    $("#salvarDados").on("click", function() {
      $("#tabelaEditavel tbody tr").each(function() {
        // Recuperar todas as colunas de cada linha percorida
        var colunas = $(this).children();
        //json objeto de dados
  
        var valor = [
          $(colunas[1]).text(),
          $(colunas[2]).text(),
          $(colunas[3]).text(),
          $(colunas[4]).text(),
          $(colunas[5]).text(),
          $(colunas[6]).text(),
          $(colunas[7]).text(),
          $(colunas[8]).text(),
          $(colunas[9]).text(),
          $(colunas[10]).text()
        ];
  
        //colocando o objeto dentro de um array
        valores.push(valor);
      });
  
      console.log(valores);
    });
  
    $("#media").on("click", function() {
    for (var i =0 ; i <5 ; i++){
      soma = 0; 
      for (var j =0 ; j <10 ; j++){
      
      soma = (soma + parseFloat(valores[i][j]));
     
     
  
      }
      media =  soma /10;
      console.log("valor: " + soma);
      console.log("media: " + media);
    }  
    
    
      
        
   
      
     
  
      
  
  
    });
  
    $("#amplitude").on("click", function() {
      
      var amplitude; 
      for (i=0; i <5 ; i++){
        for (j=1; j <10 ; j++){
          var maior = -9999;
          var menor =  9999;
          if(maior < valores[i][j]){
            maior = valores[i][j];      
          }
          if(menor > valores[i][j]){
            menor = valores[i][j];      
          }
          
          
         
        }
        amplitude = maior -menor ;
        console.log ("maior : " + maior);
        console.log ("menor : " + menor);
        console.log ("amplitude: "+ amplitude);
        console.log("oi");
        
      }
    });
  });