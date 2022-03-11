(function () {
  const FPS = 50;
  const TAMX = 300;
  const TAMY = 400;
  const PROB_ARVORE = 2;
  const PROB_ARVORE_GRANDE = 3;
  const PROB_TOCO = 4;
  const PROB_ARVORE_CHAMAS = 5;
  const PROB_DOG = 6;
  const PROB_ROCHA = 7;

  let montanha;
  let skier;
  let painel;
  let ponto;
  let vidas;
  let velocidade;
  let interval;

  const arvores = [];

  function init() {
    montanha = new Montanha();
    skier = new Skier();
    painel = new Painel();
    ponto = new Pontuacao(0);
    vidas = new Vidas();
    velocidade = new Velocidade();
    interval = setInterval(run, 1000 / FPS);
    setInterval(calc_col, 500);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') skier.mudarDirecao(-1);
    else if (e.key === 'ArrowRight') skier.mudarDirecao(+1);
  });

  window.addEventListener('keypress', (a) => {
    if (a.key === 'f') velocidade.dash();
  });

  class Montanha {
    constructor() {
      this.element = document.getElementById('montanha');
      this.element.style.width = `${TAMX}px`;
      this.element.style.height = `${TAMY}px`;
    }
  }

  class Skier {
    constructor() {
      this.element = document.getElementById('skier');
      this.direcoes = ['para-esquerda', 'para-frente', 'para-direita'];
      this.direcao = 1;
      this.element.className = this.direcoes[this.direcao];
      this.element.style.top = '20px';
      this.element.style.left = parseInt(TAMX / 2) - 8 + 'px';
    }
    mudarDirecao(giro) {
      if (this.direcao + giro >= 0 && this.direcao + giro <= 2) {
        this.direcao += giro;
        this.element.className = this.direcoes[this.direcao];
      }
    }
    andar() {
      var aux = TAMX - 20 + 'px';
      if (this.direcao === 0 && this.element.style.left !== '0px')
        this.element.style.left = parseInt(this.element.style.left) - 1 + 'px';
      else if (this.direcao === 2 && this.element.style.left !== aux)
        this.element.style.left = parseInt(this.element.style.left) + 1 + 'px';
    }

    levanta() {
      this.element.className = 'para-frente';
      this.direcao = 1;
    }

    fall() {
      this.element.className = 'queda';
    }

    morre() {
      this.element.className = 'morto';
    }
  }

  class Painel {
    constructor() {
      this.element = document.getElementById('painel');
      this.element.style.width = `${TAMX - 50}px`;
      this.element.style.height = `${TAMY / 2}px`;
    }
  }

  class Vidas {
    constructor() {
      this.vidas = 3;
      this.element = document.createElement('div');
      this.element.textContent = 'vidas: ' + this.vidas;
      painel.element.appendChild(this.element);
    }

    down() {
      this.vidas--;
      this.element.textContent = 'vidas: ' + this.vidas;
    }

    getVidas() {
      return this.vidas;
    }
  }

  class Velocidade {
    constructor() {
      this.ms = 2;
      this.element = document.createElement('div');
      this.element.textContent = 'velocidade: ' + this.ms * 10 + ' m/s';
      painel.element.appendChild(this.element);
    }

    getMs() {
      return this.ms;
    }

    fall() {
      this.ms = 2;
      this.element.textContent = 'velocidade: ' + this.ms * 10 + ' m/s';
    }

    dash() {
      this.ms = 3;
      this.element.textContent = 'velocidade: ' + this.ms * 10 + ' m/s';
    }
  }

  class Pontuacao {
    constructor(valor) {
      this.corrida = valor;
      this.element = document.createElement('div');
      this.element.textContent = 'pontos: ' + parseInt(this.corrida / FPS);
      painel.element.appendChild(this.element);
    }

    setPonto(ms) {
      this.corrida += ms;
      this.element.textContent = 'pontos: ' + parseInt(this.corrida / FPS);
      //console.log(parseInt(this.corrida / FPS));
    }

    getPonto() {
      return parseInt(this.corrida / FPS);
    }
  }

  class Cachorro {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'cachorro';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class Arvore {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arvore';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class Arvore_chamas {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arbusto-chamas';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class ArvoreGrande {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arvore-grande';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class Toco {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'toco-arvore';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  class Rocha {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'rocha';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';
    }
  }

  function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

  function calc_col() {
    arvores.forEach((a) => {
      if (elementsOverlap(skier.element, a.element)) {
        console.log('queda');
        skier.fall();
        seila();
      }
    });
  }

  function seila() {
    setTimeout(function () {
      skier.levanta();
      vidas.down();
      if (vidas.getVidas() <= 0) {
        clearInterval(interval);
        skier.morre();
      }
    }, 1000);
  }

  function run() {
    const random = Math.random() * 100;
    ponto.setPonto(velocidade.getMs());
    if (random <= PROB_ARVORE && ponto.getPonto() < 50) {
      var arvore = new Arvore();
      arvores.push(arvore);
    } else if (
      random <= PROB_ARVORE_GRANDE &&
      random > PROB_ARVORE &&
      ponto.getPonto() >= 50
    ) {
      arvores.push(new ArvoreGrande());
    } else if (random <= PROB_TOCO && random > PROB_ARVORE_GRANDE) {
      arvores.push(new Toco());
    } else if (
      random <= PROB_ARVORE_CHAMAS &&
      ponto.getPonto() > 100 &&
      random > PROB_TOCO
    ) {
      arvores.push(new Arvore_chamas());
    } else if (
      random < PROB_DOG &&
      random > PROB_ARVORE_CHAMAS &&
      ponto.getPonto() % 5 === 2
    ) {
      arvores.push(new Cachorro());
    } else if (random <= PROB_ROCHA && random > PROB_DOG) {
      arvores.push(new Rocha());
    }

    arvores.forEach(async (a) => {
      a.element.style.top =
        parseInt(a.element.style.top) - velocidade.getMs() + 'px';
    });

    skier.andar();
  }

  init();
})();
