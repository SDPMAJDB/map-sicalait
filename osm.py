import requests
import os

# Paramètres
MIN_ZOOM = 10
MAX_ZOOM = 10
MIN_X = 667
MAX_X = 673
MIN_Y = 571
MAX_Y = 575

# Répertoire où stocker les tuiles
TILES_DIR = "tiles"

# URL de base pour les tuiles OSM
BASE_URL = "https://tile.openstreetmap.org/{}/{}/{}.png"

# User agent pour la requête
HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0"
}

# Création des dossiers s'ils n'existent pas
if not os.path.exists(TILES_DIR):
    os.makedirs(TILES_DIR)

for z in range(MIN_ZOOM, MAX_ZOOM + 1):
    for x in range(MIN_X, MAX_X + 1):
        for y in range(MIN_Y, MAX_Y + 1):
            url = BASE_URL.format(z, x, y)
            response = requests.get(url, headers=HEADERS, stream=True)
            response.raise_for_status()

            # Chemin pour sauvegarder la tuile
            tile_path = os.path.join(TILES_DIR, str(z), str(x))
            tile_file = os.path.join(tile_path, f"{y}.png")

            # Création des dossiers s'ils n'existent pas
            if not os.path.exists(tile_path):
                os.makedirs(tile_path)

            with open(tile_file, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

            print(f"Tuile {z}/{x}/{y} téléchargée et sauvegardée.")

print("Toutes les tuiles ont été téléchargées.")
