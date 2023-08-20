#!/usr/bin/python3
from calculator_1 import add, subtract, multiply, divide


def main():
    a = 10
    b = 5
    print("Add: {} + {} = {}".format(a, b, add(a, b)))
    print("Subtract: {} - {} = {}".format(a, b, subtract(a, b)))
    print("Multiply: {} * {} = {}".format(a, b, multiply(a, b)))
    print("Divide: {} / {} = {}".format(a, b, divide(a, b)))


if __name__ == "__main__":
    main()

