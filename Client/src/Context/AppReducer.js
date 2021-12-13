export default (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTIONS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        
        default:
            return state;
    }
}