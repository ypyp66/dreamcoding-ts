{
  type Success = {
    result: "success";
    response: {
      body: string;
    };
  };

  type Failure = {
    result: "fail";
    reason: string;
  };

  type LoginState = Success | Failure;

  function login(id: string, password: string): LoginState {
    return {
      result: "success", //각 state마다 공통된 속성을 추가해줘야함
      response: {
        body: "logged in",
      },
    };
  }

  function printLoginState(state: LoginState) {
    //success -> body
    //fail -> reason
    state.result; // success or fail
    if (state.result === "success") {
      console.log(`🎈 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
