
# ------------------------------------------
# isometric calendar:
# - A week has 6 days - S M T W T F
# - A month has 30 days or 5 weeks
# - An year has 366 days or 12 full months and an extra year-end month of 1 week
# - - The 12 months are 
# - - - |01-Jan|02-Feb|03-Mar|
# - - - |04-Apr|05-May|06-Jun|
# - - - |07-Jul|08-Aug|09-Sep|
# - - - |19-Oct|11-Nov|12-Dec|
# - - - |13-Sat| [Sat - Saturn - Extra year-end month of 1 week]
# - - Leap years skip the extra year-end month. Leap years occur every 8 years.
# - - - The Rule for Leap year is: 
# - - -       Every year that is divisible by 4 but not divisible by 8 is a leap year. 
# - - -       If a centuarial year is divisible by 400 but not divisible by 800 is a leap year.
# - The calendar starts on the exact same day as first day of gregorian calendar 01-01-0001.
# ------------------------------------------

# ------------------------------------------
# divisibility check
# ------------------------------------------
def isDivisible(a, b):
    return not a%b

# ------------------------------------------
# get nubmer of days in a given isometric calendar year
# ------------------------------------------
def daysInYear(year):
    days = 0;
    if (    (isDivisible(year, 4) and not isDivisible(year, 8)) 
            or
            (isDivisible(year, 400) and not isDivisible(year, 800))  
        ):
        days = 360;
    else:
        days = 366;
    return days;

# ------------------------------------------
# get number of days from 01-01-0001 till end of the given year
# ------------------------------------------
def daysTillYear(toYear):
    totalDays = 0;
    for year in range(1, toYear + 1):
        totalDays = totalDays + daysInYear(year)
    
    return totalDays;

# ------------------------------------------
# get number of days from 01-01-0001 till given date
# ------------------------------------------
def getDaysTillDate(dateStr): #yyyy-mm-dd format
    (year, month, day) = (dateStr[0:4], dateStr[5:7], dateStr[8:10])
    #print(year,month,day)
    daysTillDate = daysTillYear(int(year) - 1) + 30*(int(month) - 1) + int(day)
    return daysTillDate

# ------------------------------------------
# get 'year' from number of days from 01-01-0001
# ------------------------------------------
def getYear(days):
    year = 0;
    daysLeft = days;
    while(daysLeft > 0):
        year = year + 1
        daysLeft = daysLeft - daysInYear(year);
    #add the days back before returning. 
    return (year, daysLeft +  daysInYear(year));

# ------------------------------------------
# get 'month' from number of days, range 1-366
# ------------------------------------------
def getMonth(days):
    days = days + 29; 
    # adding 29 days does the trick of adding 1 to the month, and boundary case of 30th for day.
    # if days is 30, it returns 1-month and 30-days
    return(int((days)/30), (days)%30 + 1)

# ------------------------------------------
# get isometric date from given number of days from 01-01-0001
# ------------------------------------------
def getDateFromDays(days):
    (year, daysLeft) = getYear(days)
    
    (month, day) = getMonth(daysLeft)
    #print(year, month, day)
    return str(year).rjust(4, "0") + "-" + str(month).rjust(2, "0") + "-" + str(day).rjust(2, "0")

# ------------------------------------------
# 
# ------------------------------------------
