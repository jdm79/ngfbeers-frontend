import { Box, Image, Text } from "@chakra-ui/react";

const AgentCard = ({name, image, description, title}) => {
    return (
        <Box
            backgroundColor='#f1f1f14a'
            padding='2rem'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'    
            textAlign='center'
            marginBottom={{base: '1rem', sm: '0'}}   
        >
            <Image 
                src={image}
                width='10rem'
                height='10rem'
                objectFit='cover'
                borderRadius='full'
                marginBottom='2rem'
                shadow='md'
            />
            <Text
                color='blue.400'
                fontSize='xl'
                fontWeight='bold'
            >
                {name}
            </Text>
            <Text
                color='blue.600'
                fontSize='lg'
            >
                {title}
            </Text>
            <Text
                color='gray.600'
                fontSize='md'
                fontWeight='light'
                noOfLines='4'
                marginTop='1rem'
            >
                {description}
            </Text>
        </Box>
    )
}

// Pug Photo by charlesdeluvio on Unsplash
// Glasses Dog Photo by alan King on Unsplash
// Ghost Photo by Arya Dubey on Unsplash
export default AgentCard;