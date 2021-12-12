// @desc get all transactions
// @route GET /api/v1/transactions
// @access public (no auth)

exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

// @desc add transaction
// @route POST /api/v1/transactions
// @access public (no auth)

exports.addTransactions = (req, res, next) => {
    res.send('ADD transactions')
}

// @desc delete transaction
// @route DELETE /api/v1/transactions/:id
// @access public (no auth)

exports.deleteTransactions = (req, res, next) => {
    //res.write(req);
    res.send('DELETE transactions');
    //res.send();
}