type Success = {
  state: "success";
  response: {
    body: string;
  };
};

type Failure = {
  state: "failure";
  reason: string;
};

type Loading = {
  state: "loading";
};

type States = Loading | Success | Failure;

function printState(state: States) {
  switch (state.state) {
    case "loading":
      console.log("loading...");
      break;
    case "success":
      console.log("success...");
      break;
    case "failure":
      console.log("failure...");
      break;
  }
}

printState({ state: "loading" });
printState({ state: "success", response: { body: "hi" } });
printState({ state: "failure", reason: "error" });
