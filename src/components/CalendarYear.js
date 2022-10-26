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
import { CalendarMonth } from "./CalendarMonth";

export function CalendarYear(props) {

  return (
    <VStack spacing={8} justify='top'>
      <Text>
      Isometric Calendar YEAR - provide year-month-date selection.
      </Text>
      <CalendarMonth gregorianDate={props.gregorianDate}></CalendarMonth>
    </VStack>
  );
}
