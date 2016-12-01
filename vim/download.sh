#!/bin/bash


/usr/bin/expect <<EOD
  spawn vimgolf-finder random
  expect "Open your web browser?"
  send "n\n"
  expect "Do you want to play?"
  send "n\n"
  interact
EOD
