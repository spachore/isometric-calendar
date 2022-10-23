import React from 'react';
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
import {daysInYear} from '../lib/IsometricDays';
import {getIsometricDate} from "../lib/IsometricDates";

export function Intro(props) {
  return (
    <VStack spacing={8}>
      <Text>
        Showing the isometric calendar for year <Code fontSize="xl">{props.gregorianDate.substr(0,4)}</Code> and its relationship with Gregorian Calendar.
      </Text>
      <Text>
        Total Number of days in year <Code fontSize="xl">{props.gregorianDate.substr(0,4)}</Code> : {daysInYear(props.gregorianDate.substr(0,4))}
        <br/>
        Gregorian Date: "{props.gregorianDate}"
        <br/>
        Metric Date: "{getIsometricDate(props.gregorianDate)}"
      </Text>
    </VStack>
  );
}
