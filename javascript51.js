class Fraction {
    constructor(up, down) {
        this.up = up;
        this.down = down;
    }

    toString() {
        return `${this.up}/${this.down}`
    };

    add(fraction2) {
        let itog= this.down === fraction2.down ? (new Fraction(this.up + fraction2.up, this.down)) :
            new Fraction(this.up * fraction2.down + fraction2.up * this.down, this.down * fraction2.down);
itog.reduce();
return itog;
    }

    sub(fraction2) {
        let itog= this.down === fraction2.down ? new Fraction(this.up + fraction2.up, this.down) :
            new Fraction(this.up * fraction2.down - fraction2.up * this.down, this.down * fraction2.down);
        itog.reduce();
        return itog;
    }

    mult(fraction2) {
        let itog= new Fraction(this.up * fraction2.up, this.down * fraction2.down);
        itog.reduce();
        return itog;
    }

    div(fraction2) {
        let itog=new Fraction(this.up * fraction2.down, this.down * fraction2.up);
        itog.reduce();
        return itog;
    }

    reduce() {
        let up=this.up;
        let down=this.down;
        let lim = Math.min(up, down);
        let cicle=false;

        while (true) {
            cicle=false;
            for (let i = 2; i <= lim; i++) {
                if (up % i === 0 && down % i === 0) {
                    up = up / i;
                    down = down / i;
                    cicle=true;
                }

            }
            this.up = up;
            this.down = down;
            if(!cicle){break}

        }
    }
}

let d25 = new Fraction(2, 5); // создаем дробь 2/5
let d37 = new Fraction(3, 7); // создаем дробь 3/7
let sum = d25.add(d37);
let zero = sum.sub(d25).sub(d37);

console.log(`${d25} + ${d37} = ${sum}`);  // (2/5) + (3/7) = (29/35)
console.log(`${sum} - ${d25} = ${sum.sub(d25)}`); // (29/35) - (2/5) = (3/7)
console.log(`${sum} - ${d37} = ${sum.sub(d37)}`); // (29/35) - (3/7) = (2/5)

console.log(`${d25} * ${d37} = ${d25.mult(d37)}`); // (2/5) * (3/7) = (6/35)
console.log(`${d25} * ${d37} / ${d25} = ${d25.mult(d37).div(d25)}`); // (2/5) * (3/7) / (2/5) = (3/7)
console.log(`${d25} + ${d37} - ${d25} - ${d37} = ${zero}`); // (2/5) + (3/7) - (2/5) - (3/7) = (0/1)
