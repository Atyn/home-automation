import HueListener from './HueListener.mjs'
import TradfriController from './TradfriController'
import TradfriConfig from '../tradfri-config.json'
import HueConfig from '../hue-config.json'

const tradfriController = new TradfriController(TradfriConfig)
const hueListener = new HueListener(HueConfig)

hueListener.subscribeToButtonEvent(onButtonEvent)

async function onButtonEvent(buttonEvent) {
	switch (buttonEvent) {
		// on
		case 1000:
		case 1002:
			await tradfriController.turnOnLights()
		// off
		case 4002:
		case 4000:
			await tradfriController.turnOffLights()
	}
}