# Write a program that fetches and prints out a random Chuck Norris
# joke for the user. Use the API presented here:
# https://api.chucknorris.io/. The user should only be shown the joke text.

import requests

def fetch():
    response = requests.get("https://api.chucknorris.io/jokes/random")
    return response.json()

joke = fetch()
print(f'{joke['value']}')

# Familiarize yourself with the OpenWeather weather API at:
# https://openweathermap.org/api. Your task is to write a program
# that asks the user for the name of a municipality and then prints out
# the corresponding weather condition description text and temperature
# in Celsius degrees. Take a good look at the API documentation.
# You must register for the service to receive the API key required
# for making API requests. Furthermore, find out how you can
# convert Kelvin degrees into Celsius.

def fetch(city):
    apiKey = "bfda36693f3141f05c906f6ee275bfdc"
    response = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}")
    return response.json()

def main():
    city = input("Enter city name: ")

    weatherData = fetch(city)
    weather = weatherData['weather'][0]['description']
    temp = weatherData['main']['temp'] - 273.15

    print(f'weather in {city}')
    print(f'Weather: {weather}')
    print(f'Temperature: {temp:.2f}°C')

main()


