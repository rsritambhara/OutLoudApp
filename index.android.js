/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Linking,
    Dimensions,
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import RoundedButton from './RoundedButton'



const FirstRoute = () =>
    <View style={[ styles.container, { backgroundColor: '#333366' } ]}>


        <Text style={{ marginTop:20,marginRight:30, marginLeft:30, fontSize:30,fontWeight:'bold',color:'#FFFFFF',fontFamily:'Lato',}}>  <Text style={{color:'#A3A2B8'}}> What </Text>is Out-Loud?{"\n"}</Text>

        <Image style={{height:100,width:100,flex:1, resizeMode: 'contain',
            justifyContent: 'center', marginRight:30, marginLeft:30, flexDirection: 'column',}} source={require('./images/what.png')}/>


    <Text style={{color:'#FFFFFF',fontSize:14,flex:1, marginRight:30,
        marginLeft:30,flexDirection:'column',fontFamily:'Lato',textAlign:'right',lineHeight:25,}}>

        Wish someone would read that story or letter to you? {"\n"}
        Don't worry, we got you! We will <Text style={{fontWeight:'bold'}}>convert your text files to audio</Text>, in a jiffy. That too, for free!{"\n"}
    All you have to do is follow these simple steps.{"\n"}</Text>



        <Text style={{ fontSize: 14, marginRight:30, marginLeft:30,fontFamily:'Lato',textAlign:'right',fontSize:30,fontWeight:'bold',color:'#fff',}}> Ok so,{"\n"} <Text style={{color:'#A3A2B8'}}>  how</Text> does it work?{"\n"}</Text>
        <Image style={{left:280,height:100, marginRight:30, marginLeft:30,width:100,flex:1,flexDirection: 'row-reverse', justifyContent: 'flex-end',resizeMode: 'contain',}} source={require('./images/how.png')}/>
        <Text style={{color:'#FFFFFF',fontFamily:'Lato', textAlign:'left',fontSize: 14, marginRight:30, marginLeft: 30,lineHeight:28,}}>
    Out-Loud is an extremely <Text style={{fontWeight:'bold'}}> easy-to-use</Text> app. {"\n"}
     It was designed to convert text files of various formats to desired audio format without any hassle.{"\n"}
    1. Choose the file format of your text file.{"\n"}
    2. Choose the file.{"\n"}
    3. Convert.{"\n"}</Text>
    <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginRight:30, marginLeft:30,fontFamily:'Lato',}}> Voila!
        {"\n"} {"\n"}
    </Text>

        <Text style={[{fontSize:12,color:'#eaeaea',marginBottom:10,marginRight:30, marginLeft:30,}]}>Created By : Ritambhara Singh & Swati Jain Incubation Center</Text>

</View>;



const SecondRoute = () =><View>
        <View style={[ styles.block, { backgroundColor: '#A3A2B8' } ]} >

            <Image style={[styles.image,{margin:20}]} source={require('./images/formats.png')}/>
            <View style = {styles.div}s>
                <Text style={[styles.feature,{fontSize:23,paddingTop:20,marginBottom:10,color:'#fff'}]}> Supports various file formats</Text>
                <Text style={[styles.feature,{fontSize:16,marginTop:10,marginRight:10,}]}>Any text file format (.txt,.doc,.pdf) can be converted to desired
                    audio format.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
            </View>
         </View>

        <View style={[ styles.block, { backgroundColor: '#A3A2B8' } ]} >
            <View style = {styles.div}>
                <Text style={[styles.feature,{fontSize:23,paddingTop:20,marginBottom:10,color:'#fff'}]}>Simple User Interface</Text>
                <Text style={[styles.feature,{fontSize:16,marginTop:10,marginLeft:10,}]}>Out-Loud's interface was designed to provide user with utter ease while handling the app.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
            </View>
            <Image style={[styles.image,{margin:20}]} source={require('./images/ui.png')}/>
        </View>

        <View style={[ styles.block, { backgroundColor: '#A3A2B8' } ]} >
            <Image style={[styles.image,{margin:20}]} source={require('./images/quality.png')}/>
            <View style = {styles.div}>
                <Text style={[styles.feature,{fontSize:23,paddingTop:20,marginBottom:10,color:'#fff'}]}>High Quality and Fast</Text>
                <Text style={[styles.feature,{fontSize:16,marginTop:10,marginRight:10,marginBottom:20}]}>The generated audio is of supreme quality and can be understood without any difficulty.
                    Also, the time taken in the process is minimal.{"\n"}{"\n"}{"\n"}{"\n"}</Text>
            </View>
        </View>
        </View>;
//const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#678ab7' } ]} />;


export default class tabtest extends PureComponent {
    state = {
        intromode: false,
        index: 0,
        routes: [
            { key: '1', title: 'Out-Loud', },
            { key: '2', title: 'Features' },
            //{ key: '3', title: 'Thi' },

        ],
    };

    _handleChangeTab = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} />;

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={4} dotStyle={{marginBottom: 45}} selectedDotStyle={{marginBottom:50}} />;
    }

    _renderScene = SceneMap({
        '1': FirstRoute,
    '2': SecondRoute,
       // '3' : ThirdRoute
    });

    render() {
        if(!this.state.intromode)
        {return (

            <View style={{flex:1}}>
              <IndicatorViewPager
                  style={{flex:1}}
                  indicator={this._renderDotIndicator()}
              >

                <View style={{backgroundColor:'#FFFFFF', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={styles.logo}
                    source={require('./images/logoidk.png')}
                    />
                    <Text style={styles.tagline}>We will read it to you</Text>
                </View>

                <View style={{backgroundColor:'#333366', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={styles.img}
                           source={require('./images/uno.png')}
                    />
                    <Text style={styles.caption}>Convert your text to audio or generate an audio book.</Text>
                </View>
                <View style={{backgroundColor:'#6D67AF', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={styles.img}
                           source={require('./images/dos.png')}
                    />
                    <Text style={styles.caption}>Available in different languages, accents and genders.</Text>
                </View>
                <View style={{backgroundColor: '#A3A2B8', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={styles.img}
                           source={require('./images/tres.png')}
                    />
                    <Text style={styles.captiontres}>Few simple steps, few minutes.</Text>
                  <View style={styles.button}>
                    <RoundedButton style={styles.button} onPress={()=>this.setState({intromode:true})}>
                      Click to know more
                    </RoundedButton>
                  </View>
                </View>
              </IndicatorViewPager>
            </View>)
        }
        else {
            return (
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tagline: {
        color: '#949BB4',
        fontFamily: 'Tw Cen MT',
        top: 200,
        fontSize:17,
    },
    how:{
       // top:50,
        color:'#FFFFFF',
        fontSize: 14,
        marginRight:20,
        marginLeft:20,
       // lineHeight:25,
    },
    what:{
      //  top:20,
        //marginRight:20,
      //  marginLeft:20,
       // lineHeight:30,
    },
    logo:{
        flex: 1,
        width: 350,
        height: 300,
        resizeMode: 'contain',
        justifyContent: 'center',
        position: 'absolute',
        left: 70,
        top: 170,
    },
    img:{
        flex: 1,
        width: 220,
        height: 150,
        resizeMode: 'contain',
        justifyContent: 'center',
        position: 'absolute',
        top: 230,
    },
    buttonText:{
        color: '#fff',
    },
    button:{
        top:200,
        width:200,
        //backgroundColor:'#ffffff',
       // alignSelf: 'stretch',
        justifyContent: 'center',
        alignSelf:'center',
        //overflow: 'hidden',
    },


    caption: {
        color: '#FFFFFF',
        fontFamily: 'Tw Cen MT',
        fontSize: 18,
        top: 140,
        textAlign: 'center',
    },
    captiontres: {
        color: '#FFFFFF',
        fontFamily: 'Tw Cen MT',
        fontSize: 18,
        top: 150,
        textAlign: 'center',
    },
    slider: {
        marginBottom: 30,
        height:300
    },
    div: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    image: {
        height: 80,
        width:80,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    block: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    feature:{
        fontFamily:'Lato',
        color:'#fff',
        textAlign:'center'
        //lineHeight: 20,
    },
    sliderContainer: {
    }
});

AppRegistry.registerComponent('tabtest', () => tabtest);
