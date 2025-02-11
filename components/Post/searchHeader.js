import { Layout } from "antd";
import { nearStore } from "../../stores/near";
import { Box, Text, Avatar, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const { Header, Footer, Content } = Layout;

const SearchHeader = ({isUserMsg, currentProfile, nft}) => {

    const styles = {
        header: {
            height: 64,
            display: "flex",
            alignItems: "center",
            position: "relative",
            gap: 5,
        }
    };
    
    console.log('hbh',{currentProfile}.currentProfile?.metadata.media);
    
    const nearState = nearStore((state) => state);

    return (
        <Header style={styles.header}>
            <Avatar
                className=" bg-slate-300"
                bg="gray.400"
                name={nft}
                src={
                    isUserMsg
                        ? nearState.profile?.profileImg
                        :  {currentProfile}.currentProfile?.metadata?.media
                }
                size="md"
            />
            <Box ml={2}>
                <NextLink href={`/profile/${encodeURIComponent(nft)}`} passHref><Link>{nft}</Link></NextLink>
                
            </Box>
        </Header>
    )
}

export default SearchHeader;
