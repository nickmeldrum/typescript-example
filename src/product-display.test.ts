import display from './product-display'

describe('product-display', (): void => {
  test('display includes brand', (): void => {
    expect(display).toContain('Badger')
  })

  test('display includes product name', (): void => {
    expect(display).toContain('Fursty Ferret')
  })

  test('display includes price', (): void => {
    expect(display).toContain('£1.95')
  })
})
