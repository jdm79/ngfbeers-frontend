import { Box } from "@chakra-ui/react";

const PropertyMatterPortEmbed = ({ panorama }) => {
    // this reserves a specific space of defined size for the video to load into
    // prevents the jarring jumping stuff you sometimes see on news websites
    const ratio = (315/560) * 100;

    return (
        <Box
            paddingTop={`${ratio}%`}
            position='relative'
            height='0'
            overflow='hidden'
            frameBorder='0'
        >
            <iframe 
                style={{position: 'absolute', top:0, bottom:0}}
                width='100%'
                height='100%'
                src={panorama}
            />
        </Box>
    )
};

export default PropertyMatterPortEmbed;