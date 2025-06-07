from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from collections import Counter

app = Flask(__name__)
CORS(app)


@app.route('/ejercicio1', methods=['GET'])
def ejercicio1():
    try:
        response = requests.get('https://randomuser.me/api/?results=10')

        if response.status_code != 200:
            return jsonify({"error": "Failed to fetch data from Random User API"}), 500

        data = response.json()
        users = data['results']

        sorted_users = sorted(users, key=lambda user: user['name']['first'].lower())

        return jsonify(sorted_users), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/ejercicio2', methods=['GET'])
def ejercicio2():
    try:
        age_param = request.args.get('age')

        if not age_param:
            return jsonify({"error": "Missing 'age' parameter"}), 400

        try:
            target_age = int(age_param)
        except ValueError:
            return jsonify({"error": "Invalid 'age' parameter. Must be an integer."}), 400

        response = requests.get('https://randomuser.me/api/?results=10')

        if response.status_code != 200:
            return jsonify({"error": "Failed to fetch data from Random User API"}), 500

        data = response.json()
        users = data['results']

        filtered_users = [user for user in users if user['dob']['age'] > target_age]

        if not filtered_users:
            return jsonify({"error": "No user found with an age greater than the specified age"}), 404

        return jsonify(filtered_users[0]), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/ejercicio3', methods=['GET'])
def ejercicio3():
    try:
        response = requests.get('https://randomuser.me/api/?results=5')

        if response.status_code != 200:
            return jsonify({"error": "Failed to fetch data from Random User API"}), 500

        data = response.json()
        users = data['results']

        full_names = [f"{user['name']['first']} {user['name']['last']}" for user in users]
        combined_names = ''.join(full_names).lower()
        alphabetic_chars = ''.join(filter(str.isalpha, combined_names))
        letter_counts = Counter(alphabetic_chars)

        most_common_letter, _ = letter_counts.most_common(1)[0]

        response_data = {
            "full_names": full_names,
            "most_common_letter": most_common_letter
        }

        return jsonify(response_data), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/ejercicio4', methods=['GET'])
def ejercicio4():
    try:
        passenger_count_param = request.args.get('passenger_count')

        if not passenger_count_param:
            return jsonify({"error": "Missing 'passenger_count' parameter"}), 400

        try:
            passenger_count = int(passenger_count_param)
        except ValueError:
            return jsonify({"error": "Invalid 'passenger_count' parameter. Must be an integer."}), 400

        def get_all_starships():
            url = "https://swapi.dev/api/starships/"
            all_starships = []

            while url:
                response = requests.get(url, verify=False)

                if response.status_code != 200:
                    return jsonify({"error": "Failed to fetch data from SWAPI"}), 500

                data = response.json()
                all_starships.extend(data['results'])
                url = data['next']

            return all_starships

        starships = get_all_starships()

        valid_starships = []
        for starship in starships:
            passengers = starship['passengers'].strip()

            if passengers.isdigit() and int(passengers) >= passenger_count:
                hyperdrive_rating = starship['hyperdrive_rating'].strip()

                if hyperdrive_rating.replace('.', '', 1).isdigit():
                    hyperdrive_rating = float(hyperdrive_rating)

                    if hyperdrive_rating <= 1:
                        films = starship['films']

                        if any(f"https://swapi.dev/api/films/{i}/" in films for i in [4, 5, 6]):
                            valid_starships.append(starship)

        if not valid_starships:
            return jsonify({"error": "No starship found that meets the criteria"}), 404

        fastest_starship = sorted(valid_starships, key=lambda s: float(s['hyperdrive_rating'].strip()))[0]

        return jsonify({"starship_name": fastest_starship['name']}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/ejercicio5', methods=['GET'])
def ejercicio5():
    try:
        terrain_param = request.args.get('terrain')

        if not terrain_param:
            return jsonify({"error": "Missing 'terrain' parameter"}), 400

        terrain_param = terrain_param.strip().lower()

        if not terrain_param:
            return jsonify({"error": "Invalid 'terrain' parameter. Must be a non-empty string."}), 400

        def get_all_planets():
            url = "https://swapi.dev/api/planets/" 
            all_planets = []

            while url:
                response = requests.get(url, verify=False)

                if response.status_code != 200:
                    return jsonify({"error": "Failed to fetch data from SWAPI"}), 500

                data = response.json()
                all_planets.extend(data['results'])
                url = data['next']

            return all_planets

        planets = get_all_planets()

        matching_planets = [
            {
                "name": planet["name"],
                "diameter": planet["diameter"],
                "population": planet["population"],
                "climate": planet["climate"]
            }
            for planet in planets
            if terrain_param in planet["terrain"].lower()
        ]

        if not matching_planets:
            return jsonify({"error": f"No planets found with terrain '{terrain_param}'"}), 404

        result = "\n".join([
            f"Planet: {planet['name']}"
            f"\nDiameter: {planet['diameter']}"
            f"\nPopulation: {planet['population']}"
            f"\nClimate: {planet['climate']}"
            f"\n---"
            for planet in matching_planets
        ])

        return result, 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)