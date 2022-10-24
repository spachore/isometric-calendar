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

export function CalendarMonthCard(props) {

  return (
    <VStack w={72}>
      <Text>
        ISOMETRIC MONTH: {props.isometricYearMonth}
      </Text>
      <HStack>
        {getIsometricWeekdays().map((weekday,index) =>
          <Flex w={10}>{weekday}</Flex>         
        )}
      </HStack>
      {[1,2,3,4,5].map((weeknum, index) =>
        <HStack>
        {getIsometricWeekdays().map((weekday,index) =>
          <Flex w={10}>{weeknum*(index+1)}</Flex>         
        )}
        </HStack>
      )}
    </VStack>
  );
}
