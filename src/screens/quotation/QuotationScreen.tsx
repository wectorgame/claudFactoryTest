import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ScaledSheet} from 'react-native-size-matters';
import {getQuotations} from '../../api/getQuotations';
interface Quotation {
  percentChange: string;
  last: string;
  highestBid: string;
  id: string;
}
export const QuotationScreen = () => {
  const [quotations, setQuotations] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getQuotations().then(data => {
      if (data.success) {
        setQuotations(data.quotations);
        setError(false);
      } else {
        console.log(data.error);
        setError(true);
      }
    });
    const timer = setInterval(() => {
      getQuotations().then(data => {
        if (data.success) {
          setQuotations(data.quotations);
          setError(false);
        } else {
          console.log(data.error);
          setError(true);
        }
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const renderRow = (name: string, quotation: Quotation) => {
    return (
      <View style={styles.rowContainer} key={quotation.id}>
        <View style={styles.cell}>
          <Text style={styles.textCell}>{name}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.textCell}>{quotation.last}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.textCell}>{quotation.highestBid}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.textCell}>{quotation.percentChange}</Text>
        </View>
      </View>
    );
  };
  return Object.keys(quotations).length ? (
    <ScrollView style={styles.dataContainer}>
      <Text style={styles.header}>Таблица</Text>
      <View style={styles.rowContainer}>
        {error ? (
          <View style={styles.cell}>
            <Text style={styles.error}>Ошибка</Text>
          </View>
        ) : (
          <>
            <View style={styles.cell}>
              <Text style={styles.textCell}>name</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.textCell}>last</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.textCell}>highestBid</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.textCell}>percentChange</Text>
            </View>
          </>
        )}
      </View>
      {Object.entries(quotations).map(quot => {
        return renderRow(quot[0], quot[1]);
      })}
    </ScrollView>
  ) : (
    <View style={styles.loadContainer}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};
const styles = ScaledSheet.create({
  dataContainer: {
    paddingVertical: '15@ms',
  },
  header: {
    fontSize: '20@ms',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '20@ms',
  },
  error: {
    color: 'red',
  },
  textCell: {
    textAlign: 'center',
  },
  loadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  loadText: {
    fontSize: '20@ms',
  },
  rowContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    width: '100%',
  },
  cell: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#000',
    padding: '10@ms',
    justifyContent: 'center',
  },
});
