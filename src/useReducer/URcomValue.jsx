//THIS IS CONNECTED TO "URcomplex" COMPONENT

// setting as const variables to avoid spelling mistakes
const Type = {
  CHANGE_VALUE: "change-value",
  CHANGE_COLOR: "change-color",
};

function URcomValue(state, action) {
  switch (action.type) {
    case Type.CHANGE_VALUE:
      return { ...state, value: state.value + action.payload };

    case Type.CHANGE_COLOR:
      return { ...state, color: action.payload };
    //default: must return a state./here state->input is returned.
    default:
      return state;
  }
}
export default URcomValue;

export { Type };
