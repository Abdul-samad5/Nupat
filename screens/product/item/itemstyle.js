
import { StyleSheet } from 'react-native';
const itemstyle = StyleSheet.create({
	itemview: {
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		gap: 2,
		width:200,
	},
	icon:{
		position:'absolute',
		bottom:-35,
		right:-5,
	},
	item:{
		marginTop:-45
	},
	name:{fontSize:16,
	fontWeight:700},
	itemimg: {
		width: 120,
		height: 100,
		borderRadius: 10,	
	}
})

export default itemstyle