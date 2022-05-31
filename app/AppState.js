import { House } from "./Models/House.js"
import { Car } from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'Chevrolet', model: 'Impala', description: 'It balla', price: 10, year: 1964, color: '#000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg' }),
    new Car({ make: 'Buick', model: 'Grand National', description: 'It is grand', price: 15, year: 1984, color: '#ff0000', imgUrl: 'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg' })
  ]

  houses = [
    new House({ bedrooms: 4, bathrooms: 2, sqFootage: 3200, price: 425000, description: 'Beautiful place to live', imgUrl: 'https://images.unsplash.com/photo-1630650231815-a567e2ed26cc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500' }),
    new House({ bedrooms: 6, bathrooms: 3, sqFootage: 4000, price: 630000, description: 'You wont regret paying this much. I promise!', imgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500' })
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
