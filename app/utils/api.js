export const simulateApi = async (payload, delay = 1000) => (
	await new Promise(resolve => setTimeout(resolve(payload), delay))
) 