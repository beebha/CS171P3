import csv, cStringIO, codecs
from pattern.web import URL, DOM, plaintext

'''


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
output = open("data_output_Trulia_HP.csv", "wb")
writer = UnicodeWriter(output)
writer.writerow(["State", "County", "Average Listing Price", "Median Sales Price"])

# get the DOM object to scrape for links
url = URL("http://www.trulia.com/home_prices/")
dom = DOM(url.download(cached=True))

# get the rows where all info is contained
all_data_rows = dom.by_tag("tr")

# define the variable to store all the trulia data
all_trulia_data = []

# loop through each row
for ind_data_row in all_data_rows:
    if (ind_data_row.attributes.get("style","") == 'background-color: #FFFFFF;' or ind_data_row.attributes.get("style","") == 'background-color: #EDEFF2;'):

        all_columns = ind_data_row.by_tag("td")

        state = plaintext(all_columns[0].by_tag("a")[0].content)
        avg_listing_price = plaintext(all_columns[1].content)
        median_sales_price = plaintext(all_columns[2].content)
        state_url = URL("http://www.trulia.com" + all_columns[0].by_tag("a")[0].attributes["href"])

        all_trulia_data.append([state, "", avg_listing_price, median_sales_price])

        state_dom = DOM(state_url.download(cached=True))
        all_state_rows = state_dom.by_tag("tr")

        for ind_state_row in all_state_rows:
            if (ind_state_row.attributes.get("style","") == 'background-color: #FFFFFF;' or ind_state_row.attributes.get("style","") == 'background-color: #EDEFF2;'):

                all_state_columns = ind_state_row.by_tag("td")

                county = plaintext(all_state_columns[0].by_tag("a")[0].content)
                county_avg_listing_price = plaintext(all_state_columns[1].content)

                if state == 'District Of Columbia':
                    county_median_sales_price = plaintext(all_state_columns[5].content)
                else:
                    county_median_sales_price = plaintext(all_state_columns[2].content)

                all_trulia_data.append([state, county, county_avg_listing_price, county_median_sales_price])

# write all the rows to the CSV file
writer.writerows(all_trulia_data)

# close the CSV file
output.close()
