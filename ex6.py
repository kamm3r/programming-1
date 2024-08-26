# Write a program that asks the user for a number of a month
# and then prints out the corresponding season (spring, summer, autumn, winter)
# Save the seasons as strings into a tuple in your program. We can define
# each season to last three months, December being the first month of winter.

monthNumber =int(input('enter month number: '))

season = "spring", "summer", "autumn", "winter"

spring = 3, 4, 5
summer = 6, 7, 8
autumn = 9, 10, 11
winter = 12, 1, 2

if monthNumber == 3 or monthNumber == 4 or monthNumber == 5:
    print(f'{season[0]}')
elif monthNumber == 6 or monthNumber == 7 or monthNumber == 8:
    print(f'{season[1]}')
elif monthNumber == 9 or monthNumber == 10 or monthNumber == 11:
    print(f'{season[2]}')
elif monthNumber == 12 or monthNumber == 1 or monthNumber == 2:
    print(f'{season[3]}')
else:
    print('invalid number')

# Write a program that asks the user to enter names until
# he/she enters an empty string. After each name is read the program
# either prints out New name or Existing name depending on whether
# the name was entered for the first time. Finally, the program lists out
# the input names one by one, one below another in any order.
# Use the set data structure to store the names.

nameTuple = "new name", "existing name"


