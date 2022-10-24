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

  const [gregorianDate, setCurrentDateGregorian] = useState(new Date());
  return (
    <VStack spacing={8}>
      <Text>
        Isometric Calendar SHELL.
      </Text>
      <Text>
        Gregorian Date: "{gregorianDate.toISOString().slice(0,10)}"
        <br/>
        Isometric Date: "{getIsometricDate(gregorianDate.toISOString().slice(0,10))}"
      </Text>
      <CalendarYear gregorianDate={gregorianDate}></CalendarYear>
    </VStack>
  );
}
