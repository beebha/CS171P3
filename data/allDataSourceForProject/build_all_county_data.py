import csv

count = 0
indent = "    "

# open the source file for reading
with open('ACS_11_1YR_Consolidated.csv', 'rU') as f:
    reader = csv.reader(f)
    startup = True

    # Creating the output file for writing
    output = open("data_output_locale_census_data2.json", "wb")
    
    # Open output data structure
    output.write("{\n")

    #iterate through each row
    for row in reader:
        # exclude the header row
        if count != 0:
            if (startup):
                startup = False
            else:
                # Close previous object
                output.write(indent + "},\n")


            output.write(indent + "\"" + row[0] + "\":{\n")
            output.write(indent + indent + "\"locale\":\"" + row[151] + "\",\n")
            output.write(indent + indent + "\"stateID\":" + row[149] + ",\n")
            output.write(indent + indent + "\"state\":\"" + row[150] + "\",\n")
            output.write(indent + indent + "\"workHomePct\":" + row[1] + ",\n")
            output.write(indent + indent + "\"meanCommute\":" + row[2] + ",\n")
            output.write(indent + indent + "\"occ\":{\n")
            output.write(indent + indent + indent + "\"mgmtBusSciArtPct\":" + row[3] + ",\n")
            output.write(indent + indent + indent + "\"servicePct\":" + row[4] + ",\n")
            output.write(indent + indent + indent + "\"salesOffPct\":" + row[5] + ",\n")
            output.write(indent + indent + indent + "\"natresConstrMaintPct\":" + row[6] + ",\n")
            output.write(indent + indent + indent + "\"prodTransPct\":" + row[7] + ",\n")
            output.write(indent + indent + indent + "\"agForMinePct\":" + row[8] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"indust\":{\n")
            output.write(indent + indent + indent + "\"constrPct\":" + row[9] + ",\n")
            output.write(indent + indent + indent + "\"mfgPct\":" + row[10] + ",\n")
            output.write(indent + indent + indent + "\"wholesalPct\":" + row[11] + ",\n")
            output.write(indent + indent + indent + "\"retailPct\":" + row[12] + ",\n")
            output.write(indent + indent + indent + "\"transStorUtilPct\":" + row[13] + ",\n")
            output.write(indent + indent + indent + "\"infoPct\":" + row[14] + ",\n")
            output.write(indent + indent + indent + "\"finRealestPct\":" + row[15] + ",\n")
            output.write(indent + indent + indent + "\"proSciMgmtAdminPct\":" + row[16] + ",\n")
            output.write(indent + indent + indent + "\"eduHealthPct\":" + row[17] + ",\n")
            output.write(indent + indent + indent + "\"svcEntPct\":" + row[18] + ",\n")
            output.write(indent + indent + indent + "\"otherPct\":" + row[19] + ",\n")
            output.write(indent + indent + indent + "\"pubAdminPct\":" + row[20] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"employer\":{\n")
            output.write(indent + indent + indent + "\"privPct\":" + row[21] + ",\n")
            output.write(indent + indent + indent + "\"pubPct\":" + row[22] + ",\n")
            output.write(indent + indent + indent + "\"selfPct\":" + row[23] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"households\":" + row[24] + ",\n")
            output.write(indent + indent + "\"householdInc\":{\n")
            output.write(indent + indent + indent + "\"under10kPct\":" + row[25] + ",\n")
            output.write(indent + indent + indent + "\"10kto14kPct\":" + row[26] + ",\n")
            output.write(indent + indent + indent + "\"15kto24kPct\":" + row[27] + ",\n")
            output.write(indent + indent + indent + "\"25kto34kPct\":" + row[28] + ",\n")
            output.write(indent + indent + indent + "\"35kto49kPct\":" + row[29] + ",\n")
            output.write(indent + indent + indent + "\"50kto74kPct\":" + row[30] + ",\n")
            output.write(indent + indent + indent + "\"75kto99kPct\":" + row[31] + ",\n")
            output.write(indent + indent + indent + "\"100kto149kPct\":" + row[32] + ",\n")
            output.write(indent + indent + indent + "\"150kto199kPct\":" + row[33] + ",\n")
            output.write(indent + indent + indent + "\"200kupPct\":" + row[34] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"medianHouseInc\":" + row[35] + ",\n")
            output.write(indent + indent + "\"meanHouseInc\":" + row[36] + ",\n")
            output.write(indent + indent + "\"houseSocSecPct\":" + row[37] + ",\n")
            output.write(indent + indent + "\"houseRetirIncPct\":" + row[38] + ",\n")
            output.write(indent + indent + "\"houseSupSecPct\":" + row[39] + ",\n")
            output.write(indent + indent + "\"houseFoodStampPct\":" + row[40] + ",\n")
            output.write(indent + indent + "\"perCapIncome\":" + row[41] + ",\n")
            output.write(indent + indent + "\"medianWorkEarn\":" + row[42] + ",\n")
            output.write(indent + indent + "\"medianMaleEarn\":" + row[43] + ",\n")
            output.write(indent + indent + "\"medianFemaleEarn\":" + row[44] + ",\n")
            output.write(indent + indent + "\"healthInsPct\":" + row[45] + ",\n")
            output.write(indent + indent + "\"healthInsPrivPct\":" + row[46] + ",\n")
            output.write(indent + indent + "\"healthInsPubPct\":" + row[47] + ",\n")
            output.write(indent + indent + "\"healthInsUnder18Pct\":" + row[48] + ",\n")
            output.write(indent + indent + "\"povFamAllPct\":" + row[49] + ",\n")
            output.write(indent + indent + "\"povFamUnder18Pct\":" + row[50] + ",\n")
            output.write(indent + indent + "\"povFamMarriedPct\":" + row[51] + ",\n")
            output.write(indent + indent + "\"povFamFemHeadPct\":" + row[52] + ",\n")
            output.write(indent + indent + "\"pop\":" + row[53] + ",\n")
            output.write(indent + indent + "\"popGender\":{\n")
            output.write(indent + indent + indent + "\"femalePct\":" + row[55] + ",\n")
            output.write(indent + indent + indent + "\"malePct\":" + row[54] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"age\":{\n")
            output.write(indent + indent + indent + "\"under5Pct\":" + row[56] + ",\n")
            output.write(indent + indent + indent + "\"5to9Pct\":" + row[57] + ",\n")
            output.write(indent + indent + indent + "\"10to14Pct\":" + row[58] + ",\n")
            output.write(indent + indent + indent + "\"15to19Pct\":" + row[59] + ",\n")
            output.write(indent + indent + indent + "\"20to24Pct\":" + row[60] + ",\n")
            output.write(indent + indent + indent + "\"25to34Pct\":" + row[61] + ",\n")
            output.write(indent + indent + indent + "\"35to44Pct\":" + row[62] + ",\n")
            output.write(indent + indent + indent + "\"45to54Pct\":" + row[63] + ",\n")
            output.write(indent + indent + indent + "\"55to59Pct\":" + row[64] + ",\n")
            output.write(indent + indent + indent + "\"60to64Pct\":" + row[65] + ",\n")
            output.write(indent + indent + indent + "\"65to74Pct\":" + row[66] + ",\n")
            output.write(indent + indent + indent + "\"75to84Pct\":" + row[67] + ",\n")
            output.write(indent + indent + indent + "\"85abovePct\":" + row[68] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"medianAge\":" + row[69] + ",\n")
            output.write(indent + indent + "\"race\":{\n")
            output.write(indent + indent + indent + "\"afAmPct\":" + row[72] + ",\n")
            output.write(indent + indent + indent + "\"amIndPct\":" + row[73] + ",\n")
            output.write(indent + indent + indent + "\"asianPct\":" + row[74] + ",\n")
            output.write(indent + indent + indent + "\"pacIslandPct\":" + row[75] + ",\n")
            output.write(indent + indent + indent + "\"whitePct\":" + row[71] + ",\n")
            output.write(indent + indent + indent + "\"otherPct\":" + row[76] + ",\n")
            output.write(indent + indent + indent + "\"moreThanOnePct\":" + row[70] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"ethnicity\":{\n")
            output.write(indent + indent + indent + "\"hispPct\":" + row[77] + ",\n")
            output.write(indent + indent + indent + "\"nonHispPct\":" + row[78] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"ed\":{\n")
            output.write(indent + indent + indent + "\"belowHSPct\":" + row[79] + ",\n")
            output.write(indent + indent + indent + "\"hsPct\":" + row[80] + ",\n")
            output.write(indent + indent + indent + "\"someCollegePct\":" + row[81] + ",\n")
            output.write(indent + indent + indent + "\"bsPct\":" + row[82] + ",\n")
            output.write(indent + indent + indent + "\"msPct\":" + row[83] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"birth\":{\n")
            output.write(indent + indent + indent + "\"inStatePct\":" + row[84] + ",\n")
            output.write(indent + indent + indent + "\"outStatePct\":" + row[85] + ",\n")
            output.write(indent + indent + indent + "\"citOutUSPct\":" + row[86] + ",\n")
            output.write(indent + indent + indent + "\"foreignBornPct\":" + row[87] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"housingUnits\":" + row[88] + ",\n")
            output.write(indent + indent + "\"occupiedPct\":" + row[89] + ",\n")
            output.write(indent + indent + "\"vacantPct\":" + row[90] + ",\n")
            output.write(indent + indent + "\"ownerVacPct\":" + row[91] + ",\n")
            output.write(indent + indent + "\"rentalVacPct\":" + row[92] + ",\n")
            output.write(indent + indent + "\"singleUnitPct\":" + row[93] + ",\n")
            output.write(indent + indent + "\"mobileHomePct\":" + row[94] + ",\n")
            output.write(indent + indent + "\"houseAge\":{\n")
            output.write(indent + indent + indent + "\"2005NewerPct\":" + row[95] + ",\n")
            output.write(indent + indent + indent + "\"2000to2004Pct\":" + row[96] + ",\n")
            output.write(indent + indent + indent + "\"1990to1999Pct\":" + row[97] + ",\n")
            output.write(indent + indent + indent + "\"1980to1989Pct\":" + row[98] + ",\n")
            output.write(indent + indent + indent + "\"1970to1979Pct\":" + row[99] + ",\n")
            output.write(indent + indent + indent + "\"1960to1969Pct\":" + row[100] + ",\n")
            output.write(indent + indent + indent + "\"1950to1959Pct\":" + row[101] + ",\n")
            output.write(indent + indent + indent + "\"1940to1949Pct\":" + row[102] + ",\n")
            output.write(indent + indent + indent + "\"1939OlderPct\":" + row[103] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"houseSize\":{\n")
            output.write(indent + indent + indent + "\"1BrPct\":" + row[104] + ",\n")
            output.write(indent + indent + indent + "\"2BrPct\":" + row[105] + ",\n")
            output.write(indent + indent + indent + "\"3BrPct\":" + row[106] + ",\n")
            output.write(indent + indent + indent + "\"4BrPct\":" + row[107] + ",\n")
            output.write(indent + indent + indent + "\"5BrMorePct\":" + row[108] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"occupant\":{\n")
            output.write(indent + indent + indent + "\"ownerOccPct\":" + row[109] + ",\n")
            output.write(indent + indent + indent + "\"renterOccPct\":" + row[110] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"moveIn\":{\n")
            output.write(indent + indent + indent + "\"2005NewerPct\":" + row[111] + ",\n")
            output.write(indent + indent + indent + "\"2000to2004Pct\":" + row[112] + ",\n")
            output.write(indent + indent + indent + "\"1990to1999Pct\":" + row[113] + ",\n")
            output.write(indent + indent + indent + "\"1980to1989Pct\":" + row[114] + ",\n")
            output.write(indent + indent + indent + "\"1970to1979Pct\":" + row[115] + ",\n")
            output.write(indent + indent + indent + "\"1969BeforePct\":" + row[116] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"houseValue\":{\n")
            output.write(indent + indent + indent + "\"lessThan50kPct\":" + row[117] + ",\n")
            output.write(indent + indent + indent + "\"50kto99kPct\":" + row[118] + ",\n")
            output.write(indent + indent + indent + "\"100kto149kPct\":" + row[119] + ",\n")
            output.write(indent + indent + indent + "\"150kto199kPct\":" + row[120] + ",\n")
            output.write(indent + indent + indent + "\"200kto299kPct\":" + row[121] + ",\n")
            output.write(indent + indent + indent + "\"300kto499kPct\":" + row[122] + ",\n")
            output.write(indent + indent + indent + "\"500kto999kPct\":" + row[123] + ",\n")
            output.write(indent + indent + indent + "\"1MOrMorePct\":" + row[124] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"medianHomeVal\":" + row[125] + ",\n")
            output.write(indent + indent + "\"mortgage\":{\n")
            output.write(indent + indent + indent + "\"withMortPct\":" + row[126] + ",\n")
            output.write(indent + indent + indent + "\"noMortPct\":" + row[127] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"monthlyCostMort\":{\n")
            output.write(indent + indent + indent + "\"under300Pct\":" + row[128] + ",\n")
            output.write(indent + indent + indent + "\"300to499Pct\":" + row[129] + ",\n")
            output.write(indent + indent + indent + "\"500to699Pct\":" + row[130] + ",\n")
            output.write(indent + indent + indent + "\"700to999Pct\":" + row[131] + ",\n")
            output.write(indent + indent + indent + "\"1kto1499Pct\":" + row[132] + ",\n")
            output.write(indent + indent + indent + "\"1500to1999Pct\":" + row[133] + ",\n")
            output.write(indent + indent + indent + "\"2kOrMorePct\":" + row[134] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"medianMortMonth\":" + row[135] + ",\n")
            output.write(indent + indent + "\"monthCostNoMort\":{\n")
            output.write(indent + indent + indent + "\"under200Pct\":" + row[136] + ",\n")
            output.write(indent + indent + indent + "\"200to299Pct\":" + row[137] + ",\n")
            output.write(indent + indent + indent + "\"300to399Pct\":" + row[138] + ",\n")
            output.write(indent + indent + indent + "\"400OrMorePct\":" + row[139] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"medianNoMortMonth\":" + row[140] + ",\n")
            output.write(indent + indent + "\"monthRent\":{\n")
            output.write(indent + indent + indent + "\"under200Pct\":" + row[141] + ",\n")
            output.write(indent + indent + indent + "\"200to299Pct\":" + row[142] + ",\n")
            output.write(indent + indent + indent + "\"300to499Pct\":" + row[143] + ",\n")
            output.write(indent + indent + indent + "\"500to699Pct\":" + row[144] + ",\n")
            output.write(indent + indent + indent + "\"700to999Pct\":" + row[145] + ",\n")
            output.write(indent + indent + indent + "\"1kto1499Pct\":" + row[146] + ",\n")
            output.write(indent + indent + indent + "\"1500OrMorePct\":" + row[147] + "\n")
            output.write(indent + indent + "},\n")
            output.write(indent + indent + "\"medianRent\":" + row[148] + "\n")

        count += 1
        
    # Close last object
    output.write(indent + "}\n")

    # Close data structure
    output.write("}\n")

    output.close()