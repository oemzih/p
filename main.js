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

router.get('/assets/plugins/popper.min.js', async(req, res) => {
	res.sendFile(__path + '/assets/plugins/popper.min.js')
})

router.get('/assets/plugins/bootstrap/js/bootstrap.min.js', async(req, res) => {
	res.sendFile(__path + '/assets/plugins/bootstrap/js/bootstrap.min.js')
})

router.get('/assets/plugins/vanilla-rss/dist/rss.global.min.js', async(req, res) => {
	res.sendFile(__path + '/assets/plugins/vanilla-rss/dist/rss.global.min.js')
})

router.get('/assets/plugins/github-calendar/dist/github-calendar.min.js', async(req, res) => {
	res.sendFile(__path + '/assets/plugins/github-calendar/dist/github-calendar.min.js')
})

router.get('/assets/plugins/github-activity/src/github-activity.js', async(req, res) => {
	res.sendFile(__path + '/assets/plugins/github-activity/src/github-activity.js')
})

router.get('/assets/plugins/dark-mode-switch/dark-mode-switch.min.js', async(req, res) => {
	res.sendFile(__path + '/assets/plugins/dark-mode-switch/dark-mode-switch.min.js')
})

router.get('/assets/images/projects/bucin.jpg', async(req, res) => {
	res.sendFile(__path + '/assets/images/projects/bucin.jpg')
})

router.get('/assets/images/profile.png', async(req, res) => {
	res.sendFile(__path + '/assets/images/profile.png')
})


router.use(function (req, res) {
res.status(404)
  res.sendFile(__path + '/views/404.html')
});


module.exports = router
