var Aluno = /** @class */ (function () {
   // exibeInformacoes(): any {
   //    Object.keys(this).forEach((item) => {
   //       console.log(item + ' = ' + this[item]);
   //    }); ///tem como dar um for in?
   // }
   function Aluno(n, i, r, m, c) {
      this.nome = n;
      this.idade = i;
      this.rua = r;
      this.matricula = m;
      this.cadeiras = c;
   }
   Aluno.prototype.exibeInformacoes = function () {
      console.log(this);
   };
   return Aluno;
})();
var Funcionario = /** @class */ (function () {
   // exibeInformacoes(): any {
   //    Object.keys(this).forEach((item) => {
   //       console.log(item + ' = ' + this[item]);
   //    }); ///tem como dar um for in?
   // }
   function Funcionario(n, i, r, m, c) {
      this.nome = n;
      this.idade = i;
      this.rua = r;
      this.identificador = m;
      this.setor = c;
   }
   Funcionario.prototype.exibeInformacoes = function () {
      console.log(this);
   };
   return Funcionario;
})();
var funcionario1 = new Funcionario('Pablo', 22, 'Rua', 231, 'Setor');
funcionario1.exibeInformacoes();
