# zander(kuha) minimum size is 42 cm

size = float(input('zander size is: '))

if size >= 42:
    print('this is a valid size my brother')
else:
    print('this does not meet the required size L')

# poor vs rich brother

print('cabin classes LUX, A, B, C')
cabin = input('choose the richness status: ')

if cabin == 'LUX' or cabin == 'lux':
    print(f'{cabin}: upper-deck cabin with a balcony.')
elif cabin == 'A' or cabin == 'a':
    print(f'{cabin}: above the car deck, equipped with a window.')
elif cabin == 'B' or cabin == 'b':
    print(f'{cabin}: windowless cabin above the car deck.')
elif cabin == 'C' or cabin == 'c':
    print(f'{cabin}: windowless cabin below the car deck.')
else:
    print(f'invalid cabin class {cabin}')


# Write a program that asks for the biological gender and hemoglobin value (g/l).
# The program the notifies the user if the hemoglobin value is low, normal or high.
# A normal hemoglobin value for adult females is between 117-155 g/l.
# A normal hemoglobin value for adult males is between 134-167 g/l.

gender = input('what gender are you: ')
hemo = int(input('what is your hemoglobin value '))

if gender == 'woman' or gender == 'female':
    if hemo < 134:
        print('hemoglobin levels is too low')
    elif hemo >  167:
           print('your hemoglobin levels is too high')
    else:
        print('normal hemoglobin levels')
elif gender == 'man' or gender == 'male':
    if hemo < 117:
        print('hemoglobin levels is too low')
    elif hemo >  155:
           print('your hemoglobin levels is too high')
    else:
        print('normal hemoglobin levels')
else:
    print('not valid')
