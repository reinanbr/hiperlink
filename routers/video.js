jsdom = require('jsdom')
jsdom = {jsdom}
req = require('request')

bd = ''
html = (url) => {
	req(url,(err, res, body) => {
		bd = body
		return bd
	})

	return bd
}

console.log(html('https://www.youtube.com/embed/pKEq8d_1pn4'))
listLinks = ['https://www.youtube.com/embed/pKEq8d_1pn4']
listVideos = []
video = {}

for(i in listLinks){
	listVideos[video.link] = html(listLinks[i])
}

console.dir(listVideos)
