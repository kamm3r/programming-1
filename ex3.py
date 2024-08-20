# Write a program that uses a while loop to print out all
# numbers divisible by three in the range of 1-1000.

some = count = 0

while some != 1000:
    some += 1
    if some % 3 == 0:
        count += 1

print(f'division count {count} times')
