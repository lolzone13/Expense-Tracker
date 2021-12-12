// @desc get all transactions
// @route /api/v1/transactions/get
// @access public (no auth)

exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}