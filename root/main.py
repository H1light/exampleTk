from flask import Flask, render_template, redirect, request, abort
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
import random
import sqlite3
import json
from datetime import *
from pymongo import *
from time import sleep

app = Flask(__name__)
app.config['SECRET_KEY'] = 'bolshye_visovy_zashita'


def main():
    app.run(port=8080, host='127.0.0.1')

@app.route("/")
def index():
    with open('data.json') as file:
        data = json.load(file)
    return render_template("index.html", LED=data["LED"], DNAT=data["DNAT"])

if __name__ == '__main__':
    main()