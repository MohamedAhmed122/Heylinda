import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, width} from '@config/index';

interface ViewPaymentProps {
  handlePay: () => void;
}

const ViewPayment: React.FC<ViewPaymentProps> = ({handlePay}) => {
  return (
    <View>
      <TouchableOpacity style={styles.continueBtn} onPress={handlePay}>
        <View style={styles.payContainer}>
          <AntDesign name="apple1" color="white" size={18} />
          <Text style={styles.continueText}>Pay </Text>
        </View>
        <Text style={styles.continuePrice}>9.99 usd / month </Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <Text style={styles.subText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Text>
    </View>
  );
};

export default ViewPayment;

const styles = ScaledSheet.create({
  continueBtn: {
    backgroundColor: colors.secondary,
    width: '95%',
    marginLeft: '2.5%',
    borderRadius: 40,
    height: '55@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  payContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: '3@s',
  },
  continueText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 17,
    marginLeft: '5@s',
  },
  continuePrice: {
    color: colors.white,
  },
  line: {
    marginVertical: '40@s',
    height: 2,
    alignSelf: 'center',
    width: width - width / 3,
    backgroundColor: colors.gray,
  },
  subText: {
    width: width - width / 5,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: '20@s',
    fontSize: '15@s',
    color: colors.gray,
  },
});
