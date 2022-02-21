export const logAction = (store) => (next) => (actionInfo) => {
  console.log('dispatching', actionInfo);
  next(actionInfo);
};
