import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  HStack,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { daysInYear, addIsometricMonths } from '../lib/IsometricDays';
import { addDaysToGregorianDate } from '../lib/gregorianDates';
import { getIsometricDate } from "../lib/IsometricDates";
import { CalendarDay } from './CalendarDay';
import { CalendarMonthCard } from './CalendarMonthCard';

function isZero(val) {
  if(val === 0){
    return true;
  }
  else {
    return false;
  }
}

export function CalendarMonth(props) {

  return (
    <VStack spacing={8}>
      <HStack w={"full"} align="top">
        {
          [-2,-1,0,1,2].map((mdiff, index) => 
            <CalendarMonthCard key={index}
              isometricYearMonth={addIsometricMonths(getIsometricDate(props.gregorianDate), mdiff)}
              gregorianDate={props.gregorianDate}
              isometricDate={getIsometricDate(props.gregorianDate)}
            ></CalendarMonthCard>
          )
        }
      </HStack>
      <VStack w="full">
        <Text color="purple.500">Isometric Calendar</Text>
        <HStack w="full">
          
          {
            [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6].map((ddiff, index) => 
              <CalendarDay key={index}
                gregorianDate={addDaysToGregorianDate(props.gregorianDate, ddiff)}
                isometricDate={getIsometricDate(addDaysToGregorianDate(props.gregorianDate, ddiff))}
                currDateInd={isZero(ddiff)}
              ></CalendarDay>
            )
          }
          
        </HStack>
        <Text color="pink.500">Gregorian Calendar</Text>
      </VStack>
    </VStack>
  );
}
