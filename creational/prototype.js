class Client{

  constructor(prototype){

  }

  hasPreference(){

  }
}

class ClientVip extends Client{

  constructor(){
    super();
  }

  hasPreference(){
    return true;
  }
}

class ClientDefault extends Client{

  constructor(){
    super();
  }

  hasPreference(){
    return false;
  }
}

const vip = new ClientVip();
const normal = new ClientDefault();

console.log(`client vip has preference? ${vip.hasPreference()}`);
console.log(`client default has preference? ${normal.hasPreference()}`);