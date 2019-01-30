import fetch from 'node-fetch'

const interval = 1000

export default class {
	constructor({ username, ipAddress, sensorId }) {
		const url = `http://${ipAddress}/api/${username}/sensors/${sensorId}`
		this.url = url
	}
	async subscribeToButtonEvent(listener) {
		const url = this.url
		let lastButtonEvent = null
		main()
		async function onButtonEvent(buttonEvent) {
			await listener(buttonEvent)
		}
		async function main() {
			while (true) {
				await check()
				await wait(interval)
			}
		}
		async function check() {
			const response = await fetch(url)
			const obj = await response.json()
			const timeStamp = obj.state.lastupdated
			const buttonEvent = obj.state.buttonevent
			if (buttonEvent === lastButtonEvent) {
				return
			}
			await onButtonEvent(buttonEvent, lastButtonEvent)
			lastButtonEvent = buttonEvent
		}
		
	}
}

async function wait(time = 1000) {
	return new Promise(resolve => setTimeout(resolve, time))
}
