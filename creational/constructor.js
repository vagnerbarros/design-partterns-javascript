class Hero{

  constructor(name, hability){
    this._name = name;
    this._hability = hability;

    this.getDetails = () => {
      return `${this._name} can ${this._hability}`;
    }
  }
}

let ironMan = new Hero('IronMan', 'Fly');

console.log(ironMan.getDetails());