const loggerMiddleware = (store) => (next) => (action) => {
    console.log('middleware' + store, action);

    next(action);
    
}

export default loggerMiddleware;