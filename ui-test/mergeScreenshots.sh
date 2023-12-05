#!/bin/bash

# Define the paths
videosFolder="/home/runner/work/test/test/ui-test/cypress/screenshots/"          # The folder where Cypress saves video recordings
commonVideosFolder="/home/runner/work/test/test/ui-test/public/screenshots/"  # The common folder where you want to move the videos

# Ensure the common folder exists
mkdir -p "$commonVideosFolder"

# Move video files from subfolders to the common folder
find "$videosFolder" -type f -name "* (failed) (attempt 2).png" -exec mv {} "$commonVideosFolder" \;


echo "Picture files moved to the common folder."