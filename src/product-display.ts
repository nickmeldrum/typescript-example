interface Product {
  name: string
  brand: string
  price: number
}

const display = (product: Product): string =>
  `Buy ${product.brand}'s ${product.name} for £${product.price}!`

const product = { name: 'Fursty Ferret', brand: 'Badger', price: 1.95 }

export default display(product)
