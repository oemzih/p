__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
	res.sendFile(__path + '/views/index.html')
})
router.get('/css/style.css', async(req, res) => {
	res.sendFile(__path + '/views/css/style.css')
})

//Kalo page yang lu cari engga ada, nanti muncul ini
router.use(function (req, res) {
res.status(404)
  res.sendFile(__path + '/views/404.html')
});


module.exports = router
