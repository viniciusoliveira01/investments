import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import styled from 'styled-components';
// import { TextField } from 'react-native-material-textfield';

import colors from '@config/colors';
import HeaderComponent from '@components/Header';
import SimulateModal from '@components/SimulateModal';

const SimulateScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [initialValue, setInitialValue] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(2);
  const [months, setMonths] = useState(120);
  const [monthlyContribution, setmonthlyContribution] = useState(2000);
  const [investedValueWithoutIncome, setInvestedValueWithoutIncome] = useState(
    0
  );
  const [dividends, setDividends] = useState(0);
  const [
    investedValueWithIncomeAndMontly,
    setInvestedValueWithIncomeAndMontly,
  ] = useState(0);

  const onModalShow = () => {
    setModalVisible(!isModalVisible);
  };

  const calculateInvestedValueWithoutIncome = () =>
    initialValue + months * monthlyContribution;

  const calculateInvestedValueWithIncomeMonthly = () => {
    let ratePercentage = monthlyIncome / 100;
    let denominator = Math.pow(ratePercentage + 1, months) - 1;

    return parseFloat(
      monthlyContribution * (denominator / ratePercentage)
    ).toFixed(2);
  };

  const calculateDividends = (valueWithIncomeAndMontly) => {
    return ((valueWithIncomeAndMontly * monthlyIncome) / 10).toFixed(2);
  };

  const onSimulate = () => {
    // Calculate the value without income rate
    let valueWithoutIncome = calculateInvestedValueWithoutIncome();
    setInvestedValueWithoutIncome(valueWithoutIncome);

    // Calculate the value with income rate and monthly contributions
    let valueWithIncomeAndMontly = calculateInvestedValueWithIncomeMonthly();
    setInvestedValueWithIncomeAndMontly(valueWithIncomeAndMontly);

    // Calculate the dividends
    let dividendsValue = calculateDividends(valueWithIncomeAndMontly);
    setDividends(dividendsValue);

    onModalShow();
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={colors.darkPurple} />

      <HeaderComponent title="Simulate" />

      <SimulateContainer>
        {/* <TextField
          label="Valor inicial"
          value={initialValue}
          onChangeText={(initialValueText) =>
            setInitialValue(parseInt(initialValueText))
          }
          containerStyle={{ width: '100%' }}
          textColor={colors.lightGrey}
          tintColor={colors.lightGrey}
          baseColor={colors.lightGrey}
          keyboardType="number-pad"
        />

        <TextField
          label="Rendimento mensal"
          value={monthlyIncome}
          onChangeText={(monthlyIncomeText) =>
            setMonthlyIncome(parseInt(monthlyIncomeText))
          }
          containerStyle={{ width: '100%' }}
          textColor={colors.lightGrey}
          tintColor={colors.lightGrey}
          baseColor={colors.lightGrey}
          keyboardType="number-pad"
        />

        <TextField
          label="Meses"
          value={months}
          onChangeText={(monthsText) => setMonths(parseInt(monthsText))}
          containerStyle={{ width: '100%' }}
          textColor={colors.lightGrey}
          tintColor={colors.lightGrey}
          baseColor={colors.lightGrey}
          keyboardType="number-pad"
        />

        <TextField
          label="Aportes mensais"
          value={monthlyContribution}
          onChangeText={(monthlyContributionText) =>
            setmonthlyContribution(parseInt(monthlyContributionText))
          }
          containerStyle={{ width: '100%' }}
          textColor={colors.lightGrey}
          tintColor={colors.lightGrey}
          baseColor={colors.lightGrey}
          keyboardType="number-pad"
        /> */}

        <SimulateButton onPress={() => onSimulate()}>
          <SimulateTextButton>Simular</SimulateTextButton>
        </SimulateButton>

        <SimulateModal
          isModalVisible={isModalVisible}
          onModalShow={() => onModalShow()}
          investedValueWithoutIncome={investedValueWithoutIncome}
          investedValueWithIncomeAndMontly={investedValueWithIncomeAndMontly}
          dividends={dividends}
          months={months}
        />
      </SimulateContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
const SimulateContainer = styled.View`
  margin-top: 30px;
  padding: 15px;
  align-items: center;
`;

const Divider = styled.View`
  height: 1;
  background-color: #f3f3f3;
  margin-top: 40;
`;

const SimulateButton = styled.TouchableOpacity`
  height: 50px;
  width: 150px;
  border-radius: 5px;
  background-color: ${colors.purple};
  margin: 40px 0;
  align-items: center;
  justify-content: center;
`;

const SimulateTextButton = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InvestimentTitle = styled.Text`
  color: ${colors.lightGrey};
  font-size: 15px;
  font-weight: 300;
  text-align: left;
  padding: 0 0 0px 10px;
`;

const ChartContainer = styled.View`
  align-items: center;
`;

export default SimulateScreen;
