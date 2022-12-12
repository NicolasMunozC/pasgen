import {useEffect, useState} from 'react'
import Head from 'next/head'
import { 
    Box, 
    Button, 
    Center, 
    Heading, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Slider, 
    SliderFilledTrack, 
    useToast, 
    SliderThumb, 
    SliderTrack, 
    Text, 
  } from '@chakra-ui/react'

export default function Home() {

  const [sliderValue, setSliderValue] = useState(12)
  const chars = 'abcdfghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ1234567890@#!$%^&*-=|;:/>.<,~+_'
  const [password, setPassword] = useState('')
  const toast = useToast()

    useEffect(()=>{
      setPassword('')
      var newPassword = ''
      for (var i = 0; i <= sliderValue; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length)
        newPassword += chars.substring(randomNumber, randomNumber +1)
       }

       setPassword(newPassword)

    },[sliderValue])

  function onCopy(){
    navigator.clipboard.writeText(password)
    toast({
      title: 'Password on clipboard!',
      description: "Enjoy your new password and save it!",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }


  return (
    <div>
      <Head>
        <title>PasGen - Password Generator</title>
        <meta name="description" content="Password Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Center h='100vh' className='background' > 
 
          <Box w='90vw' maxW='3xl' boxShadow='2xl' minH='400px' borderRadius='3xl' px='10' h='80vh' display='flex' flexDir='column' justifyContent='center' textAlign='center' bg='gray.100'>
            <Heading>PasGen</Heading>
              <Text>Password Generator</Text>
              <Box w='100%'>
                <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={12}  onChange={(val) => setSliderValue(val)} mt='10px' max={32} min={8}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
              <Text>{sliderValue} Characters</Text>

              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type='text'
                  value={password}
                  readOnly
                  backgroundColor='white'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={onCopy} bg='teal' textColor='white' _focus={{backgroundColor:'black'}}>
                    Copy
                  </Button>
                </InputRightElement>
              </InputGroup>

          </Box>



        </Center>
      </main>

      <footer>
      </footer>
    </div>
  )
}
