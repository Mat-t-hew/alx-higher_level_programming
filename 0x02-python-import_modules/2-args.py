#!/usr/bin/python3
import sys


def main():
    arg_count = len(sys.argv) - 1

    if arg_count == 0:
        print("Number of arguments:.")
    elif arg_count == 1:
        print("Number of argument:")
    else:
        print("Number of arguments:")

    for i, arg in enumerate(sys.argv[1:], 1):
        print("{}: {}".format(i, arg))


if __name__ == "__main__":
    main()

