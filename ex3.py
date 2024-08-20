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
    print(f'centimeter {conversion}')
    inches = float(input('enter inches to convert: '))
print('execusion stopped')

