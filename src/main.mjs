import HueListener from './HueListener.mjs'
import TradfriController from './TradfriController'
import TradfriConfig from '../tradfri-config.json'
import HueConfig from '../hue-config.json'

const tradfriController = new TradfriController(TradfriConfig)
const hueListener = new HueListener(HueConfig)

process.on('uncaughtException', (error) => {
	console.error(error)
	process.exit(1)		
})

main()
async function main() {
	try {
		await hueListener.subscribeToButtonEvent(onButtonEvent)
	} catch (error) {
		console.error(error)
		process.exit(1)		
	}
}

async function onButtonEvent(buttonEvent) {
	switch (buttonEvent) {
		// on
		case 1000:
		case 1002:
			console.log('on', buttonEvent, new Date().toLocaleString())
			await tradfriController.turnOnLights()
			break
		// off
		case 4002:
		case 4000:
			console.log('off', buttonEvent, new Date().toLocaleString())
			await tradfriController.turnOffLights()
			break
	}
}