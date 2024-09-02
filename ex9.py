# Implement the following class hierarchy using Python:
# A publication can be either a book or a magazine.
# Each publication has a name. Each book also has an author
# and a page count, whereas each magazine has a chief editor.
# Also write the required initializers to both classes.
# Create a print_information method to both subclasses for printing
# out all information of the publication in question. In the main program,
# create publications Donald Duck (chief editor Aki Hyyppä)
# and Compartment No. 6 (author Rosa Liksom, 192 pages).
# Print out all information of both publications using
# the methods you implemented.

class publication:
    def __init__(self) -> None:
        self.name = "dd"

class book(publication):
    def __init__(self, author, pageCount) -> None:
        super().__init__()
        self.author = author
        self.pageCount = pageCount

    def printInfo(self):
        print(f'author: {self.author}, page count: {self.pageCount}')

class magazine(publication):
    def __init__(self, chiefEditor) -> None:
        super().__init__()
        self.chiefEditor = chiefEditor

    def printInfo(self):
        print(f'chief editor: {self.chiefEditor}')

# Extend the previosly written Car class by adding two subclasses:
# ElectricCar and GasolineCar. Electric cars have the capacity of
# the battery in kilowatt-hours as their property. Gasoline cars have
# the volume of the tank in liters as their property.
# Write initializers for the subclasses. For example, the initializer
# of electric cars receives the registration number, maximum speed and
# battery capacity as its parameter. It calls the initializer of
# the base class to set the first two properties and then sets its capacity.
# Write a main program where you create one electric car
# (ABC-15, 180 km/h, 52.5 kWh) and one gasoline car
# (ACD-123, 165 km/h, 32.3 l). Select speeds for both cars, make them
# drive for three hours and print out the values of their kilometer counters.

from ex8 import Car

class electricCar(Car):
    def __init__(self, registrationNumber, maxSpeed, batteryCapacity):
        super().__init__(registrationNumber, maxSpeed)
        self.batteryCapacity = batteryCapacity

class gasCar(Car):
    def __init__(self, registrationNumber, maxSpeed, tankVolume):
        super().__init__(registrationNumber, maxSpeed)
        self.tankVolume = tankVolume

def main():
    mag = magazine("Aki Hyypiä")

    ebook =  book('Rosa Liksom', 192)

    mag.printInfo()
    ebook.printInfo()

    evCar = electricCar('ABC-15', 180, 52.5)
    car = gasCar('ACD-123', 165, 32.3)

    evCar.speed = 40
    car.speed = 80
    evCar.drive(3)
    car.drive(3)

    print(f'ev drove {evCar.distance} km')
    print(f'gas car drove {car.distance} km')

main()
