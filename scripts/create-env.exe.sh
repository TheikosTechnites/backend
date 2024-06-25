#!/bin/bash

# File paths
example_file=".env.example"
directory="src/config"
filename=".env"
filepath="${directory}/${filename}"

# Create the directory if it doesn't exist
mkdir -p "$directory"

# Check if .env.example exists
if [ ! -f "$example_file" ]; then
    echo "Error: $example_file does not exist."
    exit 1
fi

# Create or overwrite the .env file
echo "# Auto-generated .env file" > "$filepath"

# Read variables from .env.example and write them to the .env file
while IFS= read -r line
do
    # Check if the line is not empty and does not start with a comment
    if [[ -n "$line" && "$line" != \#* ]]; then
        variable_name=$(echo "$line" | cut -d'=' -f1)
        value=$(grep -E "^$variable_name=" "$example_file" | cut -d'=' -f2-)
        echo "${variable_name}=\"${value}\"" >> "$filepath"
    fi
done < "$example_file"

echo ".env file created successfully in ${directory}!"