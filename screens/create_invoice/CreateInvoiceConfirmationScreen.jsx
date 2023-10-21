import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from "./createinvoice.style";

const CreateInvoiceConfirmationScreen = (props) => {
  const { isVisible, message, onCancel, onConfirm } = props;

  return (
    <Modal transparent={true} visible={isVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
       }}>

        <View style={styles.confirmationBox}>
          <Text style = {styles.confirmtext}>{message}</Text>
          <View style = {styles.confirmbuttons}>

            <TouchableOpacity onPress={onConfirm} style = {styles.confirmbtn}>
              <Text style = {styles.confirmbtntext}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel} style = {styles.confirmbtn}>
              <Text style = {styles.confirmbtntext}>No</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>
    </Modal>
  );
};

export default CreateInvoiceConfirmationScreen;