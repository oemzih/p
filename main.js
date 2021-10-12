__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
	res.sendFile(__path + '/index.html')
})
router.get('/css/style.css', async(req, res) => {
	res.sendFile(__path + '/assets/css/styles.css')
})

//Kalo page yang lu cari engga ada, nanti muncul ini
router.use(function (req, res) {
res.status(404)
  res.sendFile(__path + '/views/404.html')
});


module.exports = router
