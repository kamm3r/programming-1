# Write a function that returns a random dice roll between 1 and 6.
# The function should not have any parameters.
# Write a main program that rolls the dice until the result is 6.
# The main program should print out the result of each roll.
import random

count = roll = 0


def diceRoll():
    return  random.randint(1,6)

while roll != 6:
    count += 1
    roll = diceRoll()
    print(f'you rolled {roll}')

# Modify the function above so that it gets the number of
# sides on the dice as a parameter. With the modified function you can
# for example roll a 21-sided role-playing dice. The difference to the
# last exercise is that the dice rolling in the main program
# continues until the program gets the maximum number on the dice,
# which is asked from the user at the beginning.


value =  int(input('what value should be rolled: '))
sidecount = int(input('how many side in a dice: '))

if sidecount < value:
    sidecount = int(input('how many side in a dice: '))
rolledValue =0

def anyDiceRoll(sides: int):
    return  random.randint(1,sides)

while rolledValue != value:
    rolledValue = anyDiceRoll(sidecount)
    print(f'you rolled {rolledValue}')

# Write a function that gets the quantity of
# gasoline in American gallons and returns the number converted to litres.
# Write a main program that asks for a volume in gallons
# from the user and converts the value to liters. The conversion must be
# done by using the function. Conversions continue until
# the user inputs a negative value.

def gallonsToLiters(gallons: float):
    return gallons * 3.785411784

def isNegative(value):
    return value < 0

gallons = 0

while isNegative(gallons) == False:
    gallons = float(input('gallons to convert to liters: '))
    if isNegative(gallons):
        break
    liters= gallonsToLiters(gallons)
    print(f'gallons in liters {liters}')




