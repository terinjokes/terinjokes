# terinjokes(7) - print a random, unlikely to be funny, joke

## SYNOPSIS

`terinjokes` \[`-w`\]

## DESCRIPTION

When terinjokes is run with no arguments it prints out a random adage.
Adages are not divided into several categories.
All are potentially offensive.

### Options
The options are as follows:

`-w` Wait before termination for an amount of time calculated from the number of characters in the message.
This is useful if it is executed as part of the logout procedure to guarantee that the message can be read before the screen is cleared.

## FILES
Note: relative to the installation location

jokes.json  
  Incorrectly named file that contains the "jokes"

## BUGS
It is unlikely the jokes are funny.
It is still up for debate if this is a bug or a feature.


## HISTORY
Based on fortune-mod version 9708, which is based on the NetBSD fortune 1.4.

It is likely someone worked on this program.

## SEE ALSO
fortune(7)
