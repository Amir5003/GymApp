import { StyleSheet, Text, View, Button } from 'react-native';
import Modal from "react-native-modal";
import OTPContainer from './OTPContiner'

export interface Props  {
    showmodal: boolean;
    setshowmodal: () => void
};

const Prelogin: React.FC<Props> = ({
    showmodal,
    setshowmodal
}) => {

    return (
        <View>
            <Modal isVisible={showmodal}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>Hello!</Text>
                    <OTPContainer 
                    codeCount={4}
                    />
                    <Button title="Hide modal" onPress={setshowmodal} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default Prelogin;