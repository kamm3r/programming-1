# Implement the following class hierarchy using Python:
# A publication can be either a book or a magazine.
# Each publication has a name. Each book also has an author
# and a page count, whereas each magazine has a chief editor.
# Also write the required initializers to both classes.
# Create a print_information method to both subclasses for printing
# out all information of the publication in question. In the main program,
# create publications Donald Duck (chief editor Aki Hyyppä)
# and Compartment No. 6 (author Rosa Liksom, 192 pages).
# Print out all information of both publications using
# the methods you implemented.

class publication:
    def __init__(self) -> None:
        self.name = "dd"

class book(publication):
    def __init__(self, author, pageCount) -> None:
        super().__init__()
        self.author = author
        self.pageCount = pageCount

    def printInfo(self):
        print(f'author: {self.author}, page count: {self.pageCount}')

class magazine(publication):
    def __init__(self, chiefEditor) -> None:
        super().__init__()
        self.chiefEditor = chiefEditor

    def printInfo(self):
        print(f'chief editor: {self.chiefEditor}')

def main():
    mag = magazine("Aki Hyypiä")

    ebook =  book('Rosa Liksom', 192)

    mag.printInfo()
    ebook.printInfo()

main()
