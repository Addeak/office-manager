'use strict';

class Office {
  constructor() {
    this._rooms = []
  }

  addRoom(room) {
    this._rooms.push(room)
  }

  listRooms() {
    return this._rooms
  }
}