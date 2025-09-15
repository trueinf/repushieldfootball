#!/bin/bash
set -e

echo "Starting build process..."

# Check if yarn.lock exists, use yarn, otherwise use npm
if [ -f "yarn.lock" ]; then
    echo "Using Yarn..."
    yarn install --frozen-lockfile
    yarn build
else
    echo "Using NPM..."
    npm ci
    npm run build
fi

echo "Build completed successfully!"
