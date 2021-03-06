import React from 'react'
import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    color,
    Icon,
    Link
  } from '@chakra-ui/react';

  import { SiGithub } from "react-icons/si";
  import { GrLinkedin } from "react-icons/gr";


  export default function Hero() {
    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                'url(https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3042&q=80)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                  <Text
                    color={'white'}
                    fontWeight={1000}
                    lineHeight={1.2}
                    fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}>
                    Derrick Alvarez
                  </Text>
                </Stack>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                  <Text
                    color={'white'}
                    fontWeight={'normal'}
                    lineHeight={1.2}
                    position={'relative'}
                    top={100}
                    textAlign={'center'}
                    fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
                    Hi! I'm a Front-End Web Developer from Los Angeles, CA and my background in History has given me the ability to focus on the small and large details for greater code efficiency and better user experience.
                  </Text>
                </Stack>
                <Stack>
                  <Link href='https://github.com/da-2005'>
                    <Icon as={SiGithub} 
                      color='blue.500'
                      position={'relative'}
                      top={150}
                      right={50}
                      w={10}
                      h={10}
                    />
                  </Link>
                </Stack>
                <Stack>
                  <Link href='https://www.linkedin.com/in/derrick-alvarez-70692921b/'>
                    <Icon as={GrLinkedin} 
                      color='blue.500'
                      position={'relative'}
                      top={104}
                      left={50}
                      w={10}
                      h={10}
                    />
                  </Link>
                </Stack>
              </VStack>
        </Flex>
    );
}