import reselect from 'reselect';

const { createSelector } = reselect;

var number = ((state, action) => {
    if(action.type === 'ADD') {
        return state + 1;
    }
    return state || 0;
});

export default {
    number
}

const num = state => state.number;

export const getNumber = createSelector(
  num,
  number => {
    return 'abc123' + number + '?';
  }
);
