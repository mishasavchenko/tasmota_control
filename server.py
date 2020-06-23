import os
from flask import Flask, render_template
from flask import request, redirect

app = Flask(__name__, template_folder='dashboard')



@app.route("/")
def index():
    return render_template("index.html", message="Hello Flask!");

#
# @app.route('/get_color', methods=['GET', 'POST'])
# def get_color():
#     print("A")
#     print(request.form['color'])
#     return redirect('/')
#
# @app.route("/form", methods=["GET"])
# def get_form():
#     return render_template('index.html')
#
# @app.route("/",methods=['GET', 'POST'] )
# def main():
#     color = "FFFFFF"
#     new_color = request.form.get('color', '')
#     if re.search(r'^[0-9A-F]{6}$', new_color):
#         color = new_color
#
#     return render_template('main.html', color = color)
#
# @app.route('/color', methods=['POST'])
# def color():
#     print(request.form.get('rgb'))
#     return redirect('/')

#
# @app.route('/')
# def index():
#     return render_template('index.html',data=[{'name':'red'}, {'name':'green'}, {'name':'blue'}])

@app.route("/test" , methods=['GET', 'POST'])
def test():
    select = request.form.get('comp_select')
    return(str(select)) # just to see what select is

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)
