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

name = input('enter a name: ')
count = 0
nameArray = []
if name  in nameArray:
    print('existing name')
else:
    print('new name')
if name != '':
    nameArray.insert(count, name)

while name != '':
    name = input('enter a name: ')
    if name == '':
        break
    if name  in nameArray:
        print('existing name')
    else:
        print('new name')
    count += 1
    nameArray.insert(count, name)

# Write a program for fetching and storing airport data.
# The program asks the user if they want to enter a new airport,
# fetch the information of an existing airport or quit.
# If the user chooses to enter a new airport,
# the program asks the user to enter the ICAO code and name of the airport.
# If the user chooses to fetch airport information instead,
# the program asks for the ICAO code of the airport and prints out
# the corresponding name. If the user chooses to quit, the program
# execution ends. The user can choose a new option as many times
# they want until they choose to quit. (The ICAO code is an identifier
# that is unique to each airport. For example,
# the ICAO code of Helsinki-Vantaa Airport is EFHK.
# You can easily find the ICAO codes of different airports online.)
import csv

print('do you want to fetch existing airport')
userinput = 'yes'

def fetchAirport():
    airport = input('enter a airport ICAO code name: ')
    with open('airports.csv', newline='') as csvfile:
        data = csv.DictReader(csvfile)
        icao, iata, *_ = data.fieldnames
        for port in data:
            if airport == port[icao]:
                print(port['name'])
                print(port)


while userinput == 'yes':
    userinput = input('type yes if you want to continue: ')
    if userinput != 'yes':
        break
    fetchAirport()

print('quit the program')
