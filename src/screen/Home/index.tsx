import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import {Field, Formik} from 'formik';
import Input from '../../component/Input';
import SearchIcon from '../../../assets/icons/search.svg';
import SearchDrawer from '../../component/SearchDrawer';

type Props = {};

const Home = (props: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F5F7'}}>
      {drawerOpen ? (
        <SearchDrawer setDrawerOpen={setDrawerOpen} />
      ) : (
        <SafeAreaView style={{flex: 1, gap: 8}}>
          <View style={styles.mainWrapper}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'space-between',
                gap: 15,
              }}>
              <TextInput
                onFocus={() => setDrawerOpen(true)}
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
            </View>
            <View style={{marginTop: 24, gap: 17}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 17, color: '#3E5481'}}>
                Category
              </Text>
              <View style={{flexDirection: 'row', gap: 16}}>
                {[...Array(3).keys()].map(x => {
                  return (
                    <TouchableHighlight
                      style={{
                        backgroundColor: '#F4F5F7',
                        paddingVertical: 14,
                        paddingHorizontal: 25,
                        borderRadius: 999,
                      }}>
                      <Text style={{color: '#9FA5C0'}}>
                        {['All', 'Food', 'Drinks'][x]}
                      </Text>
                    </TouchableHighlight>
                  );
                })}
              </View>
            </View>
          </View>
          <ScrollView>
            <View
              style={[
                styles.mainWrapper,
                {flexDirection: 'row', flexWrap: 'wrap', gap: 25},
              ]}>
              {[...Array(5).keys()].map(x => {
                return (
                  <View style={{width: '46%', height: 256, gap: 16}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={require('../../../assets/images/196.png')}
                      />
                      <Text
                        style={{
                          marginLeft: 8,
                          color: '#2E3E5C',
                          fontSize: 12,
                          letterSpacing: 0.5,
                          fontWeight: '500',
                        }}>
                        Calum Lewis
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={require('../../../assets/images/188.png')}
                        style={{
                          width: '100%',
                          height: 151,
                          borderRadius: 16,
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 17,
                          color: '#3E5481',
                          fontWeight: 'bold',
                          letterSpacing: 0.5,
                          marginBottom: 8,
                        }}>
                        Pancake
                      </Text>
                      <Text style={{fontSize: 12, fontWeight: '500'}}>
                        Food - 60mins
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default Home;
