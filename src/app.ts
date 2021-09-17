export class VowelsCounter {
  vowelsList: string[];
  vowelsQuantity: any;
  constructor() {
    this.vowelsList = ['A', 'E', 'I', 'O', 'U'];
    this.vowelsQuantity = {
      A: 0,
      E: 0,
      I: 0,
      O: 0,
      U: 0,
    };
  }

  inputValidator(text: string) {
    const _text = typeof text === 'string' && text.length === 0 ? 'Entrada Invalida' : true;
    return _text;
  }

  vowelsCounter(text: string) {
    const _text = this.inputValidator(text);
    text = text.toUpperCase();
    if (_text) {
      for (const letter of text) {
        if (this.vowelsList.includes(letter)) {
          this.vowelsQuantity[letter] += 1;
        }
      }
      return this.vowelsQuantity;
    } else {
      return _text;
    }
  }
}
