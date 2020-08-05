#!/bin/sh
#Install imagemagick library (probably with brew or apt-get) then
#run by ./compressjpgs [src_dir] -quality [0-100]% [out_dir] 
for PHOTO in "$1"/*.{jpeg,jpg,JPG};
do

    OUTPUT_FILENAME="$(basename "$PHOTO")"
    ORIGINAL_SIZE=$(wc -c "${PHOTO}" | cut -d ' ' -f1)

    convert "$PHOTO" $2 $3 "$4/${OUTPUT_FILENAME%.*}.jpg"
    COMPRESSED_SIZE=$(wc -c "$4/${OUTPUT_FILENAME%.*}.jpg" | cut -d ' ' -f1)
    echo "${OUTPUT_FILENAME%.*}.jpg | saved size: $(expr $ORIGINAL_SIZE - $COMPRESSED_SIZE)"

done