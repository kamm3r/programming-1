# Implement a Flask backend service that tells whether a number received
# as a parameter is a prime number or not. Use the prior prime number
# exercise as a starting point. For example, a GET request for number
# 31 is given as: http://127.0.0.1:5000/prime_number/31.
# The response must be in the format of {"Number":31, "isPrime":true}.

from flask import Flask
from ex7 import connectToDatabase

app = Flask(__name__)

@app.route("/")
def index():
    return "type number to this url /prime_number/{number} to check if it is a prime number"

@app.route("/prime_number/<int:num>")
def prime_number(num):
    flag = False

    if num == 0 or num == 1:
        return f'{num} is not a prime number'
    elif num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                flag = True
                break
    if flag == True:
        return f'{num} is not a prime number'
    else:
        return f'{num} is a prime number'


# Implement a backend service that gets the ICAO code of an airport
# and then returns the name and location of the airport in JSON format.
# The information is fetched from the airport database used on this course.
# For example, the GET request for EFHK would be:
# http://127.0.0.1:5000/airport/EFHK. The response must be in the format of:
# {"ICAO":"EFHK", "Name":"Helsinki-Vantaa Airport", "Location":"Helsinki"}.

@app.route("/airport/<string:icao>")
def airport(icao):
    connection = connectToDatabase()
    cursor = connection.cursor()
    cursor.execute(f"SELECT name, municipality FROM airport WHERE ident = '{icao}'")
    airport = cursor.fetchone()

    return {"ICAO": icao, "Name": airport['name'], "Location": airport['municipality']}
