
import Tradfri from 'node-tradfri-client'

const tradfriConnectionTime = 3000

export default class {
	constructor(config) {
		this.config = config
	}
	async allLights(callback) {
		const tradfri = new Tradfri.TradfriClient(this.config.host)
		await tradfri.connect(this.config.identity, this.config.psk)
		tradfri
			.on('device updated', (device) => {
				if (device.type === Tradfri.AccessoryTypes.lightbulb) {
					if (device.lightList) {
						device.lightList.forEach(callback)
					}
				}
			})
			.observeDevices()
		await wait(tradfriConnectionTime)
		tradfri.destroy()
	}
	async turnOffLights() {
		await this.allLights(light => light.turnOff())
	}
	async turnOnLights() {
		await this.allLights(light => light.turnOn())
	}
}

async function wait(time = 1000) {
	return new Promise(resolve => setTimeout(resolve, time))
}