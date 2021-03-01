import pandas as pd
import os
from sklearn.externals import joblib
from joblib import dump, load
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split

File = os.path.abspath('src/ai/english/Grades.csv')
DumpFile = os.path.abspath('src/ai/english/classifier.joblib')
Grades = pd.read_csv(File, sep=',')
Bins = (3, 6, 7, 9)
GroupNames = ['Beginner', 'Medium', 'Advanced']
Grades['Quality'] = pd.cut(Grades['Quality'], bins = Bins, labels = GroupNames)
LabelQuality = LabelEncoder()
Grades['Quality'] = LabelQuality.fit_transform(Grades['Quality'])
X = Grades.drop('Quality', axis=1)
y = Grades['Quality']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0, shuffle = True)
classifier = DecisionTreeClassifier()
classifier.fit(X_train, y_train)
prediction = classifier.predict(X_test)
joblib.dump(classifier, DumpFile)