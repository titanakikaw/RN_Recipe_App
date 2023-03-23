import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowBackIcon from '../../../assets/icons/arrow-ios-back-outline.svg';
import FilterIcon from '../../../assets/icons/Filter.svg';
type Props = {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchDrawer = ({setDrawerOpen}: Props) => {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 25, paddingHorizontal: 24}}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'space-between',
          alignItems: 'center',
          gap: 15,
        }}>
        <Pressable onPress={() => setDrawerOpen(false)}>
          <ArrowBackIcon height={20} width={20} />
        </Pressable>
        <TextInput
          style={{
            borderWidth: 1,
            paddingLeft: 56,
            borderRadius: 999,
            flexGrow: 4,
            flexShrink: 0,
            flexBasis: 'auto',
          }}
          placeholder="Search"
        />
        <FilterIcon height={20} width={20} />
      </View>
    </SafeAreaView>
  );
};

export default SearchDrawer;
