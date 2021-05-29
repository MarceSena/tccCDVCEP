var soma = 0;
var media = 0;
var amplitude = 0;
var somaMedia = 0;
var mediaGeral = 0;
var desvio = 0;
var n = 10;
var d2 = 3.078;
var d3 = 0.7971;
var LSC = 0;
var LIC = 0;
var LC = 0;
var valoresMedia = [];
var valoresAmplitude = [];
var LSCR = 0;
var LICR = 0;
var LCR = 0;
var LSE = 0;
var LIE = 0;
var cp = 0;
var cpk = 0;
var pp = 0;
var ppk = 0;


function salvaDados() {
    $("#tabelaEditavel tbody tr").each(function () {
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
    return valores;
};

function medias() {
    for (var i = 0; i < 5; i++) {
        soma = 0;
        for (var j = 0; j < 10; j++) {
            soma = (soma + parseFloat(valores[i][j]));
        }
        media = soma / 10;
        valoresMedia.push(media);
        somaMedia += media
        mediaGeral = (somaMedia / 5)
        $("#mediaGeral").val(mediaGeral);
        $("#mediaValor").val(media);
        console.log("valor: " + soma);
        console.log("media: " + media);
        console.log("somaMEdia: " + somaMedia);
        console.log("mediaGeral: " + mediaGeral);
        console.log("valoresMedia: " + valoresMedia);
    }
    return mediaGeral;
};

function amplitudes() {
    // Funcao para retornar o menor valor de um array
    Array.min = function (array) {
        return Math.min.apply(Math, array);
    };

    // Funcao para retornar o maior valor de um array
    Array.max = function (array) {
        return Math.max.apply(Math, array);
    };


    for (var i = 0; i < 5; i++) {
        var menor = Array.min(valores[i]);
        var maior = Array.max(valores[i]);
        amplitude = maior - menor;
        valoresAmplitude.push(amplitude);
        $("#amplitudeValor").val(amplitude);
        console.log(amplitude);
        var somaAmplitude = +amplitude
    }
    desvio = somaAmplitude / d2
    $("#desvioValor").val(desvio);

    //media das amplitude
    var mediaAmplitude = somaAmplitude / 5

    LSC = mediaGeral + ((3 * desvio) / Math.sqrt(n));
    LIC = mediaGeral - ((3 * desvio) / Math.sqrt(n));
    LC = mediaGeral;


    LSCR = mediaAmplitude + ((3 * d3 * desvio));
    LICR = mediaAmplitude - ((3 * d3 * desvio));
    LCR = mediaAmplitude;

    console.log('LSC', LSC)
    console.log('LIC', LIC)
    console.log('LC', LC)
}

function desvioPadraoGeral() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            var amplitudeGeral = valores[i][j] - mediaGeral;
            var dp = +Math.sqrt(amplitudeGeral);
        }
    }
    dp = dp / 4;

}

function capabilidade() {
    cp = ((LSE - LIE) / 6 * desvio);

    var cps = ((LSE - mediaGeral) / 3 * desvio);
    var cpi = ((mediaGeral - LIE) / 3 * desvio);

    if (cps < cpi) {
        cpk = cps;
    } else {
        cpk = cpi;
    }

    $("#cp").val(cp);
    $("#cpk").val(cpk);
}

function performance() {
    pp = ((LSE - LIE) / 6 * dp);

    var pps = ((LSE - mediaGeral) / 3 * dp);
    var ppi = ((mediaGeral - LIE) / 3 * dp);

    if (pps < ppi) {
        ppk = pps;
    } else {
        ppk = ppi;
    }

    $("#pp").val(pp);
    $("#ppk").val(ppk);
}




$(document).ready(function () {
    $("#n").val(n);
    salvaDados();
    medias();
    amplitudes();
    capabilidade();
    performance();

});



export {
    LSC,
    LIC,
    LC,
    valoresMedia,
    LSCR,
    LICR,
    LCR,
    valoresAmplitude
};
