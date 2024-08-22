# Write a program that asks the user how many dice to roll.
# The program rolls all the dice once and prints out the sum of the numbers.
# Use a for loop.

import random

dices = int(input('enter dice count: '))
result = []
sum = 0
for dice in range(dices):
    roll = random.randint(1,6)
    result.append(roll)
    sum += roll

print(f'rolled dice {result} sum is {sum}')
