'use strict';

class Room {
  constructor(name) {
    this._name = name
    this._available = true
  }

  name() {
    return this._name
  }

  isAvailable() {
    return this._available
  }

  switchToUnavailable() {
    this._available = false
  }
}