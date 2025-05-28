#!/bin/bash
cd /home/kavia/workspace/code-generation/quicknote-102509-b006674e/quicknote
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

