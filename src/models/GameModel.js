import BaseModel from "./Basemodel"

Class GameModel extends Basemodel {
  defaults(){
    return{
      playerOne: null,
      playerTwo: null,
      playerOneMove: null,
      playerTwoMove: null,
      winner: null
    };
  }
  constructor() {
    super("game");
  }
}

export default GameModel;
