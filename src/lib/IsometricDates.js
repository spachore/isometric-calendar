import {getDateFromDays} from "../lib/IsometricDays";

/* ------------------------------------------
# get isometric date for given gregorian date
# ------------------------------------------- */
export function getIsometricDate(dateGregorianStr){
    let dateZero = new Date("0001-01-01"+"T00:00:00.000z");
    let dateGregorian = new Date((dateGregorianStr + "T00:00:00.000z"));
    let daysDiff = (dateGregorian - dateZero)/(1*24*60*60*1000) + 1;
    console.log(daysDiff);
    let dateIsoMetric = getDateFromDays(daysDiff);
    return dateIsoMetric;
}


// # main()

// for year in range(1600,2401):
//     dateIsoMetric = getIsometricDate(str(year).rjust(4, "0") + "-03-21");
//     drift = int(dateIsoMetric.split("-")[2]) - 21;
//     print(str(year).rjust(4," "), str(year).rjust(4, "0") + "-03-21", dateIsoMetric, str(drift).rjust(3," "));
