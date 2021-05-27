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
<form name="createSample" class="post" method="post" action="{{url('value')}}">
    <input   class="form-control" type="text" name="sample_id" id="sample_id" value='{{ $sample->id ?? " " }}'></imput>
   
    <button  class="btn btn-primary mb-2" >Nova valor</button>
    @csrf
</form>

<table  class="table table-bordered" id="tabelaEditavel" >
@php
  $sample = $process->find($process->id)->sample;
 
  $id = 0;
@endphp
  <thead class="thead-dark">
    <tr>
      <th scope="col">Amostra</th>
      @for ($i=0; $i < 10; $i++) 
        <th scope="col">observação</th>
      @endfor
        </tr>
  </thead>
  <tbody>
    @foreach ($sample as $sample)
      @php
        $value = $sample->find($sample->id)->value;
      @endphp
      <tr>
        <th scope="row">{{++$id}}</th>  
          @foreach ($value as $value)
            <th scope="col">{{$value->process_value}}</th>
          @endforeach
      </tr>                    
    @endforeach      
  </tbody>
</table>     

             
<button id="salvarDados" class="btn btn-primary mb-2">Salvar Dados</button>
<button id="media" class="btn btn-primary mb-2">media</button>
<button  id="amplitude" class="btn btn-primary mb-2">amplitude</button>

<div class="container">



  <label for="">Medias</label>
  <canvas id="mediaCharts" width="200" height="100" style="border:1px solid #000000;"></canvas>
  <br>
  <br>
  <label for="">amplitudes</label>
  <canvas id="amplitudeCharts" width="200" height="100" style="border:1px solid #000000;"></canvas>
</div>

                
            <script>
               //variaveis globais
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
                  return valores;
                }
                
                
                </script>

        
  </div>
</div>


<script type="text/javascript"src="<?php echo asset('js/tabela.js')?>"></script>
<script type="module" src="<?php echo asset('js/criaValores.js')?>"></script>
<script type="module" src="<?php echo asset('js/charts.js')?>"></script>

@endsection



