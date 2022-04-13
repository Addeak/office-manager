'use strict';

describe('Office', () => {
  let office
  let room
  beforeEach(() => {
    room = jasmine.createSpy('room')
    office = new Office()
  })

  it('rooms can be added to the office', () => {
    office.addRoom(room)
    expect(office.listRooms()).toEqual([room])
  })
})