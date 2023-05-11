#!/bin/bash

# find all image files in the static/images directory and subdirectories
find static/images -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 |

# loop through each image file
while IFS= read -r -d $'\0' file; do
  # generate the name for the webp file
  webp_file="${file%.*}.webp"

  # convert image to webp format and save to new file
  cwebp -quiet "$file" -o "$webp_file"
done

