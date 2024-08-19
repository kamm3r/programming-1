money = float(input('enter amount of money: '))
if money >= 5:
    print('you can buy a soy latte.')

cat = input('enter the name of the cat: ')
dog = input('enter the name of the dog: ')

if cat==dog:
    print('oh my! the cat and dog have the same name!')

age = int(input("Enter age: "))
if 15 <= age < 18:
    weight = float(input("Enter weight (kg): "))
if (age >=18 or age>=15 and weight >=55):
    print("The medicine can be used.")
else:
    print('the medicine cannot be used')


age = int(input("Enter your age: "))
if age>=65:
    print("You are retired.")
elif age>=18:
    print("You are working-age.")
elif age>=7:
    print("You are in school.")
else:
    print("You are a small child.")
