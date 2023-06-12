import {StyleSheet, Switch, Text, View, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from './config/Theme';

const Home = () => {
  const [colorScheme, setColorScheme] = useState(useColorScheme());
  let activeColors = colors[colorScheme];
  const [isEnabled, setIsEnabled] = useState(
    colorScheme == 'light' ? false : true,
  );
  const toggleSwitch = () => {
    if (colorScheme == 'light') {
      console.log('converted to dark');
      setColorScheme('dark');
      setIsEnabled(true);
    } else {
      setColorScheme('light');
      setIsEnabled(false);
    }
  };

  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);
  return (
    <View
      style={{
        backgroundColor: activeColors.secondary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: activeColors.primary}}>
        Selected Theme is {colorScheme}
      </Text>
      <View style={{flexDirection: 'row', paddingTop: '5%'}}>
        <Text style={{color: activeColors.primary}}>Dark Mode:</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
