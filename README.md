You are helping hotels to create a simple room tracking system. This system can be used across all different hotels. There are different type of rooms in the hotels. The system should keep track of the different customers details and as well as the room or rooms they book.

create a `Hotel` class with the following attributes:

1. rooms (array)
2. roomsCapacity (number)
3. roomsBooked (number)
4. customers (array)
5. cash (number)

add the following methods to the Hotel class:

1. numberOfAvailableRooms
2. retrieveAvailableRooms (type)
3. bookRoom (roomId, cusId)
4. freeRoomUp (roomId)
5. getCustomerInfo (cusId)

create a `Room` class with the following attributes:

1. id (number)
2. type (string)
3. numberOfBeds (number)
4. price (number)
5. availability (boolean)

create a `Customer` class with the following attributes:

1. id (number)
2. name (string)
3. paymentMethod (string)
4. gender (string)
5. roomsBooked (array)
