#!/usr/bin/env bash
set -e

echo "=== Building Production Bundle ==="
npm run build

echo "=== Creating Submission Zip ==="
ZIP_NAME="airbnb_clone_submission.zip"
rm -f "$ZIP_NAME"

zip -r "$ZIP_NAME" \
  src/ \
  public/ \
  architecture/ \
  .agents/ \
  prompts_sequence.md \
  package.json \
  package-lock.json \
  tsconfig.json \
  tsconfig.app.json \
  tsconfig.node.json \
  vite.config.ts \
  tailwind.config.js \
  postcss.config.js \
  index.html \
  README.md \
  -x "*.DS_Store" "node_modules/*" "dist/*" ".git/*"

echo "=== Packaging Complete ==="
ls -lh "$ZIP_NAME"
echo ""
echo "Deliverable archive created successfully: $ZIP_NAME"
