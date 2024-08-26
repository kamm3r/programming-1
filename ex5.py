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

# Write a function that gets a list of integers as a parameter.
# The function returns the sum of all the numbers in the list.
# For testing, write a main program where you create a list,
# call the function, and print out the value it returned.

numArray = [21, 54, 394, 12, 32]
print(f'number list {numArray}')

def sumNumberArray(numberArray):
    result = 0
    for number in numberArray:
        result += number
    return result

sumOfList = sumNumberArray(numArray)
def main():
    print(f'sum of all numbers in the list {sumOfList}')

main()

# Write a function that gets a list of integers as a parameter.
# The function returns a second list that is otherwise the same
# as the original list except that all uneven numbers have been removed.
# For testing, write a main program where you create a list,
# call the function, and then print out both the original
# as well as the cut-down list.

intList = [21, 54, 394, 12, 32, 34, 12, 93, 239]
print(f'list used in next function {intList}')

def removeUneven(listnumber):
    for number in listnumber:
        if number % 2 != 0:
            listnumber.remove(number)
    return listnumber

print(f'remove uneven numbers from list {removeUneven(intList)}')

# Write a function that receives two parameters:
# the diameter of a round pizza in centimeters
# and the price of the pizza in euros. The function calculates
# and returns the unit price of the pizza per square meter.
# The main program asks the user to enter the diameter and
# price of two pizzas and tells the user which pizza provides
# better value for money (which of them has a lower unit price).
# You must use the function you wrote for calculating the unit prices.

import math

pizzaDiameter = float(input('pizza diameter in centimeters: '))
pizzaPrice = float(input('pizza pice in euros: '))

def goodEats(diameter, price):
    return price / (math.pi * math.pow(diameter / 2, 2)/10000)

def priceRatio():
    print(f'cost per square meter {goodEats(pizzaDiameter, pizzaPrice)}')

priceRatio()
