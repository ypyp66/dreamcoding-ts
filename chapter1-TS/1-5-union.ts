{
  /**
   * Union Types : Or
   */
  type Direction = "left" | "right" | "up" | "down";

  function move(direction: Direction) {
    console.log(direction);
  }

  move("right");
  move("up");
  //move("one"); // error

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // function login -> success, fail
  type Success = {
    response: {
      body: string;
    };
  };

  type Failure = {
    reason: string;
  };

  type LoginState = Success | Failure;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "success",
      },
    };
  }

  function printLoginState(state: LoginState) {
    //success -> body
    //fail -> reason
    if ("response" in state) {
      console.log(`🎈 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
