# Write a program that asks the user to enter the ICAO code of an airport.
# The program fetches and prints out the corresponding airport
# name and location (town) from the airport database used on this course.
# The ICAO codes are stored in the ident column of the airport table.
import mysql.connector

def connectToDatabase():
    return mysql.connector.connect(
        user='root',
        password='root',
        host='localhost',
        database='flight_game',
        charset='utf8mb4',
        collation='utf8mb4_general_ci'
    )

def fetchIcao(icao):
    try:
        connection = connectToDatabase()
        print('Connected to MariaDB successfully!')
        cursor = connection.cursor()
        cursor.execute(f"SELECT name, municipality FROM airport WHERE ident = '{icao}'")
        response = cursor.fetchone()
        return response
    except mysql.connector.Error as error:
        print(f"Error connecting to database: {error}")

# Write a program that asks the user to enter the area code (for example FI)
# and prints out the airports located in that country ordered by airport type.
# For example, Finland has 65 small airports, 15 helicopter airports and so on.

def fetchCountry(country):
    connection = connectToDatabase()
    try:
        cursor = connection.cursor()
        cursor.execute(f"SELECT type, COUNT(*) AS count FROM airport WHERE iso_country = '{country}' GROUP BY type ORDER BY count DESC")
        response = cursor.fetchall()

        return response
    except mysql.connector.Error as error:
        print(f"Error connecting to database: {error}")
    finally:
        if connection:
            connection.close()


# Write a program that asks the user to enter the ICAO codes of two airports.
# The program prints out the distance between the two airports in kilometers.
# The calculation is based on the airport coordinates fetched from the
# database. Calculate the distance using the geopy library:
# https://geopy.readthedocs.io/en/stable/. Install the library by
# selecting View / Tool Windows / Python Packages in your PyCharm IDE,
# write geopy into the search field and finish the installation.
import geopy.distance

def fetchCoordinates(icao):
    connection = connectToDatabase()
    cursor = connection.cursor(dictionary=True)
    cursor.execute(f"SELECT latitude_deg, longitude_deg FROM airport WHERE ident = '{icao}'")
    coordinates = cursor.fetchone()

    cursor.close()
    connection.close()

    return coordinates


def main():
    icao = input("Enter ICAO code: ")
    country = input("Enter country code: ")
    airportIcao = fetchIcao(icao)
    airportCountry = fetchCountry(country)
    airportCoordinates = fetchCoordinates(icao)


    if airportIcao:
        print(f"Name: {airportIcao[0]}")
        print(f"Location: {airportIcao[1]}")
    else:
        print("Airport not found")

    if airportCountry:
        for airport in airportCountry:
            print(f"{airport[0]}: {airport[1]}")

    if airportCoordinates:
        icao2 = input("Enter ICAO code of the second airport: ")
        airportCoordinates2 = fetchCoordinates(icao2)
        if airportCoordinates2:
            coords1 = (airportCoordinates['latitude_deg'], airportCoordinates['longitude_deg'])
            coords2 = (airportCoordinates2['latitude_deg'], airportCoordinates2['longitude_deg'])
            distance = geopy.distance.distance(coords1, coords2).km
            print(f"Distance between the airports: {distance:.2f} km")
        else:
            print("Second airport not found")

main()
