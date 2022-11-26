class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    obtemNomeAtleta(){
        return this.nome;
    }

    obtemIdadeAtleta(){
        return this.idade;
    }

    obtemPesoAtleta(){
        return this.peso;
    }

    obtemNotasAtleta(){
        return this.notas;
    }

    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11)
        {
            return "Infantil";
        }
        else if(this.idade === 12 || this.idade === 13)
        {
            return "Juvenil";
        }
        else if(this.idade === 14 || this.idade === 15)
        {
            return "Intermediario";
        }
        else if(this.idade >= 16 || this.idade <= 30)
        {
            return "Adulto";
        }
        else
        {
            return "Sem categoria";
        }
    }

    calculaIMC(){
        let altura = this.altura * this.altura;
        let imc = this.peso / altura;
        return imc;
    }

    comparar(a, b){
        return a - b;
    }

    calculaMediaValida(){
      let notasGerais = this.notas; // primeiro armazenei as notas na variavel notasGerais
      let notasOrganizadas = notasGerais.sort(function comparaNumeros(a,b) {
        if (a == b) return 0; 
        if (a < b) return -1; 
        if (a > b) return 1;
      }); 

      let notasComputadas = notasOrganizadas.slice(1,4)
      let somaNotasComputadas = notasComputadas.reduce(function(total, atual){
                return total + atual
      },0)

      let media = (somaNotasComputadas/notasComputadas.length).toFixed(2);
        return media;
    }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.calculaCategoria());
console.log("IMC: " + atleta.calculaIMC());
console.log("Média válida: " + atleta.calculaMediaValida());