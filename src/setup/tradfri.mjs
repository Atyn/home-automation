import Tradfri from 'node-tradfri-client'
import Prompt from 'prompt'

Prompt.get([{
	name:        'securityCode',
	message:     'IKEA Trådfri security key',
	description: '(found on the backside of the gateway)',
	type:        'string',
	required:    true,
}], (err, result) => {
	if (err) {
		return onError(err) 
	}
	onResults(result)
})

function onResults(result) {
	console.log('securityCode: ' + result.securityCode)
}

function onError(error) {
	console.error(error)
	process.exit(1)
}

/*
	const results = await Tradfri.discoverGateway()
	console.log(results)
	const address = results.addresses[0]
	console.log(tradfri)
	try {
		const { identity, psk } = await tradfri.authenticate(tradfriConfig.securityCode)
		console.log('identity:', identity)
		console.log('psk:', psk)		
		
		// store identity and psk
	} catch (e) {
		// handle error
		console.error(e);
		return
	}
*/