$(document).ready(function() {
    //acha todos os td da tabela
    $("#tabelaEditavel tbody tr td").click(function() {
      //pega o conteudo da tabela e add na variavel conteudoOriginal
      var conteudoOriginal = $(this).text();
  
      //add uma imput na tabela quando quando ela esta em foco
      $(this).addClass("celulaEmEdicao");
      $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
      $(this)
        .children()
        .first()
        .focus();
  
      //add uma valor na tabela quando aperta enter= 13 no keybord
      $(this)
        .children()
        .first()
        .keypress(function(e) {
          if (e.which == 13) {
            var novoConteudo = $(this).val();
            $(this)
              .parent()
              .text(novoConteudo);
            $(this)
              .parent()
              .removeClass("celulaEmEdicao");
          }
        });
  
      //troca os valores
      $(this)
        .children()
        .first()
        .blur(function() {
          $(this)
            .parent()
            .text(conteudoOriginal);
          $(this)
            .parent()
            .removeClass("celulaEmEdicao");
        });
    });
});