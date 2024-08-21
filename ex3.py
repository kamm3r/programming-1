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

# Write a program that asks the user for a username and password.
# If either or both are incorrect,
# the program ask the user to enter the username and password again.
# This continues until the login information is correct
# or wrong credentials have been entered five times.
# If the information is correct, the program prints out Welcome.
# After five failed attempts the program prints out Access denied.
# The correct username is python and password rules.

username = password = ''
retry = 0

while retry != 5:
    retry += 1
    if username != 'python' and password != 'rules':
        username = input('enter username: ')
        password = input('enter password: ')
    if username != 'python':
        username = input('enter username: ')
    if password != 'rules':
        password = input('enter password: ')
    print(f'retry count {retry}')
if retry == 5:
    print('Access denied')
else:
    print('welcome')


# Implement an algorithm for calculating an approximation for the value of pi (π).
# Let's assume that A is a unit circle.
# A unit circle has the radius of one and it is centered at the origin (0,0).
# Smallest possible square B is drawn around
# the unit circle so that circle A is completely inside the square.
# The corners of the square are now (-1,-1), (1, -1), (1, 1), and (-1, 1).
# If a large number of random points are scattered inside the square,
# the fraction of points that fall inside the circle
# A correlates with the fraction of the area of circle
# A compared to the area of square
# B: πr^2/4 = π*1^2/4 = π/4.
# This can be used as a simple method for calculating
# an approximation of the value of pi:
# Let's generate a large number of random points,
# such as one million, inside square B.
# Let N be the total number of random points.
#Each point inside the square is tested for whether it resides inside circle A.
# Let n be the total number of points that fall inside circle A.
# Now we have n/N≈π/4, and from that we get π≈4n/N.
# Write a program that asks the user how many random points to generate,
# and then calculates the approximate value of pi
# using the method explained above.
# At the end, the program prints out the approximation of pi to the user.
# (Notice that it is easy to test if a point falls
# inside circle A by testing if it fulfills the inequation x^2+y^2<1.).

points = int(input('enter the number of points: '))
circle = 0
totalPoints = 0
approximate= 0

while totalPoints < points:
    x = random.uniform(-1,1)
    y = random.uniform(-1,1)

    origin = x ** 2 + y ** 2

    if origin <= 1:
        circle += 1

    totalPoints += 1

    approximate = 4 * circle / totalPoints

print(f'output random points: {points} estimated points: {approximate}')
