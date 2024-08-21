# Write a program that uses a while loop to print out all
# numbers divisible by three in the range of 1-1000.

some = count = 0

while some != 1000:
    some += 1
    if some % 3 == 0:
        count += 1

print(f'division count {count} times')


# Write a program that converts inches to
# centimeters until the user inputs a negative value. Then the program ends.

inches = float(input('enter inches to convert: '))

conversion = inches * 2.54

while inches > 0:
    print(f'centimeter {inches * 2.54}')
    inches = float(input('enter inches to convert: '))
print('execusion stopped')


# Write a program that asks the user to enter numbers until
# they enter an empty string to quit.
# Finally, the program prints out the smallest
# and largest number from the numbers it received.

number = input('enter a number: ')

while number:
    if number == '':
        break
    print(f'{number}')
    number = input('enter a number: ')
print('execusion stopped')

# Write a game where the computer draws a random integer between 1 and 10.
# The user tries to guess the number until they guess the right number.
# After each guess the program prints out a text: Too high, Too low or Correct.
# Notice that the computer must not change the number between guesses.

import random

guess = int(input('guess a number between 1 and 10: '))

randomNumber = random.randint(1, 10)

while guess != randomNumber:
    if guess > randomNumber:
        print('Too high')
    if guess < randomNumber:
        print('Too Low')
    guess = int(input('guess a number between 1 and 10: '))
print('Correct')
