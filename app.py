from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sports')
def sports():
    return render_template('sports.html')

@app.route('/knicks')
def knicks():
    return render_template('knicks.html')





if __name__ == '__main__':
    app.run(debug=True)