#!/bin/bash

ls > zzzfilelist.txt

currentfilename=`head -n 1 zzzfilelist.txt`

while [ "${currentfilename}" != "zzzbash.sh" ]
do
	newfilename=${currentfilename:0:-5}
	
	ebook-convert "${currentfilename}" /home/aadi/learn2code/repos/ebookconverter/uploads/zzzconverted/"${newfilename}.mobi"
	
	rm "${currentfilename}"
	
	ls > zzzfilelist.txt
	
	currentfilename=`head -n 1 zzzfilelist.txt`
done
