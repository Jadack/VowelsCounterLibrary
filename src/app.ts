export class VowelsCounter {
  vowelsList: string[];
  constructor() {
    this.vowelsList = ['A', 'E', 'I', 'O', 'U'];
  }

  inputValidator(text: string) {
    const _text = typeof text === 'string' && text.length === 0 ? 'Entrada Invalida' : true;
    return _text;
  }

  vowelsCounter(text: string) {
    const _text = this.inputValidator(text);
    let vowelsQuantity: any = {
      A: 0,
      E: 0,
      I: 0,
      O: 0,
      U: 0,
    };
    text = text.toUpperCase();
    if (_text) {
      for (const letter of text) {
        if (this.vowelsList.includes(letter)) {
          vowelsQuantity[letter] += 1;
        }
      }
      return vowelsQuantity;
    } else {
      return _text;
    }
  }
}
