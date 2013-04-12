import csv, cStringIO, codecs


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




count = 0
all_county_data = {}
all_state_data = {}
# open the file for reading
with open('../allDataForProject/US_COUNTIES_AND_STATES_FIPS.csv', 'rU') as f:
    reader = csv.reader(f)

    #iterate through each row
    for row in reader:

        # exclude the header row
        if count != 0:
            fips = row[0]
            county_name = row[1]
            state_name = row[2]
            state_fips = row[3]
            county_fips = row[4]
            dict_key = (state_name.upper() + '-' + county_name.upper()).replace(" ", "")
            all_county_data[dict_key] = {'fips':fips, 'state_fips':state_fips, 'county_fips':county_fips, 'state_name': state_name, 'county_name':county_name}
            if state_name.upper() not in all_state_data:
                all_state_data[state_name.upper()] = {'state_fips':state_fips, 'state_name': state_name}
        count += 1

# read 1st data file
count = 0
with open('../allDataForProject/data_output_Trulia_HP.csv', 'rU') as f:
    reader = csv.reader(f)

    #iterate through each row
    for row in reader:
        # exclude the header row
        if count != 0:
            state_name = row[0]
            county_name = row[1].replace("Saint ", "St. ").replace("Sainte ", "Ste. ")
            avg_listing_price = row[2].replace("$", "").replace(",", "").replace(" ", "")
            median_sales_price = row[3].replace("$", "").replace(",", "").replace(" ", "")
            if county_name != '' and state_name != 'District Of Columbia':
                dict_key = (state_name.upper() + '-' + county_name.upper()).replace(" ", "")
                all_county_data[dict_key]['avg_listing_price'] = avg_listing_price
                all_county_data[dict_key]['median_sales_price'] = median_sales_price

            if county_name == '':
                all_state_data[state_name.upper()]['avg_listing_price'] = avg_listing_price
                all_state_data[state_name.upper()]['median_sales_price'] = median_sales_price
        count += 1

# change this to include more columns
output = open("../allDataForProject/data_output_ALL_COUNTIES.csv", "wb")
writer = UnicodeWriter(output)
writer.writerow([ "FIPS", "STATE_FIPS", "COUNTY_FIPS", "STATE", "COUNTY", "AVERAGE_LISTING_PRICE", "MEDIAN_SALES_PRICE"])

for key, value in all_county_data.iteritems():


    fips = value['fips']
    state_fips = value['state_fips']
    county_fips = value['county_fips']
    state_name = value['state_name']
    county_name = value['county_name']
    avg_listing_price = "-"
    median_sales_price = "-"
    if 'avg_listing_price' in value:
        avg_listing_price = value['avg_listing_price']
    if 'median_sales_price' in value:
        median_sales_price = value['median_sales_price']

    writer.writerow([fips, state_fips, county_fips, state_name, county_name, avg_listing_price, median_sales_price])

output.close()

output = open("../allDataForProject/data_output_ALL_STATES.csv", "wb")
writer = UnicodeWriter(output)
writer.writerow([ "STATE_FIPS", "STATE", "AVERAGE_LISTING_PRICE", "MEDIAN_SALES_PRICE"])

for key, value in all_state_data.iteritems():

    state_fips = value['state_fips']
    state_name = value['state_name']
    avg_listing_price = "-"
    median_sales_price = "-"
    if 'avg_listing_price' in value:
        avg_listing_price = value['avg_listing_price']
    if 'median_sales_price' in value:
        median_sales_price = value['median_sales_price']

    writer.writerow([state_fips, state_name, avg_listing_price, median_sales_price])

output.close()


  