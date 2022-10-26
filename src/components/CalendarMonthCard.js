import React, {useState} from 'react';
import {
  ChakraProvider,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
} from '@chakra-ui/react';
import { isLeapYear, getIsometricWeekdays } from '../lib/IsometricDays';
import { getIsometricDate } from "../lib/IsometricDates";

function CalendarDayCell(props) {
  return (
      <Flex w={"full"} justify="center"
        border="1px" borderColor="gray.200"
        bg={props.currDayInd && "purple.200"}
        color={(!(props.dayIdx) || !((props.dayIdx+1)%6)) && "gray.500"}
      >{props.day}</Flex>         
  );
}

function CalendarMonthGrid(props) {
  return (
   
    <VStack w={"full"} spacing={0} border="2px" borderColor={props.currMonthInd && "purple.500"}>
      <HStack w={"full"} spacing={0} bg="gray.200">
        {getIsometricWeekdays().map((weekday,index) =>
          <CalendarDayCell key={index} dayIdx={index} day={weekday}></CalendarDayCell>         
        )}
      </HStack>
      {props.weeknumList.map((weeknum, rowIdx) =>
        <HStack key={rowIdx} w={"full"} spacing={0}>
        {getIsometricWeekdays().map((weekday, colIdx) =>
          <CalendarDayCell key={colIdx} dayIdx={colIdx} 
            day={(rowIdx*6) + (colIdx+1)}
            currDayInd={(props.currMonthInd && props.isometricDate.endsWith(((rowIdx*6) + (colIdx+1)).toString().padStart(2,"0")))}
          ></CalendarDayCell>     
        )}
        </HStack>
      )}
    </VStack>
  );
}

export function CalendarMonthCard(props) {

  return (
    <VStack w={72} spacing={0}>
      <Text>
        {props.isometricYearMonth}
      </Text>
      <CalendarMonthGrid weeknumList={[1,2,3,4,5]} 
        currMonthInd={props.isometricDate.startsWith(props.isometricYearMonth)}
        isometricDate={props.isometricDate}
      ></CalendarMonthGrid>

      {(parseInt((props.isometricYearMonth).slice(5,7)) == 12) && (!isLeapYear(parseInt(props.isometricYearMonth.slice(0,4)))) &&
      <VStack w={"full"} spacing={0}>
        <Text>
          {(props.isometricYearMonth).slice(0,5) + (parseInt((props.isometricYearMonth).slice(5,7))+1).toString()}
        </Text>
        <CalendarMonthGrid weeknumList={[1]} 
          currMonthInd={props.isometricDate.startsWith(props.isometricYearMonth.slice(0,5)+"13")}
          isometricDate={props.isometricDate}
        ></CalendarMonthGrid>
      </VStack>
      }

    </VStack>
  );
}
