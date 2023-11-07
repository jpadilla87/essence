require('dotenv').config();
const http = require('http');

const { sendResponse } = require('./helper/response');
const candleRoutes = require('./routes/candles');

const getHandlers = {
        '/candles/all': (req, res) => candleRoutes.getCandles(req, res),
        '/candles': (req, res) => candleRoutes.getCandleByID(req, res),
        '/candles/price': (req, res) => candleRoutes.getCandlePriceByID(req, res),
}

const postHandlers = {

}

const server = http.createServer(async (req, res) => {
    let searchURL = req.url.split('?')[0];
    const getHandler = getHandlers[searchURL];
    const postHandler = postHandlers[searchURL];
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        // Handle preflight request
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'PUT', 'DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.writeHead(204);
        res.end();
        return;
    }

    if (getHandler && req.method === 'GET') {
            getHandler(req, res);
    } else if (postHandler && req.method === 'POST') {
            postHandler(req, res);
    } else {
            sendResponse(req, res, 404, 'Not found');
    }
});

const PORT = 8080;

server.listen(PORT, () => console.log("Server running on port:", PORT));
