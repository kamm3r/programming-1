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
