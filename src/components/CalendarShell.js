import React, { useState } from 'react';
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
import { daysInYear } from '../lib/IsometricDays';
import { getIsometricDate } from "../lib/IsometricDates";
import { CalendarYear } from './CalendarYear';

export function CalendarShell(props) {
  const [gregorianDateObj, setCurrentDateGregorianObj] = useState(new Date());
  const [gregorianDate, setCurrentDateGregorian] = useState(
                        gregorianDateObj.getFullYear().toString().padStart(4,"0") + "-" +
                        (gregorianDateObj.getMonth()+1).toString().padStart(2,"0") + "-" +
                        gregorianDateObj.getDate().toString().padStart(2,"0")
                      );
  return (
    <VStack spacing={8}>
      <CalendarYear gregorianDate={gregorianDate}></CalendarYear>
    </VStack>
  );
}
