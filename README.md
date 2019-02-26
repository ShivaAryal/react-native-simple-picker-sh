
# react-native-simple-picker-sh

### Highly customizable small sized picker library for react native

## Getting started

`$ npm install react-native-simple-picker-sh --save`

E.g.:

``` 
import {Picker} from 'react-native-simple-picker'
export default class TestPicker extends Component{
	state={
		pickedItem:''
	}
	render(){
		return(
			<View>
				<Picker
					items={['foo','bar']}
					selectedValue={this.state.pickedItem}
					placeHolder="Select an item"
					onChange={(item)=>this.setState({pickedItem:item})}
					height={40}
					width={170}
					itemsHeight={40}
					itemsWidth={150}
				/>
			</View>
		)
	}
} 
```

##Props

### A. onChange (required)
Callback when item is selected
onChange={(text)=>onChangeText(text)}

### B. items (required)
Array of items to be shown
items=['foo','bar']

### C. selectedValue
What should be shown after the item selection

### 1. backgroundColor
Background color for the picker view

default value : '#F5F5F5'

### 2. borderColor
Border color for the picker view

default value : '#E0E0E0'

### 3. borderWidth
Border width for the picker view

### 4. borderRadius
Border radius for the picker view

### 5. height
Height of the picker view

default value : 50

### 6. width
Width of the picker view

default value : 170

### 7. justifyContent
Justify content flex property for the selected or placeholder value and the dropdown icon

default value : 'space-between'

### 8. alignItems
Align items flex property for the selected or placeholder value and the dropdown icon

default value : 'center'

### 9. padding
Padding for the items inside the picker view

default value : 10

### 10. activeOpacity
Opacity for the onPress event of the picker view(range[0-1])

default value : 0.2

### 11. placeHolder
Placeholder to be shown in dropdown in case of no picked selected value or default selected value

default value : 'Select...'

### 12. placeHolderColor
Color of the placeholder or the selected item

default value : '#212121'

### 13. PlaceHolderFontSize
Font size of the placeholder or the selected item

default value : 20

### 14. iconColor
Color of the dropdown icon

default value : '#000'

### 15. backgroundVisibility
Transparency outside the picker popup(range[0-1])

default value : 0.8

### 16. offSetX
absolute X position of the picker popup

### 17. offSetY
absolute Y position of the picker popup

### 18. itemsHeight
Height of a single item inside picker popup

default value : 40

### 19. itemsWidth
Width of a single item inside picker popup

default value : 150

### 20. itemsBackgroundColor
BackgroundColor of the items inside the picker popup

default value : '#E0E0E0'

### 21. itemsDividerColor

default value : '#E0E0E0'

### 22. itemsDividerWidth

default value : 1

### 23. itemsTextColor

default value : '#000'

### 24. itemsFontSize

default value : 19
