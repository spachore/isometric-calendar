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
import { daysInYear } from '../lib/IsometricDays';
import { getIsometricDate } from "../lib/IsometricDates";

export function CalendarDay(props) {

  return (
    <VStack spacing={8}>
      <Text>
        Isometric Calendar DAY - show 15 days before and after relationship horizontally.
      </Text>
      <Text>
        Gregorian Date: "{props.gregorianDate.toISOString().slice(0,10)}"
        <br/>
        Isometric Date: "{getIsometricDate(props.gregorianDate.toISOString().slice(0,10))}"
      </Text>
    </VStack>
  );
}
