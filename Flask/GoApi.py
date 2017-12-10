from flask import Flask, session, render_template
from flask_googlemaps import Googlemaps
import requests

app = Flask(__name__)

# class imgs:
#     def __init__(self, url):
#         self.url = url
#
# imgs = [
#     imgs("https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg"),
#     imgs("https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg")
# ]
# # restos_byKey = {Resto.key: resto for resto in Restos}
#
# @app.route('/')
# def main():
#     return (render_template('main.html', imgs=imgs))
#
# @app.route('/login', methods=['POST'])
# def login():
#     if request.form['password'] == 'password' and request.form['username'] == 'admin':
#         session['logged_in']== True
#     else:
#         print ('wrong password')
#
#     return (render_template('login.html'))
@app.route('/')
def main():
    return 'this is the main page'

@app.route('/tasks', methods = ['GET'])
def getTasks():
    r = requests.get("https://maps.googleapis.com/maps/api/geocode/json?address=88+Queens+Quay+ONT&key=AIzaSyA-EM6qadH2vgtMtR84glvgTatnl0mQXEc&callback=initMap")
    if r == None:
        return ('request failed')
    else:
        return r.text

@app.route('/map')
def showMap():
    return (render_template('map.html'))


if __name__=='__main__':
    app.run(debug=True)