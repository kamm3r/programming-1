# Write a program that asks a fisher the length of a zander in centimeters.
# If the zander does not fulfill the size limit, the program instructs
# to release the fish back into the lake and notifies the user of
# how many centimeters below the size limit the caught fish was.
# A zander must be 42 centimeters or longer to meet the size limit.

size = float(input('zander size is: '))

if size >= 42:
    print('this is a valid size my brother')
else:
    print('this does not meet the required size L')

# Write a program that asks the user to enter the cabin class of
# a cruise ship and then prints out a written description
# according to the list below. You must use
# an if/elif/else structure in your solution.
  # LUX: upper-deck cabin with a balcony.
  # A: above the car deck, equipped with a window.
  # B: windowless cabin above the car deck.
  # C: windowless cabin below the car deck.
# If the user enters an invalid cabin class, the program outputs
# an error message Invalid cabin class.

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


# Write a program that asks the user to enter a year and
# notifies the user whether the input year is a leap year.
# A year is a leap year if it is divisible by four.
# However, years divisible by 100 are leap years only
# if they are also divisible by 400.

year = int(input('enter a year: '))

if ((year % 400 == 0) or (year % 100 != 0) and (year % 4 ==0)):
    print('this is a leap year')
else:
    print('not a leap year')
