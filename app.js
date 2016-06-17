function Hotel (rooms, roomsCapacity, roomsBooked, customers, cash) {
  this.rooms = rooms
  this.roomsCapacity = roomsCapacity
  this.roomsBooked = roomsBooked
  this.customers = customers
  this.cash = cash
  this.numberOfAvailableRooms = function () {
    return this.roomsCapacity - this.roomsBooked
  }
  this.retrieveAvailableRooms = function (type) {
    var availableRooms = []
    for (var i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].availability && this.rooms[i].type === type) {
        availableRooms.push(this.rooms[i])
      }
    }
    return availableRooms
  }
}

function Room (id, type, numberOfBeds, price, availability) {
  this.id = id
  this.type = type
  this.numberOfBeds = numberOfBeds
  this.price = price
  this.availability = availability
}

function Customer (id, name, paymentMethod, gender) {
  this.id = id
  this.name = name
  this.paymentMethod = paymentMethod
  this.gender = gender
  this.roomsBooked = null
}

var room1 = new Room(1, 'normal', 2, 200, true)
var room2 = new Room(2, 'normal', 2, 200, true)
var room3 = new Room(3, 'normal', 2, 200, true)
var room4 = new Room(4, 'vip', 4, 400, true)
var room5 = new Room(5, 'vip', 4, 400, true)

var cus1 = new Customer(1, 'jon', 'cash', 'male')
var cus2 = new Customer(2, 'gab', 'visa', 'female')
var cus3 = new Customer(3, 'winston', 'mastercard', 'male')
var cus4 = new Customer(4, 'brian', 'amex', 'male')
var cus5 = new Customer(5, 'evon', 'cash', 'female')

var rooms = [room1, room2, room3, room4, room5]
var customers = [cus1, cus2, cus3, cus4, cus5]

var ritz = new Hotel(rooms, 10, 0, customers, 0)
var cus6 = new Customer(6, 'justin', 'gold', 'male')
ritz.customers.push(cus6)
ritz.numberOfAvailableRooms()
ritz.retrieveAvailableRooms('vip')
