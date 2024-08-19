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

