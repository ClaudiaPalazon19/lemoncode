console.log("************** DELIVERABLE 05 *********************");

// SLOT MACHINE - El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

class SlothMachine {
  coin: number;
  constructor() {
    this.coin = 0;
  }

  play() {
    this.coin += 1;
    const randomBools = Array.from({ length: 3 }, () => Math.random() >= 0.5);
    const win = randomBools.filter((bool) => bool).length === 3;
    if (win) {
      console.log(`Congratulations!!!. You won ${this.coin} coins!!`);
      this.coin = 0;
      return;
    }
    console.log("Good luck next time!!");
    return;
  }
}

const machine1 = new SlothMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
