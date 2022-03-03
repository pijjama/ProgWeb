class Conjunto {
  constructor(tamanho) {
    this.tamanho = tamanho;
    this.valores = [tamanho];
    for (var i = 0; i < tamanho; i++) {
      this.valores[i] = false;
    }
  }

  insere(valor) {
    if (valor - 1 > this.tamanho || this.valores[valor - 1] === true) {
      console.log(
        'Este valor já se encontra no conjunto, ou não pertence a este conjunto'
      );
    }
    this.valores[valor - 1] = true;
  }

  exclui(valor) {
    if (valor - 1 > this.tamanho || this.valores[valor - 1] === false) {
      console.log(
        'Este valor já não se encontra no conjunto, ou não pertence a este conjunto'
      );
    }
    this.valores[valor - 1] = false;
  }

  uniao(conjunto) {
    return this.concat(this, conjunto);
  }

  intersecao(conjunto) {
    return this.inter(this, conjunto);
  }

  diferenca(conjunto) {
    return this.difer(this, conjunto);
  }

  toString() {
    var str = '{ ';
    var first = true;

    for (var i = 0; i < this.tamanho; i++) {
      if (this.valores[i] === true && !first) {
        str += ', ' + (i + 1);
      }
      if (this.valores[i] === true && first) {
        str += i + 1;
        first = false;
      }
    }
    str += '}';
    return str;
  }

  concat(conj1, conj2) {
    var conjaux;
    var novoConjunto;
    if (conj1.tamanho >= conj2.tamanho) {
      novoConjunto = conj1;
      conjaux = conj2;
    }
    if (conj1.tamanho < conj2.tamanho) {
      novoConjunto = conj2;
      conjaux = conj1;
    }
    for (var i = 0; i < conjaux.tamanho; i++) {
      if (conjaux.valores[i] === true) {
        novoConjunto.valores[i] = true;
      }
    }
    return novoConjunto;
  }

  inter(conj1, conj2) {
    var novoConjunto;
    if (conj1.tamanho >= conj2.tamanho) {
      novoConjunto = new Conjunto(conj2.tamanho);
    }
    if (conj1.tamanho < conj2.tamanho) {
      novoConjunto = new Conjunto(conj1.tamanho);
    }
    for (var i = 0; i < novoConjunto.tamanho; i++) {
      if (conj1.valores[i] === true && conj2.valores[i] === true) {
        novoConjunto.valores[i] = true;
      }
    }

    return novoConjunto;
  }

  difer(conj1, conj2) {
    var novoConjunto;
    var conjaux;
    if (conj1.tamanho >= conj2.tamanho) {
      novoConjunto = conj1;
      conjaux = conj2;
    }
    if (conj1.tamanho < conj2.tamanho) {
      novoConjunto = conj2;
      conjaux = conj1;
    }

    for (var i = 0; i < conjaux.tamanho; i++) {
      if (novoConjunto.valores[i] != conjaux.valores[i]) {
        novoConjunto.valores[i] = true;
      } else {
        novoConjunto.valores[i] = false;
      }
    }

    return novoConjunto;
  }
}

const conjt = new Conjunto(10);
conjt.insere(2);
conjt.insere(1);
conjt.insere(3);
conjt.insere(9);
conjt.insere(10);
conjt.insere(7);
console.log(conjt.toString());

const conjt1 = new Conjunto(20);
conjt1.insere(9);
conjt1.insere(10);
conjt1.insere(7);
conjt1.insere(19);
conjt1.insere(11);
conjt1.insere(17);
console.log(conjt1.toString());

console.log(conjt.uniao(conjt1).toString());
console.log(conjt.intersecao(conjt1).toString());
console.log(conjt.diferenca(conjt1).toString());
