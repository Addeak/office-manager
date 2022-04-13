'use strict';

describe('Feature test:', () => {
  let office
  let roomA
  let roomB
  let roomC
  beforeEach(() => {
    office = new Office()
    roomA = new Room('A')
    roomB = new Room('B')
    roomC = new Room('C')
  })
  
  describe('after adding several rooms', () => {
    it('the office contains all those rooms', () => {
      office.addRoom(roomA)
      office.addRoom(roomB)
      office.addRoom(roomC)
      expect(office.listRooms()).toEqual([roomA, roomB, roomC])
    })
  })
  
})
