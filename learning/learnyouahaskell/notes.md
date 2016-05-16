# Notes on Haskell

The else part in if statements is mandatory in Haskell

When a function doesn't take any parameters, we usually say it's definition (or a name)

We can use the let keyword to define a name right in GHCI

The ++ operator is used for putting two lists together

The : cons operator is used for putting something at the beginning of a list

!! is used for get the index of a element, example: "jail" !! 2 returns 'i'

Basic functions for lists

head [1,2,3,4,5] returns 1, the first element

tail [1,2,3,4,5] returns [2,3,4,5], cuts the first element

last [1,2,3,4,5] returns 5, the last element

init [1,2,3,4,5] returns [5,4,3,2]

length [1,2,3] returns 3

null [1,2,3,4,5] check if a list is empty, returns true or false

reverse [1,2,3,4,5] returns [5,4,3,2,1]

take 3 [1,2,3,4,5] returns [1,2,3] the n first numbers of the list

drop 2 [1,2,3,4,5] returns [3,4,5] dropping the n first numbers of the list

maximum [1,2,3,4,5,6] returns 6, the maximum number ordered

minimum [1,2,3,4,5,6] returns 1, the minimum number ordered

sum [1,2,3,4,5] returns 15, sum the numbers on the list

product [1,2,3] returns 6, the product of the numbers on the list

4 `elem` [1,2,3,4] returns true because 4 exists on the list

We can fill a list with ranges, the syntax is [n..m] or [n, s.. m]

We can produce infinit lists with [5, 10..] and if we want the n elements of the list we can handle it with

take 10 [2, 4..]

With cycle takes a list and cycles it into a infinite list. With repeat takes an element and produces an infinit list of just that element
