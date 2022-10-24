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
import { getIsometricDate } from "../lib/IsometricDates";
import { CalendarDay } from './CalendarDay';
import { CalendarMonthCard } from './CalendarMonthCard';

export function CalendarMonth(props) {

  return (
    <VStack spacing={8}>
      <Text>
      Isometric Calendar MONTH - show 1 month before and after relationship horizontally.
      <br/>
      Isometric Date: "{getIsometricDate(props.gregorianDate.toISOString().slice(0,10))}"
      </Text>
      <HStack>
        {
          [-2,-1,0,1,2].map((mdiff, index) => 
            <CalendarMonthCard key={index}
              isometricYearMonth={addIsometricMonths(getIsometricDate(props.gregorianDate.toISOString().slice(0,10)), mdiff)}
            ></CalendarMonthCard>
          )
        }
      </HStack>
      <CalendarDay gregorianDate={props.gregorianDate}></CalendarDay>
    </VStack>
  );
}
