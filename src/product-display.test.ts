import display from './product-display'

describe('product-display', () => {
  test('display includes brand', () => {
    expect(display).toContain('Badger')
  })

  test('display includes product name', () => {
    expect(display).toContain('Fursty Ferret')
  })

  test('display includes price', () => {
    expect(display).toContain('£1.95')
  })
})
