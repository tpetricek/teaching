"""Convert an image to grayscale and map black..white onto a gradient
between two colors.

Usage: python recolor.py input.png output.png "#1a1a40" "#f0e0c0"
"""
import sys
from PIL import Image, ImageOps


def main():
    if len(sys.argv) != 5:
        print(__doc__)
        sys.exit(1)
    src, dst, dark, light = sys.argv[1:]
    img = Image.open(src)
    alpha = img.getchannel("A") if "A" in img.getbands() else None
    out = ImageOps.colorize(img.convert("L"), black=dark, white=light)
    if alpha is not None:
        out.putalpha(alpha)
    out.save(dst)


if __name__ == "__main__":
    main()
