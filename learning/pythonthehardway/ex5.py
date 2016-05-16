# Script number five

name = "Mikhail Cruz Andrade"
age = 24
height = 180 # cm
height_inches = height * 0.3937007
weight = 80 # kg
weight_pounds = weight / 0.45349237
eyes = "Brown"
teeth = "White"
hair = "Brown"

# We can use the %s to print an string like parameter
print "Let's talk about %s" % name
# We can use the %d to print a number
print "He's %d cm tall." % height
print "He's %d inches tall" % height_inches
print "He's %d kg heavy." % weight
print "He's %d pounds heavy" % weight_pounds
print "Actually that's not too heavy"

print "He's got the %s eyes and %s hair" % (eyes, hair)
print "His teeth are usually %s depending on the coffee" % teeth

print "I am %s and I am %d years old" % (name, age)

# This line is tricky, try to get it exactly right
print "If I add %d, %d, and %d I get %d" % (age, height, weight, age + height + weight)
