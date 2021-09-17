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
      U: 0
    };   
  }
  
  inputValidator(text: string) {
    const _text = typeof text === 'string' && text.length === 0 ? 'Entrada Invalida' : true;
    return _text;
  }

  vowelsCounter(text: string) {
    const _text = this.inputValidator(text);
    text = text.toUpperCase();
    if(_text) {
      for(let i = 0; i < text.length; i++) {
        if(this.vowelsList.includes(text[i])) {
          this.vowelsQuantity[text[i]] += 1;
        }
      }
      return this.vowelsQuantity;
    } else {
      return _text;
    }
  }
}
