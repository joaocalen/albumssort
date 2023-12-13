from PIL import Image

def split_image(image_path):
    """
    This function takes an image, splits it in half, and saves two new images.
    """
    # Open the image
    with Image.open(image_path) as img:
        # Calculate the splitting point
        middle_point = img.width // 2

        # Split the image into two halves
        left_half = img.crop((0, 0, middle_point, img.height))
        right_half = img.crop((middle_point, 0, img.width, img.height))

        # Resize both halves to 120x180
        left_half_resized = left_half.resize((120, 180))
        right_half_resized = right_half.resize((120, 180))

        # Save the split images
        left_half_resized.save('left_half.jpg')
        right_half_resized.save('right_half.jpg')

    return 'left_half.jpg', 'right_half.jpg'

# Example usage
# split_image("path_to_your_image.jpg")
