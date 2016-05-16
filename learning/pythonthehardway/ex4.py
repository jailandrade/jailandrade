# Script number 4

# Assign 100 to the var cars
cars = 100
# Assing 4.0 to the variable space_in_a_car
space_in_a_car = 4.0
# Assing 30 to the variable drivers
drivers = 30
# Assing 90 to the variable passengers
passengers = 90
# Assing cars minus drivers to the variable cars_not_driven
cars_not_driven = cars - drivers
# Assign drivers to the variable cars_driven
cars_driven = drivers
# Assign cars_driven multiply by space in a car to the variable carpool_capacity
carpool_capacity = cars_driven * space_in_a_car
# Assign passengers divided by cars_driven to average passengers
average_passengers_per_car = passengers / cars_driven

print "There are", cars, "cars available"
print "There are only", drivers, "drivers available"
print "There will be", cars_not_driven, "empty cars today"
print "We can transport", carpool_capacity, "people today"
print "We have", passengers, "to carpol today"
print "We need to put above", average_passengers_per_car, "in each car"
