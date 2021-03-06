import csv, cStringIO, codecs
from pattern.web import URL, DOM, plaintext

'''
    This file scrapes data from the following site:
    http://en.wikipedia.org/wiki/List_of_U.S._states_by_American_Human_Development_Index

    This is a site that has the US Human Development index rankings by state.

'''

# used code that was introduced in HW2 that writes the rows in the CSV file
class UnicodeWriter:

    def __init__(self, f, dialect=csv.excel, encoding="utf-8", **kwds):
        self.queue = cStringIO.StringIO()
        self.writer = csv.writer(self.queue, dialect=dialect, **kwds)
        self.stream = f
        self.encoder = codecs.getincrementalencoder(encoding)()

    def writerow(self, row):
        self.writer.writerow([s.encode("utf-8") for s in row])
        data = self.queue.getvalue()
        data = data.decode("utf-8")
        data = self.encoder.encode(data)
        self.stream.write(data)
        self.queue.truncate(0)

    def writerows(self, rows):
        for row in rows:
            self.writerow(row)

# Creating the csv output file for writing into as well as defining the writer
output = open("data_output_WIKI_HDI.csv", "wb")
writer = UnicodeWriter(output)

# add header row
writer.writerow(["State", "Rank", "HDI"])


# get the DOM object to scrape for links
url = URL("http://en.wikipedia.org/wiki/List_of_U.S._states_by_American_Human_Development_Index")
dom = DOM(url.download(cached=True))

# get the tables where all info is contained
all_data_tables = dom.by_class("wikitable")

# define the variable to store all the WIKI data
all_wiki_data = []

# loop through each row
for ind_data_table in all_data_tables:
    for ind_data_row in ind_data_table.by_tag("tr"):
        all_columns = ind_data_row.by_tag("td")

        if len(all_columns) > 1:

            # get the state, ranking and human development index
            rank = plaintext(all_columns[0].content)
            state = plaintext(all_columns[2].by_tag("a")[0].content)
            human_dev_idx = plaintext(all_columns[3].content)

            all_wiki_data.append([state, rank, human_dev_idx])

# write all the rows to the CSV file
writer.writerows(all_wiki_data)

# close the CSV file
output.close()
