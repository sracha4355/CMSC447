# concatenates file directory with file name, returns file contents as a string
def read_file(file_directory, file_name): 
    file = open(f"{file_directory}\\{file_name}")
    content = file.read()
    file.close()
    return content