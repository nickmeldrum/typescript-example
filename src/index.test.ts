import run from './index'

jest.mock(
  './product-display',
  (): object => {
    return {
      default: 'hello world',
    }
  },
)

describe('index', (): void => {
  test('logs out display', (): void => {
    const logMock = jest.spyOn(global.console, 'log')

    run()

    expect(logMock).toHaveBeenCalledWith('hello world')
  })
})
