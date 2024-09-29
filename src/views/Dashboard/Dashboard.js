/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// Chakra imports
import {
	Avatar,
	Box,
	Button,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Grid,
	Icon,
	Input,
	Image,
	InputLeftElement,
	Progress,
	SimpleGrid,
	Spacer,
	Stack,
	VStack,
	HStack,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	InputGroup,
	Tr
} from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';

import IconBox from 'components/Icons/IconBox';
// Icons
import { CartIcon, DocumentIcon, GlobeIcon, RocketIcon, StatsIcon, WalletIcon } from 'components/Icons/Icons.js';
import DashboardTableRow from 'components/Tables/DashboardTableRow';
import TimelineRow from 'components/Tables/TimelineRow';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
// Data
import { dashboardTableData, timelineData } from 'variables/general';

export default function Dashboard() {
	const messages = ["Hi Number One", "Hi Number two", "How are you one", "I am good two"];
	return (
		<Flex flexDirection='column'>
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 1.2fr 1.5fr' }} my='26px' gap='18px'>
				{/* Welcome Card */}
				<Card
					p='0px'
					gridArea={{ md: '1 / 1 / 2 / 3', '2xl': 'auto' }}
					bgSize='cover'
					bgPosition='50%'>
					<CardBody w='100%' h='100%'>
						<Flex flexDirection={{ sm: 'column', lg: 'row' }} w='100%' h='100%'>
							<Flex flexDirection='column' h='100%' p='22px' minW='60%' lineHeight='1.6'>
								<Text fontSize='25px' color='#fff' fontWeight='bold' mb='6px'>
									Name: Mark Johnson
								</Text>
								<Text fontSize='18px' color='white' fontWeight='normal'>
									Age: 22 years old
								</Text>
								<Text fontSize='18px' color='white' fontWeight='normal' mb='auto'>
									Native Language: Spanish
								</Text>
								<Spacer />
							</Flex>
							<Flex
								flexDirection='column'
								h='100%'
								p='22px'
								minW='40%' // Adjust width as needed
								justifyContent='space-between' // This will space the items evenly
							>
								<Box mb='10px'>
									<Text fontSize='18px' color='white' > Address: 1808 Duffield rd </Text>
								</Box>
								<Box mb='10px'>
									<Text fontSize='18px' color='white' > Weight: 140 lbs </Text>
								</Box>
								<Box mb='10px'>
									<Text fontSize='18px' color='white' > Height: 5'9 </Text>
								</Box>
							</Flex>
						</Flex>
					</CardBody>
				</Card>
			</Grid>

			{/* Chat, Live Stream, and Geolocation Cards Side by Side */}
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr' }} gap='24px' my='10px'>

				{/* Live Stream Card */}
				<Card maxH="80%">
					<CardHeader mb='22px'>
						<Flex flexDirection={{ sm: 'column', lg: 'row' }} w='100%' h='100%' alignItems='center'>
							<Text fontSize='15px' color='white'> 12:26:30pm - Local</Text>
							<Spacer />
							<Icon as={AiFillCheckCircle} color='green.500' w='15px' h='15px' me='5px' />
							<Text fontSize='15px' color='white'> Online </Text>
						</Flex>
					</CardHeader>
					<CardBody>
						<Flex flexDirection='column' alignItems='center'> 
						{/* Add live stream content here */}
						<Image src='https://pm1.aminoapps.com/7544/d523bfe83733e68a0f353744a72131efd890b496r1-500-670v2_hq.jpg' maxH="70%" />

							   {/* Text bubble below the image */}
							<Box
								bg="gray.700"
								p={3}
								borderRadius="lg"
								maxW="75%"
								textAlign="center"
								position="relative" // For bubble styling
								_before={{
								content: '""',
								position: "absolute",
								bottom: "-10px", // Position the tail below the box
								left: "50%",
								transform: "translateX(-50%)", // Ensure the tail is centered
								borderWidth: "10px",
								borderStyle: "solid",
								borderColor: "gray.700 transparent transparent transparent", // Triangle shape
								}}
							>
								<Text color="white">
								Live stream is running smoothly. Let us know if you experience any issues!
								</Text>
							</Box>

						</Flex>
					</CardBody>
				</Card>

				{/* Geolocation Card */}
				<Card maxH="80%">
					<CardHeader mb='22px'>
						<Flex direction='column' w='100%' h='100%'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
								Geolocation
							</Text>
						</Flex>
					</CardHeader>
					<CardBody p={0} display="flex" justifyContent="center" alignItems="center">
						{/* Add geolocation content here */}
						<Image src='https://media.wired.com/photos/5a6a61938c669c70314b300d/master/pass/Google-Map-US_10.jpg'
						boxSize="100%" 
						objectFit="cover" 
						borderRadius="md" />
					</CardBody>
				</Card>

				{/* Chat Card */}
				<Card maxH="80%">
					<CardHeader mb='32px'>
						<Flex direction='column'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
								Chat
							</Text>
							<Flex align='center'>
								<Icon as={AiFillCheckCircle} color='green.500' w='15px' h='15px' me='5px' />
								<Text fontSize='sm' color='gray.400' fontWeight='normal'>
									Online
								</Text>
							</Flex>
						</Flex>
					</CardHeader>
					<CardBody maxH="calc(50vh - 80px)" display="flex" flexDirection="column" justifyContent="space-between">
					{/*Online chat here*/}	
						<VStack align='start' spacing={4} overflowY='scroll' maxH='calc(50vh - 120px)' pr={2}>
							
							<Box bg='gray.700' p={3} borderRadius='lg' maxW='75%'>
								<Text color='white'>User: Hi! How can I help you today?</Text>
							</Box>
							<Box bg='blue.600' p={3} borderRadius='lg' maxW='75%' alignSelf='end'>
								<Text color='white'>You: I'm just testing the chat feature.</Text>
							</Box>
							<Box bg='gray.700' p={3} borderRadius='lg' maxW='75%'>
								<Text color='white'>User: Looks good! Let me know if you need anything.</Text>
							</Box>

							<Box bg='gray.700' p={3} borderRadius='lg' maxW='75%'>
							<Text color='white'>User: Looks good! Let me know if you need anything.</Text>
							</Box>
							<Box bg='gray.700' p={3} borderRadius='lg' maxW='75%'>
							<Text color='white'>User: Looks good! Let me know if you need anything.</Text>
							</Box>
							<Box bg='gray.700' p={3} borderRadius='lg' maxW='75%'>
							<Text color='white'>User: Looks good! Let me know if you need anything.</Text>
							</Box>
							<Box bg='gray.700' p={3} borderRadius='lg' maxW='75%'>
							<Text color='white'>User: Looks good! Let me know if you need anything.</Text>
							</Box>
							</VStack>
							<Box mt={4} w='100%'>
							<InputGroup>
								<Input placeholder='Type a message...' size='md' color='white' bg='gray.800' />
								<Button
									bg='blue.600'
									border='none'
									_hover={{ bg: 'blue.700' }}
									_active={{ bg: 'transparent' }}>
									<ArrowUpIcon color='white' />
								</Button>
							</InputGroup>
						</Box>
					</CardBody>
				</Card>
			</Grid>
		</Flex>
	);
}

