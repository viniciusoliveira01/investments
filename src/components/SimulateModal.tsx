import React from 'react';
import {
  StatusBar,
  Dimensions,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styled from 'styled-components';
import { LineChart } from 'react-native-chart-kit';
import { Icon } from 'native-base';
// import Modal from 'react-native-modal';

import colors from '@config/colors';

const SimulateModal = ({
  isModalVisible,
  onModalShow,
  investedValueWithoutIncome,
  dividends,
  investedValueWithIncomeAndMontly,
  months,
}) => {
  console.log(investedValueWithIncomeAndMontly);
  return (
    <Modal isVisible={isModalVisible}>
      <ModalContainer>
        <HeaderModal>
          <InvestimentTitle>
            Gráfico do dinheiro em relação ao tempo
          </InvestimentTitle>
          <TouchableOpacity
            onPress={() => onModalShow()}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
          >
            <Icon name="close" color="#000" />
          </TouchableOpacity>
        </HeaderModal>

        <ChartContainer>
          <LineChart
            data={{
              labels: ['10 meses', '30 meses', '60 meses', `${months} meses`],
              datasets: [
                {
                  data: [
                    '10000',
                    '120000',
                    '400000',
                    parseInt(investedValueWithIncomeAndMontly),
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 50} // from react-native
            height={250}
            yAxisLabel={'R$'}
            chartConfig={{
              backgroundColor: '#7025FF',
              backgroundGradientFrom: '#7025FF',
              backgroundGradientTo: '#4e19b2',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 5,
            }}
          />
        </ChartContainer>
        <InvestimentRow>
          <InvestimentTitle>Total acumulado: </InvestimentTitle>
          <InvestimentText>
            R$ {investedValueWithIncomeAndMontly}
          </InvestimentText>
        </InvestimentRow>
        <InvestimentRow>
          <InvestimentTitle>Total investido: </InvestimentTitle>
          <InvestimentText>R$ {investedValueWithoutIncome}</InvestimentText>
        </InvestimentRow>
        <InvestimentRow>
          <InvestimentTitle>Juros total: </InvestimentTitle>
          <InvestimentText>
            R$
            {(
              investedValueWithIncomeAndMontly - investedValueWithoutIncome
            ).toFixed(2)}
          </InvestimentText>
        </InvestimentRow>
        <InvestimentRow>
          <InvestimentTitle>Juros mensais: </InvestimentTitle>
          <InvestimentText>R$ {dividends}</InvestimentText>
        </InvestimentRow>
      </ModalContainer>
    </Modal>
  );
};

const ModalContainer = styled.View`
  height: 510px;
  background-color: #fff;
  border-radius: 6;
`;

const HeaderModal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const InvestimentTitle = styled.Text`
  color: ${colors.darkGrey};
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`;

const ChartContainer = styled.View`
  align-items: center;
`;

const InvestimentText = styled.Text`
  color: ${colors.lightGrey};
  font-size: 13px;
  font-weight: 300;
  text-align: left;
`;

const InvestimentRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export default SimulateModal;
