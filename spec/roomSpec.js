'use strict';

describe('Room', () => {
  let room
  beforeEach(() => {
    room = new Room('A')
  })

  it('has a name', () => {
    expect(room.name()).toEqual('A')
  })

  describe('when NOT in use', () => {
    it('is available', () => {
      expect(room.isAvailable()).toEqual(true)
    })
  })

  describe('when in use', () => {
    it('is NOT available', () => {
      room.switchToUnavailable()
      expect(room.isAvailable()).toEqual(false)
    })
  })

})
