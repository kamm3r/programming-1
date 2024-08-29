# Write a Car class that has the following properties:
# registration number, maximum speed, current speed and travelled distance.
# Add a class initializer that sets the first two of the
# properties based on parameter values. The current speed and travelled
# distance of a new car must be automatically set to zero.
# Write a main program where you create a new car
# (registration number ABC-123, maximum speed 142 km/h).
# Finally, print out all the properties of the new car.
import random

class Car:
    def __init__(self, registrationNumber, maxSpeed):
        self.registrationNumber = registrationNumber
        self.maxSpeed = maxSpeed
        self.speed = 0
        self.distance = 0

    # Extend the program by adding an accelerate method into the new class.
    # The method should receive the change of speed (km/h) as a parameter.
    # If the change is negative, the car reduces speed.
    # The method must change the value of the speed property of the object.
    # The speed of the car must stay below the set maximum
    # and cannot be less than zero. Extend the main program so that
    # the speed of the car is first increased by +30 km/h,
    # then +70 km/h and finally +50 km/h. Then print out the
    # current speed of the car. Finally, use the emergency brake by
    # forcing a -200 km/h change on the speed and then print out the final speed.
    # The travelled distance does not have to be updated yet.

    def accelerate(self, changeOfSpeed):
        changedSpeed = self.speed + changeOfSpeed
        self.speed = max(0, min(changedSpeed, self.maxSpeed))

    # Again, extend the program by adding a new drive method that receives
    # the number of hours as a parameter. The method increases the travelled
    # distance by how much the car has travelled in constant speed in
    # the given time. Example: The travelled distance of car
    # object is 2000 km. The current speed is 60 km/h.
    # Method call car.drive(1.5) increases the travelled distance to 2090 km.

    def drive(self, hours):
        self.distance = hours * self.speed

def main():
    newCar = Car('ABC-123', 142)
    print('all the properties of the new car')
    print(f'registeration number {newCar.registrationNumber}')
    print(f'max speed {newCar.maxSpeed} km/h')
    print(f'current speed {newCar.speed} km/h')
    print(f'distance travelled {newCar.distance}')

    newCar.accelerate(30)
    newCar.accelerate(70)
    newCar.accelerate(50)
    print(f'current speed after acceleration: {newCar.speed} km/h')

    newCar.accelerate(-200)
    print(f'emergency brake: {newCar.speed} km/h')

    # Now we will program a car race. The travelled distance of a new car
    # is initialized as zero. At the beginning of the main program, create
    # a list that consists of 10 car objects created using a loop. The
    # maximum speed of each new car is a random value between 100 km/h
    # and 200 km/h. The registration numbers are created as
    # follows: "ABC-1", "ABC-2" and so on. Now the race begins. One per
    # every hour of the race, the following operations are performed:
    # The speed of each car is changed so that the change in speed is a
    # random value between -10 km/h and +15 km/h.
    # This is done using the accerelate method. Each car is made to drive
    # for one hour. This is done with the drive method.

    carArray = []
    for i in range(1,11):
        carArray.append(Car(f'ABC-{i}',random.randint(100, 200)))

    print('race started')
    raceTime = 0
    while True:
        raceTime += 1
        for car in carArray:
            car.accelerate(random.randint(-10,15))
            car.drive(1)

        if any(car.distance >= 10000 for car in carArray):
            break

    print("\ncar race results:")
    print("{:15s} {:10s} {:10s}".format("registration", "max speed", "distance"))
    print("-" * 40)
    for car in carArray:
        print("{:15s} {:10d} {:10.2f} km".format(car.registrationNumber, car.maxSpeed, car.distance))

main()




