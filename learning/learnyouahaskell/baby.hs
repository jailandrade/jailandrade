-- My first program in Haskell
--
-- squareSum s = [x ^ 2 | x <- s, x ` sum ` s]
--
removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]
-- Regresa el doble de un numero dado
doubleMe x = x + x
-- Regresa el doble de dos numeros dados
doubleUs x y = x*2 + y*2
-- Regresa el doble de dos numeros dados
doubleDoubleMe x y = doubleMe x + doubleMe y
-- Regresa el doble de un numero si x es menor que 100
doubleSmallNumber x = if x > 100 then x else x * 2
-- Regresa
compareNumbers x y = (if x > y then "x es mas grande" else "y es mas grande")

length' xs = sum [1 | _ <- xs]
