#!/usr/bin/python3
def remove_char_at(str, n):
    if n < 0 or n >= len(str):  # Handle out of ra
        return str

    new_str = ""
    for idx, char in enumerate(str):
        if idx != n:
            new_str += char

    return new_str
