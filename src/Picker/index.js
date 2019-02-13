import React, { Component } from 'react';
import { View,
    Modal,
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types'

export default class Picker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalVisible : false
         };
    }

    onItemSelect=(item)=>{
        this.props.onChange(item);
        this.setState({modalVisible:false})
        this.setState({pickedItem:item})
    }

    onLayout=()=>{
        this.picker.measure((x,y,w,h,ox,oy)=>{
            this.setState({offSetX:ox})
            this.setState({offSetY:oy+20})
        })
    }

    componentDidMount(){
        if(this.props.selectedValue){
            this.setState({pickedItem:this.props.selectedValue})
        }
    }

    render() {
        return (
        <View>
            <TouchableOpacity
                onLayout={()=>this.onLayout()}
                ref={component => this.picker = component}
                style={{
                    backgroundColor:this.props.backgroundColor,
                    borderColor:this.props.borderColor,
                    borderWidth:this.props.borderWidth,
                    borderRadius:this.props.borderRadius,
                    flexDirection:this.props.flexDirection,
                    height:this.props.height,
                    width:this.props.width,
                    justifyContent:this.props.justifyContent,
                    alignItems:this.props.alignItems,
                    padding:this.props.padding
                }}
                activeOpacity={this.props.activeOpacity}
                onPress={()=>this.setState({modalVisible:true})}>
                <Text
                    style={{
                        color:this.props.placeHolderColor ,
                        fontSize:this.props.placeHolderFontSize,
                    }}>
                    {this.state.pickedItem || this.props.placeHolder}
                </Text>
                <View
                    style={{
                        width: 0,
                        height: 0,
                        backgroundColor: 'transparent',
                        borderStyle: 'solid',
                        borderLeftWidth: 8,
                        borderRightWidth: 8,
                        borderTopWidth: 12,
                        borderLeftColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderTopColor: this.props.iconColor
                      }}/>
            </TouchableOpacity>
            <Modal
                visible={this.state.modalVisible}
                onRequestClose={()=>this.setState({modalVisible:false})}
                transparent={true}>
                <TouchableOpacity
                    onPress={()=>this.setState({modalVisible:false})}
                    activeOpacity={1}
                    style={{
                        backgroundColor:`rgba(255,255,255,${this.props.backgroundVisibilty}`,
                        // flex:1,
                        paddingLeft:this.props.offSetX || this.state.offSetX,
                        paddingTop:this.props.offSetY || this.state.offSetY
                    }}>
                    {this.props.items.map((item,i)=>(
                        <TouchableOpacity
                            key={i}
                            style={{
                                flexDirection:'column',
                                height:this.props.itemsHeight,
                                width:this.props.itemsWidth,
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:this.props.itemsBackgroundColor,
                                borderBottomColor:this.props.itemsDividerColor,
                                borderBottomWidth:this.props.itemsDividerWidth,
                                paddingHorizontal:10
                            }}
                            onPress={()=>this.onItemSelect(item)}
                            activeOpacity={0.8}
                        >
                            <Text
                                style={{
                                    color:this.props.itemsTextColor,
                                    fontSize:this.props.itemsFontSize,
                                }}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </TouchableOpacity>

            </Modal>
        </View>
        );
    }
}

Picker.propTypes = {
    onChange:PropTypes.func.isRequired,
    backgroundColor:PropTypes.string,
    borderColor:PropTypes.string,
    borderWidth:PropTypes.number,
    borderRadius:PropTypes.number,
    flexDirection:PropTypes.string,
    height:PropTypes.number,
    width:PropTypes.number,
    justifyContent:PropTypes.string,
    alignItems:PropTypes.string,
    padding:PropTypes.number,
    activeOpacity:PropTypes.number,
    placeHolderColor:PropTypes.string,
    placeHolderFontSize:PropTypes.number,
    placeHolder:PropTypes.string,
    backgroundVisibilty:PropTypes.number,
    items:PropTypes.array.isRequired,
    itemsHeight:PropTypes.number,
    itemsWidth:PropTypes.number,
    itemsBackgroundColor:PropTypes.string,
    itemsDividerColor:PropTypes.string,
    itemsTextColor:PropTypes.string,
    itemsFontSize:PropTypes.number,
    iconColor:PropTypes.string,
    itemsDividerWidth:PropTypes.number,
    selectedValue:PropTypes.string
}

Picker.defaultProps={
    backgroundColor:'#F5F5F5',
    borderColor:'#E0E0E0',
    borderWidth:0,
    borderRadius:0,
    flexDirection:'row',
    height:50,
    width:170,
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    activeOpacity:0.2,
    placeHolderColor:'#212121',
    placeHolderFontSize:20,
    placeHolder:'Select...',
    backgroundVisibilty:0.8,
    itemsHeight:40,
    itemsWidth:150,
    itemsBackgroundColor:'#E0E0E0',
    itemsTextColor:'#000',
    itemsFontSize:19,
    iconColor:'#000',
    itemsDividerColor:'#E0E0E0',
    itemsDividerWidth:1
}