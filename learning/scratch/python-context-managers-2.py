try:
    with open("learning/scratch/vocab-list.py", "a") as file:
        file.write("taberu\n")
        raise ValueError
except ValueError:
    print(file.closed)
    