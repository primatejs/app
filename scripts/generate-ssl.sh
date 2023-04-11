#!/usr/bin/env bash
dir=$1

if [ ! -d $dir ]; then
  mkdir $dir
fi

openssl req -x509 -out $dir/default.crt -keyout $dir/default.key -newkey rsa:2048 -nodes -sha256 -batch
