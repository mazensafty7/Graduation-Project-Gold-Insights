from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import joblib
from tensorflow.keras.models import load_model

app = Flask(__name__)  # ✅ التصحيح هنا

try:
    model = load_model(r'D:\Back-End Part\my-gold\gold-price-forecast-api\lstm_model_97%.keras')
    f_scaler = joblib.load(r'D:\Back-End Part\my-gold\gold-price-forecast-api\feature_scaler.pkl')
    t_scaler = joblib.load(r'D:\Back-End Part\my-gold\gold-price-forecast-api\target_scaler.pkl')
except Exception as e:
    print(f" Failed to load model or scalers: {e}")
    raise

columns_order = ['Gold', 'Silver', 'Oil', 'US Dollar',
                 'S&P 500', 'Interest', 'Inflation', 'Unrate']


@app.route('/api/forecast', methods=['POST'])
def forecast():
    try:
        data = request.get_json()
        features = data.get("features")

        if not features or not isinstance(features, list) or len(features) != 8:
            return jsonify({"error": " 'features' must be a list of 8 numeric values."}), 400

        df_input = pd.DataFrame([features], columns=columns_order)

        feature_columns = df_input.columns.drop('Gold')
        df_input[feature_columns] = f_scaler.transform(
            df_input[feature_columns])
        df_input[['Gold']] = t_scaler.transform(df_input[['Gold']])

        sequence = np.expand_dims(df_input.values, axis=0)
        scaled_prediction = model.predict(sequence)
        predicted_price = t_scaler.inverse_transform(scaled_prediction)[0][0]

        return jsonify({"forecast": float(predicted_price)})

    except Exception as e:
        return jsonify({"error": f" Internal Server Error: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
