const initState = {
  count: 0
}

export const INC = 'INC';
export const DEC = 'DEC';

export const countReducer = (state = initState, action) => {
  switch (action.type) {
    case INC:
      return { ...state, count: state.count + 1 }
    case DEC:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export const incCount = () => ({ type: INC });
export const decCount = () => ({ type: DEC });