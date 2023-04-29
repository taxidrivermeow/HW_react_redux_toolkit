// export const loggerEnhancer = (store, action, next) => {
//
// }

// export const loggerEnhancer = function (store) {
//     return function (next) {
//         return function (action) {
//             //some code
//             return next(action)
//         }
//     }
// }

export const loggerEnhancer = store => next => action => {
    console.log(`Type of action: ${action.type}, 
    Payload: ${action.payload} 
    Old state: ${JSON.stringify(store.getState())}`);
    return next(action);
}
