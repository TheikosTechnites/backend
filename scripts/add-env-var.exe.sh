#!/bin/bash

# Function to validate if the variable name is in uppercase letters
validate_variable_name() {
    local var_name="$1"
    if [[ ! "$var_name" =~ ^[A-Z_]+$ ]]; then
        echo "Error: Variable name must be in capital letters or underscores only."
        exit 1
    fi
}

# Check if exactly one argument is passed
if [ $# -ne 1 ]; then
    echo "Usage: $0 <VARIABLE_NAME>"
    exit 1
fi

variable_name="$1"

# Validate variable name
validate_variable_name "$variable_name"

# Files to update
index_env_file="src/config/index.env.ts"
env_example_file=".env.example"
env_file="src/config/.env"

# Function to add variable to a file
add_variable_to_file() {
    local var_name="$1"
    local file="$2"
    local default_value="$3"
    
    # Check if variable already exists in the file
    if grep -qE "^${var_name}=" "$file"; then
        echo "Variable '${var_name}' already exists in $file."
    else
        echo "${var_name}=${default_value}" >> "$file"
        echo "Added '${var_name}' to $file."
    fi
}

# Update index.env.ts
if ! grep -qE "^const ${variable_name} =" "$index_env_file"; then
    echo "const ${variable_name} = '';" >> "$index_env_file"
    echo "Added 'const ${variable_name} = '';' to $index_env_file."
else
    echo "Variable '${variable_name}' already exists in $index_env_file."
fi

# Update .env.example
add_variable_to_file "$variable_name" "$env_example_file" "example_value"

# Update .env
add_variable_to_file "$variable_name" "$env_file" "production_value"
