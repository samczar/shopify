import _products from './poducts.json'

const TIMEOUT = 100

export default {
	getProducts: (cb: any, timeout: any) =>
		setTimeout(() => cb(_products), timeout || TIMEOUT),
	buyProducts: (payload: any, cb: any, timeout: any) =>
		setTimeout(() => cb(), timeout || TIMEOUT),
}
