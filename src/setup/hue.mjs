import Prompt from 'prompt'

Prompt.get({
	properties: {
		ready: {
			message:     'Have you clicked on the gateway button?',
			description: 'true|false',
			type:        'boolean',
		},
	},
}, (err, result) => {
	if (err) {
		return onError(err) 
	}
	onResults(result)
})

function onResults(result) {
	console.log('Ready: ' + result.ready)
}

function onError(error) {
	console.error(error)
	process.exit(1)
}

/* 
curl -X POST -d '{"devicetype":"my_hue_app"}' http://<IP_ADDRESS>/api --header "Content-Type:application/json"
*/