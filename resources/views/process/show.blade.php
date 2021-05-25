@extends('templates.template')
@section('content')
<style>
  .uper {
    margin-top: 40px;
  }
</style>
<div class="card uper">
  <div class="card-header">
    Controle Estatistico de Processos
  </div>
  <div class="card-body">
    @if ($errors->any())
      <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
            @endforeach
        </ul>
      </div><br/>
    @endif
<input class="form-control" type="text" name="name" id="name"></imput>
<button id="init" class="btn btn-primary mb-2">Analizar Processo</button>

<form name="createSample" class="post" method="post" action="{{url('sample')}}">
    <input  hidden class="form-control" type="text" name="process_id" id="process_id" value='{{ $process->id}}'></imput>
    <button id="sample" name='sample' class="btn btn-primary mb-2" >Nova amostra</button>
    @csrf
</form>

<table class="table">
        <thead>
            <tr>
            <th scope="col">Amostra</th>
            <th scope="col">observação</th>
            </tr>
        </thead>
            <tbody>
           
                @php
                    $sample = $process->find($process->id)->sample;
                    $id = 0;
                @endphp

                @foreach ($sample as $sample)
                       
                <tr>
                    <th scope="row">{{++$id}}</th>       
                </tr>
                
                @endforeach
               
        

              
              <div class="container">
         
              <table  class="table table-bordered" id="tabelaEditavel" >
                  <thead class="thead-dark">
                      <tr>
                          <th>Amostra</th>
                          <th>X1</th>
                          <th>X2</th>
                          <th>X3</th>
                          <th>X4</th>
                          <th>X5</th>
                          <th>X6</th>
                          <th>X7</th>
                          <th>X8</th>
                          <th>X9</th>
                          <th>X10</th>

                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th >Amostra 1</th>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                      </tr>
                      <tr>
                          <th >Amostra 2</th>
                          <td ></td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                      </tr>
                      <tr>
                          <th >Amostra 3</th>
                          <td></td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                      </tr>
                      <tr>
                          <th >Amostra 4</th>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                      </tr>
                      <tr>
                          <th >Amostra 5</th>
                          <td></td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                      </tr>
                  </tbody>
              </table>
              
            </div>
            <button id="salvarDados" class="btn btn-primary mb-2">Salvar Dados</button>
            <button id="media" class="btn btn-primary mb-2">media</button>
            <button  id="amplitude" class="btn btn-primary mb-2">amplitude</button>



              <p><label class="my-1 mr-2" for="inlineFormCustomSelectPref">AMPLITUDE:</label></p>


              <p><label class="my-1 mr-2" for="inlineFormCustomSelectPref">LIC</label></p>
              <p><label class="my-1 mr-2" for="inlineFormCustomSelectPref">LSC</label></p>


              <canvas id="myChart" width="200" height="100" style="border:1px solid #000000;"></canvas>

                
            <script>
               //variaveis globais
                var i;
                var valor = "";
                var valores = [];
                
                //função para coletar valor digitado pelo usuario
                function coletarValor(valor){
                  valor = document.getElementById('valor').value;
                  return valor;
                }
                //função para montar vetor de valores
                function vetorValores(){                         
                  var coletaValor = coletarValor('valor');
                  valores.push(coletaValor);
                  console.log (valores);
                  return valores;
                }
                
                //Funcao adiciona uma nova linha na tabela
                function adicionaLinha(idTabela) {
                  var tabela = document.getElementById(idTabela);
                  var numeroLinhas = tabela.rows.length;
                  var linha = tabela.insertRow(numeroLinhas);
                  var celula1 = linha.insertCell(0);
                  //var celula2 = linha.insertCell(1);
                  //var celula3 = linha.insertCell(2); 
                  celula1.innerHTML = 'Amostra '+ (numeroLinhas-1);
                  // pego o valor do imput
                  // celula2.innerHTML =  'teste'+ Math.floor((Math.random() * 100) + 1); 
                  // bptão de remover que vai sumir
                  //celula3.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
                 }
                 //função que adciona nova coluna 
                function criaColuna(coluna){
                  var cell = document.getElementById("coluna");
                  var coluna = cell.insertCell(-1);
                  
                  for (i=0; i<valores.length; i++){
                      coluna.innerHTML= valores[i];
                  }
                  
                  console.log (valores);     
                }
                //função para verificar se exite celula na tabela
                //função para medir a mediana do grafico 
                function media (){
                  var resultado   =0; 
                  var soma        = 0;
                  var div         = 0;
                  var media       =document.getElementById('media');
                  var coletaValor = coletarValor('valor');
                  
                  for (i=0; i<valores.length; i++){
                    soma = parseInt(valores[i]);  
                    resultado += soma;
                  }
                  
                  div  =  resultado /valores.length;
                  media.innerHTML= div;
                  console.log (valores.length); 
                }
                //função para amplitude 
                function amplitude(){
                  
                  var maior     = [-99999];
                  var menor     = [99999];
                  var coletaValor = coletarValor('valor');
                  var   idAmplitude       =document.getElementById('amplitude');
                  var amplitude =0;
                  for (i=0; i <valores.length; i++){
                      if(maior [0] < valores[i] ){
                        maior [0] = valores[i];          
                      }
                      if (menor [0] > valores[i] ){
                         menor [0] = valores[i]; 
                    } 
                   
                   
                  }
                  amplitude = maior - menor;
                  console.log ('maior' + maior[0]);
                  console.log ('menor'+ menor[0]);
                  console.log ('amplitude'+ amplitude);
                  idAmplitude.innerHTML= amplitude;
                }
                // funcao remove uma linha da tabela
                 function removeLinha(linha) {
                 var i=linha.parentNode.parentNode.rowIndex;
                 document.getElementById('tbl').deleteRow(i);
                 }                
           

//////////////////////////////////////charts
var amplitude = 10;
var LSC = 10;
var LIC = 1;
var lC = 5

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red'],
        datasets: [{
            label: '# LSC',
            data: [amplitude, amplitude, amplitude, amplitude],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1
        },
        
        {
            label: '# lC',
            data: [lC, lC, lC, lC],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1
        },
        {
            label: 'LIC',
            data: [LIC, LIC, LIC, LIC],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1
        }

    
    ]
    },
   
    
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
</script>
      
 


        
  </div>
</div>


<script type="text/javascript"src="<?php echo asset('js/tabela.js')?>"></script>
<script type="text/javascript"src="<?php echo asset('js/criaValores.js')?>"></script>

@endsection



