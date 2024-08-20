name = input('enter your name: ')
print(f'hello, {name}!')

import math
radius = float(input('what is the radius of circle: '))
area = math.pi * radius ** 2
print(f'area of the circle is {area}')


length = float(input('what is the length of the rectangel: '))
width = float(input('what is the width of the rectangel: '))
perimeter = (length + width) * 2

print(f'rectangel perimeter is {perimeter}')

three_integer = input('please enter three number ')
a, b, c = three_integer.split()

sum = int(a) + int(b) + int(c)
product =  int(a) * int(b) * int(c)
average = int(a) / int(b) / int(c)

print(f'sum of the three integer {sum}')
print(f'product of the three integer {product}')
print(f'average of the three integer {average}')


talent = float(input('enter talents: '))
pounds = float(input('enter pounds: '))
lots = float(input('enter lots: '))

# 1 talent is 8,5 kg
# 1 pounds is 425,1 g
# 1 lots is 13.3 g
talentToG = talent * 8500
poundsToG = pounds * 425.1
lotsToG = lots * 13.3
total = talentToG + poundsToG + lotsToG
kilos, grams = '{:,}'.format(total).split(',')
totalkg = int(total / 1000)
totalgrams = total
print(f'total amount in grams {total}')
print(f'total amount in kilograms {kilos} and {grams} grams')

# 3-digit code where each number is between 0 and 9
# 4-digit code where each number is between 1 and 6
import random
threedigit = str(
    str(random.randint(0,9)) +
    str(random.randint(0,9)) +
    str(random.randint(0,9))
)
fourdigit = str(
    str(random.randint(1,6)) +
    str(random.randint(1,6)) +
    str(random.randint(1,6)) +
    str(random.randint(1,6))
)

print(f'3-digit code {threedigit}')
print(f'4-digit code {fourdigit}')


