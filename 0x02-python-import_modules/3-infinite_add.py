#!/usr/bin/python3
import sys


def main():
    total = sum(map(int, sys.argv[1:]))
    
    print(total)

if __name__ == "__main__":
    main()
