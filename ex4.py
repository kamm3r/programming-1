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

# Write a program that asks the user to enter numbers until
# they input an empty string to quit.
# At the end, the program prints out the five greatest
# numbers sorted in descending order.
# Hint: You can reverse the order of sorted list items
# by using the sort method with the reverse=True argument.

ask = input('enter number: ')

array = []
if ask != '':
    ask = int(ask)
    array.insert(0, ask)
count = 0

for i in array:
    value = input('enter number: ')
    if value == '':
        break
    value = int(value)
    count += 1
    array.insert(count, value)

max(array)
array.sort(reverse=True)
print(f'array {array[0:5]}')

# Write a program that asks the user for an integer and tells
# if the number is a prime number.
# Prime numbers are number that are only divisible by one or the number itself.
#   For example, 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
#   On the other hand, 21 is not a prime number as it is divisible by 3 and 7.

num = int(input("Enter a number: "))

flag = False

if num == 0 or num == 1:
    print(num, "is not a prime number")
elif num > 1:
    for i in range(2, num):
        if (num % i) == 0:
            flag = True
            break

    if flag:
        print(num, "is not a prime number")
    else:
        print(num, "is a prime number")
