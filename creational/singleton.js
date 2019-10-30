class Database{
  
  constructor(data){
    if(Database.exists){
      return Database.instance;
    }
    else{
      this._data = data;
      Database.exists = true;
      Database.instance = this;
      return this;
    }
  }

  getData(){
    return this._data;
  }
}

const database = new Database('mongodb');
const database2 = new Database('mysql');

console.log(database.getData());
console.log(database2.getData());