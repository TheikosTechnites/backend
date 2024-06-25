#!/bin/bash

# Check if module name is provided
if [ -z "$1" ]; then
  echo "Please provide a module name."
  exit 1
fi

MODULE_NAME=$1

# Base directory
BASE_DIR="src/modules/$MODULE_NAME"

# Create directory structure
mkdir -p $BASE_DIR/{adapter/{__stub__,dto/{base,input,mapper,output},repository,resolver},entity/{custom-error,enum},framework/{loader,utils},usecase/interface}

# Create files with the module name
touch $BASE_DIR/adapter/__stub__/$MODULE_NAME.stub.ts
touch $BASE_DIR/adapter/dto/base/base.input.ts
touch $BASE_DIR/adapter/dto/base/base.output.ts
touch $BASE_DIR/adapter/dto/input/$MODULE_NAME.input.ts
touch $BASE_DIR/adapter/dto/mapper/$MODULE_NAME.mapper.ts
touch $BASE_DIR/adapter/dto/output/$MODULE_NAME.output.ts
touch $BASE_DIR/adapter/repository/$MODULE_NAME.repository.ts
touch $BASE_DIR/adapter/resolver/$MODULE_NAME.resolver.ts
touch $BASE_DIR/entity/custom-error/$MODULE_NAME.error.ts
touch $BASE_DIR/entity/enum/$MODULE_NAME.enum.ts
touch $BASE_DIR/entity/$MODULE_NAME.model.ts
touch $BASE_DIR/framework/loader/$MODULE_NAME.loader.ts
touch $BASE_DIR/framework/utils/$MODULE_NAME.utils.ts
touch $BASE_DIR/$MODULE_NAME.module.ts
touch $BASE_DIR/usecase/interface/$MODULE_NAME-repository.interface.ts
touch $BASE_DIR/usecase/$MODULE_NAME.usecase.ts

echo "Module $MODULE_NAME created successfully."
