import os

# This will create folder
for i in range(0, 10):
    os.mkdir(f"day{i+1}")


# This will create a file
for i in range(0, 11):
    f = open(f"day{i+35}.html", "a")


# This will delete folder
for i in range(0, 10):
    os.rmdir(f"day{i+1}")


# This will delete the file
for i in range(0, 10):
    os.remove(f"day{i+25}.html")