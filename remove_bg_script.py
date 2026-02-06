from rembg import remove
from PIL import Image
import os

# Define paths
input_path = os.path.join('public', 'img', 'Mypic.jpeg')
output_path = os.path.join('public', 'img', 'Mypic_nobg.png')

print(f"Input path: {input_path}")
print(f"Output path: {output_path}")

if not os.path.exists(input_path):
    print(f"Error: File not found at {input_path}")
    exit(1)

print("Removing background... This may take a moment to download the model if it's the first run.")

try:
    with open(input_path, 'rb') as i:
        input_data = i.read()
        output_data = remove(input_data)
        
        with open(output_path, 'wb') as o:
            o.write(output_data)
            
    print(f"Success! Saved transform image to {output_path}")

except Exception as e:
    print(f"An error occurred: {e}")
