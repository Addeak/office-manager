'use strict';

describe('Room', () => {
  let room
  beforeEach(() => {
    room = new Room('A')
  })

  describe('#name', () => {
    it('has a name', () => {
      expect(room.name()).toEqual('A')
    })
  })
})
