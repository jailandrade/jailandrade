# -*- coding: utf-8 -*-

def multiplesOf(number):
	multiplys = []

	i = 1
	while i < number:
		if i % 3 == 0 or i % 5 == 0:
			multiplys.append(i)
		i += 1

	return sum(multiplys)

def sum(multiplys):
	suma = 0

	for d in multiplys:
		suma = suma + d

	return suma

print multiplesOf(10)
