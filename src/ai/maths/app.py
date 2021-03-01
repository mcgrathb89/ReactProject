from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
from sklearn.externals import joblib
import numpy as np
import sys

flask_app = Flask(__name__)
app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Maths Grade Identifier", 
		  description = "Predict the most suitable course for a student based upon their Maths grade")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
				  {'mathsGrade': fields.Float(required = True, 
				  							   description="Maths Grade", 
    					  				 	   help="Grade entry cannot be blank")})

classifier = joblib.load('classifier.joblib')

@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData = request.json
			data = [val for val in formData.values()]
			prediction = classifier.predict(np.array(data).reshape(1, -1))
			types = { 1: "Beginners", 2: "Medium", 0: "Advanced"}
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": types[prediction[0]]
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})
   
   #  flask run --host=127.0.0.1 --port=8000