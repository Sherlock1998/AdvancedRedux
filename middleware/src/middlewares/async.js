export default function({dispatch}) {
  return next => action => {
    if(!action.payload || !action.payload.then) {
      return next(action);
    };
    action.payload.then(function(response){
      const newAction = {...action,payload:response};
      //dispatch send the payload back to the top of the middleware again, so it flows through this middleware. 
      dispatch(newAction);
    });
  }
}
