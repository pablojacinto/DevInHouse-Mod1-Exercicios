interface Pessoa {
   nome: string;
   idade: number;
   rua?: string;
   exibeInformacoes?(); //aqui fica a interrogação
}

class Aluno implements Pessoa {
   nome: string;
   idade: number;
   rua?: string;
   matricula: number;
   cadeiras: string[];

   // exibeInformacoes(): any {
   //    Object.keys(this).forEach((item) => {
   //       console.log(item + ' = ' + this[item]);
   //    }); ///tem como dar um for in?
   // }

   constructor(n, i, r, m, c) {
      this.nome = n;
      this.idade = i;
      this.rua = r;
      this.matricula = m;
      this.cadeiras = c;
   }

   exibeInformacoes() {
      console.log(this);
   }
}

class Funcionario implements Pessoa {
   nome: string;
   idade: number;
   rua?: string;
   identificador: number;
   setor: string;

   // exibeInformacoes(): any {
   //    Object.keys(this).forEach((item) => {
   //       console.log(item + ' = ' + this[item]);
   //    }); ///tem como dar um for in?
   // }

   constructor(n, i, r, m, c) {
      this.nome = n;
      this.idade = i;
      this.rua = r;
      this.identificador = m;
      this.setor = c;
   }
   exibeInformacoes() {
      console.log(this);
   }
}

let funcionario1 = new Funcionario('Pablo', 22, 'Rua', 231, 'Setor');

funcionario1.exibeInformacoes();
