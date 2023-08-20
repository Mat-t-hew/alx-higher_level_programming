#!/usr/bin/python3
from calculator_1 import add, sub, mul, div


def main():
    a = 10
    b = 5
    print("Add: {} + {} = {}".format(a, b, add(a, b)))
    print("Subtract: {} - {} = {}".format(a, b, sub(a, b)))
    print("Multiply: {} * {} = {}".format(a, b, mul(a, b)))
    print("Divide: {} / {} = {}".format(a, b, div(a, b)))


if __name__ == "__main__":
    main()

