__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
	res.sendFile(__path + '/index.html')
})

router.get('/assets/css/styles.css', async(req, res) => {
	res.sendFile(__path + '/assets/css/styles.css')
})

router.get('/assets/js/main.js', async(req, res) => {
	res.sendFile(__path + '/assets/js/main.js')
})

router.get('/assets/fontawesome/js/all.js', async(req, res) => {
	res.sendFile(__path + '/assets/fontawesome/js/all.js')
})

router.get('/assets/plugins/bootstrap/css/bootstrap.min.css', async(req, res) => {
	res.sendFile(__path + '/assets/plugins/bootstrap/css/bootstrap.min.css')
})

router.get('/assets/plugins/github-calendar/dist/github-calendar-responsive.css', async(req, res) => {
	res.sendFile(__path + '/assets/plugins/github-calendar/dist/github-calendar-responsive.css')
})

router.get('/assets/plugins/github-activity/src/github-activity.css', async(req, res) => {
	res.sendFile(__path + '/assets/plugins/github-activity/src/github-activity.css')
})


router.use(function (req, res) {
res.status(404)
  res.sendFile(__path + '/views/404.html')
});


module.exports = router
