import {
    Box,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Icon,
} from "@chakra-ui/react";
import useCustomToast from "../../hooks/useCustomToast";
import { useState } from "react";
import { getBalance, fetchpostsData } from "../../lib/tokenContract";
import { nearStore } from "../../stores/near";

const ChargeModal = ({ nft, state }) => {
    const [isOpen, onClose] = state;
    const nearState = nearStore((state) => state);

    const sliderTrack = useColorModeValue("yellow.400", "yellow.400");
    const sliderTrackBg = useColorModeValue("yellow.100", "yellow.100");
    const sliderThumbColor = useColorModeValue("gray.900", "gray.900");
    const postBg = useColorModeValue("#d182ffda", "#171923");
    const chrageBalance = nearState?.aexBalance || 0;

    const toast = useCustomToast();
    const [sliderValue, setSliderValue] = useState(0);

    function updateSlider(e) {
        setSliderValue(e);
    }



    async function chargePost() {
        nearState.pnftContract.charge(
                {
                    charger_id: nearState.accountId,
                    post_id: parseInt(nft.post_id),
                    amount: String(sliderValue + "000000000000000000000000"),
                },
                "300000000000000", // attached GAS (optional)
            )
        
            .catch((e) => {
                console.log("Charge failed!", e);
                toast("error", "Charge failed!", "ChargeIderr");
            });
        //.then(() => setCharge(nft.tokenId, newAmount));
        
        toast("success", "Charged " + sliderValue + "AEX$", "ChargeIderr");
        setSliderValue(0);
        onClose();
        await fetchpostsData(nearState);
        await getBalance(nearState);
        

    }

    return (
        <Modal
            size="xl"
            isOpen={isOpen}
            onClose={() => {
                setSliderValue(0);
                onClose();
            }}
        >
            <ModalOverlay />
            <ModalContent bg={postBg}>
                <ModalHeader>Reward Post</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box className="py-2 flex pr-2">
                        <Box className="mr-4 text-2xl">
                            <Icon width="24px" height="24" viewBox="0 0 20 27" fill="none" >
<g filter="url(#filter0_d_163_1478)">
<path d="M11.2143 9.5L11.2143 2.6241C11.2143 2.61679 11.2143 2.60938 11.2143 2.60189C11.2144 2.49398 11.2144 2.36836 11.2014 2.26823C11.1944 2.21392 11.1787 2.12137 11.1305 2.02673C11.0742 1.91638 10.9684 1.79548 10.7974 1.74067C10.6264 1.68586 10.47 1.72275 10.3601 1.77985C10.2658 1.82883 10.1993 1.89502 10.162 1.93511C10.0932 2.00904 10.0202 2.1113 9.95757 2.19915C9.95322 2.20525 9.94892 2.21128 9.94467 2.21723L10.2108 2.4073L9.94467 2.21723L4.81902 9.39313C4.8159 9.39751 4.81262 9.40208 4.80922 9.40683C4.76946 9.46233 4.71199 9.54253 4.67321 9.61811C4.63193 9.69859 4.53214 9.9245 4.66082 10.1746C4.7895 10.4246 5.03133 10.4747 5.12081 10.4879C5.20485 10.5003 5.30353 10.5001 5.37179 10.5C5.37764 10.5 5.38327 10.5 5.38864 10.5H8.78574L8.78572 17.3759C8.78572 17.3832 8.78571 17.3906 8.78571 17.3981C8.78565 17.506 8.78557 17.6316 8.79856 17.7318C8.8056 17.7861 8.82132 17.8786 8.86954 17.9733C8.92578 18.0836 9.03158 18.2045 9.20261 18.2593C9.37365 18.3141 9.53001 18.2773 9.63991 18.2201C9.73416 18.1712 9.80074 18.105 9.83804 18.0649C9.90681 17.991 9.97976 17.8887 10.0424 17.8009C10.0468 17.7948 10.0511 17.7887 10.0553 17.7828L15.181 10.6069C15.1841 10.6025 15.1874 10.5979 15.1908 10.5932C15.2305 10.5377 15.288 10.4575 15.3268 10.3819C15.3681 10.3014 15.4679 10.0755 15.3392 9.82545C15.2105 9.5754 14.9687 9.52529 14.8792 9.51212C14.7951 9.49974 14.6965 9.49988 14.6282 9.49998C14.6224 9.49999 14.6167 9.5 14.6114 9.5H11.2143ZM9.10584 17.3838C9.10338 17.3864 9.10368 17.3858 9.10666 17.3829C9.10636 17.3832 9.10609 17.3835 9.10584 17.3838ZM9.79025 17.6031C9.7902 17.6028 9.79015 17.6024 9.7901 17.6019L9.79025 17.6031ZM10.8942 2.6162C10.8966 2.61355 10.8963 2.61417 10.8933 2.61709C10.8936 2.61677 10.8939 2.61647 10.8942 2.6162ZM10.2099 2.39807C10.2092 2.39396 10.2093 2.39328 10.2098 2.39688L10.2099 2.39807Z" fill="#FFE500" stroke="#FFE600"/>
</g>
<defs>
<filter id="filter0_d_163_1478" x="-4" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_163_1478"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_163_1478" result="shape"/>
</filter>
</defs>
</Icon>
                        </Box>

                        <Slider
                            onChange={updateSlider}
                            size={"lg"}
                            aria-label="pay-slider"
                            colorScheme={"yellow"}
                            defaultValue={0}
                            max={chrageBalance}
                        >
                            <SliderTrack bg={sliderTrackBg}>
                                <SliderFilledTrack bg={sliderTrack} />
                            </SliderTrack>
                            <SliderThumb color={sliderThumbColor} boxSize={6}>
                                <small>{sliderValue}</small>
                            </SliderThumb>
                        </Slider>
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button
                        variant="ghost"
                        mr={3}
                        onClick={() => {
                            setSliderValue(0);
                            onClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button colorScheme="blue" onClick={chargePost}>
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ChargeModal;
