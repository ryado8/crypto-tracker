with open("vocab-log.txt", "a") as file:
    file.write("ai.\ntomodachi.\n")
    print(file.closed)

print(file.closed)