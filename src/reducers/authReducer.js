

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {},action)=>{
    switch (action.type){
        case 'LOGIN':
            return {
                user: action
            };
        case 'LOGOUT':
            return {}
        default:
            return state;
    }
};