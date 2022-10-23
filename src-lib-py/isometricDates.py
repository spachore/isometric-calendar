import isometricDays
import datetime

# ------------------------------------------
# get isometric date for given gregorian date
# ------------------------------------------
def getIsometricDate(dateGregorianStr):
    dateGregorian = datetime.date(int(dateGregorianStr.split("-")[0]),int(dateGregorianStr.split("-")[1]),int(dateGregorianStr.split("-")[2]));
    dateIsoMetric = isometricDays.getDateFromDays((dateGregorian - datetime.date(1,1,1) + datetime.timedelta(days=1)).days);
    return dateIsoMetric



# main()
# getIsometricDate('2300-03-21');
# isometricDays.getDaysTillDate('2000-13-06')
# isometricDays.getDateFromDays(1168776)
# for 21-Mar of each year print all corresponsing dates:
for year in range(1600,2401):
    dateIsoMetric = getIsometricDate(str(year).rjust(4, "0") + "-03-21");
    drift = int(dateIsoMetric.split("-")[2]) - 21;
    print(str(year).rjust(4," "), str(year).rjust(4, "0") + "-03-21", dateIsoMetric, str(drift).rjust(3," "));
