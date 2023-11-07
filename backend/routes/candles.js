const db = require('../database');
const { sendResponse } = require('../helper/response');

module.exports = {
    async getCandles(req, res) { 
        const [rows, fields] = await db.promise().execute(
            "SELECT Candle_ID FROM candle"
            )
            return sendResponse(req, res, 200, "Fetched Candles", rows);
    },
    async getCandleByID(req, res) { 
        const candleId = req.url.split('?')[1].split('=')[1];
        const [rows, fields] = await db.promise().execute(
            "SELECT * FROM candle WHERE Candle_ID = ?", [candleId]
            )
            return sendResponse(req, res, 200, "Fetched Candle ID", rows);
    },
    async getCandlePriceByID(req, res) {
        const candleId = req.url.split('?')[1].split('=')[1];
        const [rows, fields] = await db.promise().execute(
            "SELECT Price FROM candle WHERE Candle_ID = ?", [candleId]
            )
            return sendResponse(req, res, 200, "Fetched Candle Price", rows);
    }
}