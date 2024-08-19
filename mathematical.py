import math

fahrenheit_str = input('enter tempature in fahrenheit: ')
fahrenheit = float(fahrenheit_str)
celsius = (fahrenheit-32)*5/9
print(f'the tempature in celsius: {celsius:6.2f}')
print('no rounding the number')
print(f'the tempature in celsius: {celsius}')

print(f"{'Pi':12s}:{math.pi:10.5f}")
print(f"{'e':12s}:{math.e:10.5f}")
