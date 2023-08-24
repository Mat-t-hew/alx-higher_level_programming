#!/usr/bin/python3
import sys


def main():
    arg_count = len(sys.argv) - 1

    if arg_count == 0:
        print("0 arguments:")
    elif arg_count == 1:
        print("1 argument:")
    else:
        print("{} arguments:".format(arg_count))

    for i, arg in enumerate(sys.argv[1:], 1):
        print("{}: {}".format(i, arg))


if __name__ == "__main__":
    main()

