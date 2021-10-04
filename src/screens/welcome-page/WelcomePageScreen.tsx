import {PROPERTY_TYPES} from '@babel/types';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import Ant from 'react-native-vector-icons/AntDesign';
import {NStackParamList} from '../../navigations/NStack';
import {navs} from '../../utils/navs';
type Props = StackScreenProps<NStackParamList, 'WelcomePage'>;
export const WelcomePageScreen = (props: Props) => {
  const goToQutation = () => {
    const {Quotation} = navs.screens;
    props.navigation.navigate(Quotation as keyof NStackParamList);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>WelcomePageScreen</Text>
      <Text style={styles.text}>
        CloudFactory - компания с обширным опытом автоматизации деятельности в
        инвестиционно-банковской сфере Наша специализация это создание
        программного обеспечения класса front-middle office и систем
        риск-менеджмента, а так же мобильных приложений для финансовых компаний.
        Нами разработана линейка программных продуктов для учета, анализа и
        предоставления различной финансовой информации для трейдинга и
        подразделений бэк-офиса, а так же для предоставления API по самому
        широкому виду финансовых данных. Помимо внедрения собственных
        программных решений, мы предоставляем услуги по интеграции программных
        решений сторонних вендоров в общее информационное пространство, а также
        услуги по автоматизации структурных подразделений финансовых компаний и
        банков.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToQutation}>
          <Ant name="arrowright" size={moderateScale(30)} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    margin: '20@ms',
  },
  buttonContainer: {
    alignItems: 'center',
    height: '40%',
    justifyContent: 'center',
  },
  button: {
    padding: '10@ms',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60@ms',
    height: '60@ms',
    borderRadius: '30@ms',
  },
  header: {
    fontSize: '20@ms',
    fontWeight: 'bold',
    paddingVertical: '20@ms',
  },
  text: {
    paddingTop: '20@ms',
    color: 'black',
  },
});
