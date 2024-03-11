
from flask import Flask, request, jsonify

import pickle
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in your app
app.config['SECRET_KEY'] = 'supersecret'

scaler = pickle.load(open('E:\\Comsats\\Diabities_Detection_System\\BackEnd_PythonFlask\\scaler.pkl', 'rb'))

model = pickle.load(open('E:\Comsats\Diabities_Detection_System\BackEnd_PythonFlask\svm_model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def home():
    prediction = -1
    if request.is_json:
        data = request.json
        pregs = int(data.get('pregs'))
        gluc = int(data.get('gluc'))
        bp = int(data.get('bp'))
        skin = int(data.get('skin'))
        insulin = float(data.get('insulin'))
        bmi = float(data.get('bmi'))
        func = float(data.get('func'))
        age = int(data.get('age'))

        input_features = [[pregs, gluc, bp, skin, insulin, bmi, func, age]]
        prediction = model.predict(scaler.transform(input_features))
        print(prediction)

        return jsonify({'prediction': prediction.tolist()})  
    return jsonify({'error': 'Invalid input format'})

if __name__ == '__main__':
    app.run(debug=True)