#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <VARIABLE_NAME>"
    exit 1
fi

# Get the variable name
VARIABLE_NAME=$1

# Validate that the variable name is uppercase letters only
if [[ ! $VARIABLE_NAME =~ ^[A-Z_]+$ ]]; then
    echo "Error: Variable name must be uppercase letters only."
    exit 1
fi

# Define the paths
ENV_FILE=".env"
ENV_EXAMPLE_FILE=".env.example"
INDEX_ENV_FILE="src/config/index.env.ts"

# Function to add variable to .env if it does not already exist
add_variable_to_env_file() {
    local file=$1
    local variable=$2
    if ! grep -q "^${variable}=" "$file"; then
        echo -e "\n${variable}=\"\"" >> "$file"
    fi
}

# Function to add variable to .env.example if it does not already exist
add_variable_to_env_example_file() {
    local file=$1
    local variable=$2
    if ! grep -q "^${variable}$" "$file"; then
        echo -e "\n${variable}" >> "$file"
    fi
}

# Update .env file
add_variable_to_env_file $ENV_FILE $VARIABLE_NAME

# Update .env.example file
add_variable_to_env_example_file $ENV_EXAMPLE_FILE $VARIABLE_NAME

# Update index.env.ts
if ! grep -q "const ${VARIABLE_NAME} =" $INDEX_ENV_FILE; then
    # Insert the new variable assignment after dotenv.config();
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "/dotenv.config();/a\\
const ${VARIABLE_NAME} = process.env.${VARIABLE_NAME} === '';" $INDEX_ENV_FILE
    else
        sed -i "/dotenv.config();/a const ${VARIABLE_NAME} = process.env.${VARIABLE_NAME} === '';" $INDEX_ENV_FILE
    fi

    # Add the new variable to the export statement
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s/export { ENABLE_BUYBACK_V2 };/export { ENABLE_BUYBACK_V2, ${VARIABLE_NAME} };/g" $INDEX_ENV_FILE
    else
        sed -i "s/export { ENABLE_BUYBACK_V2 };/export { ENABLE_BUYBACK_V2, ${VARIABLE_NAME} };/g" $INDEX_ENV_FILE
    fi
fi

echo "Environment variable ${VARIABLE_NAME} added successfully."
