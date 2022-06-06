// Objeto--> chave. valor.
var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates + jogador.derrotas * -1;

  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");

  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];

  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];

  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];

  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionaJogador() {
  var adicionaNome = document.getElementById("adicionaNome").value;
  var formato = {
    nome: adicionaNome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogadores.push(formato);
  exibeJogadoresNaTela(jogadores);
  limpa();
}

function resetar() {
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];

    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(jogadores);
}

function reiniciar() {
  jogadores = [];
  exibeJogadoresNaTela(jogadores);
}

function limpa() {
  var input = document.querySelector("input");
  input.value = "";
  input.focus();
}

/* function reset() {
  jogadores = [];
  exibeJogadoresNaTela(jogadores);
}
*/
