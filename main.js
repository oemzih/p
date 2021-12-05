__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', async(req, res) => {
	res.sendFile(__path + './index.html')
})


//Kalo page yang lu cari engga ada, nanti muncul ini
router.use(function (req, res) {
res.status(404)
  res.sendFile(__path + './views/404.html')
});


module.exports = router
