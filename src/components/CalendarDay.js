import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { daysInYear, getIsometricWeekday } from '../lib/IsometricDays';
import { getIsometricDate } from "../lib/IsometricDates";
import { getGregorianWeekday } from '../lib/gregorianDates';

function displayDate(dateStr) {
  
}

export function CalendarDay(props) {
  return (
    <VStack w="full" spacing={4} >
      <Text border="1px" borderColor={props.currDateInd && "purple.500"} 
            bg={props.currDateInd && "purple.200"}
            color={(getIsometricWeekday(props.isometricDate)==="Fri" || 
                  getIsometricWeekday(props.isometricDate)==="Sun") && "gray.500"}
      >
        <Text bg="gray.200">{getIsometricWeekday(props.isometricDate)}</Text>
        {props.isometricDate}
      </Text>
      <Text border="1px" borderColor={props.currDateInd && "pink.500"} 
          bg={props.currDateInd && "pink.200"}
          color={(getGregorianWeekday(props.gregorianDate)==="Sat" || 
                  getGregorianWeekday(props.gregorianDate)==="Sun") && "gray.500"}
      >
        <Text bg="gray.200">{getGregorianWeekday(props.gregorianDate)}</Text>
        {props.gregorianDate}
      </Text>
      
    </VStack>
  );
}
