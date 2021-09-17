import { VowelsCounter } from "../src/app";
import { expect } from 'chai';

describe('VowelsCounter', () => {

  it('Should send a error message with empty input.', () => {
    let vowelsCounter = new VowelsCounter();
    expect(vowelsCounter.inputValidator('')).to.equal('Entrada Invalida');
  });

  it('Should return true with valid input.', () => {
    let vowelsCounter = new VowelsCounter();
    expect(vowelsCounter.inputValidator('Hello World')).to.equal(true);
  });

  it('Should return an object with cero value if input does not have vowels.', () => {
    let vowelsCounter = new VowelsCounter();
    expect(vowelsCounter.vowelsCounter('024821858')).to.deep.equal({ A: 0, E: 0, I: 0, O: 0, U: 0 });
  });

  it('Should return an object with exact value if input has vowels.', () => {
    let vowelsCounter = new VowelsCounter();
    expect(vowelsCounter.vowelsCounter('hola@mundo.com')).to.deep.equal({ A: 1, E: 0, I: 0, O: 3, U: 1 });
  });

  it('Should return an object with exact value of an individual vowel if input has just one vowel.', () => {
    let vowelsCounter = new VowelsCounter();
    expect(vowelsCounter.vowelsCounter('INS-368')).to.deep.equal({ A: 0, E: 0, I: 1, O: 0, U: 0 });
  });

  it('Should return the number of vowels from the input text.', () => {
    let vowelsCounter = new VowelsCounter();
    expect(vowelsCounter.vowelsCounter('Murcielago x MURCIELAGO = mUrciElagO cuadrado')).to.deep.equal({ A: 5, E: 3, I: 3, O: 4, U: 4 });
  });
});
