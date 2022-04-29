/*

Depois da construção das classes e métodos, deposite 3500 reais chamando a função deposito(), sabendo que o limite máximo é 1000 antes de confirmar a soma e verifique se o valor recebido é menor ou igual a 1000. Depois disso chame a função imprimeValorConta() e imprima o valor total, ou seja, 3500.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, estaAtiva, dono) {
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = dono;
    }
    return Conta;
}());
var contaEmpresa = /** @class */ (function (_super) {
    __extends(contaEmpresa, _super);
    function contaEmpresa(numero, saldo, estaAtiva, dono) {
        var _this = _super.call(this, numero, saldo, estaAtiva, dono) || this;
        _this.limiteDeDeposito = 1000;
        return _this;
    }
    contaEmpresa.prototype.deposito = function (valor) {
        if (valor <= this.limiteDeDeposito) {
            this.saldo += valor;
        }
        else {
            console.log('Depósito acima do limite');
        }
    };
    contaEmpresa.prototype.imprimeValorConta = function () {
        console.log(this.saldo);
    };
    return contaEmpresa;
}(Conta));
var conta1 = new contaEmpresa(1, 0, true, 'Pablo');
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(5500);
conta1.imprimeValorConta();
