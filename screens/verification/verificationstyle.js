
import { StyleSheet } from 'react-native';
const verificationstyle = StyleSheet.create({
  verificationsafeview: {
    flex: 1,
    backgroundColor: "#037F00",
    marginTop: 5,
  },
  verificationviews: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 1,
    marginTop:-300,
    flex: 1,
  },
  inputview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  input: {
    padding: 20,
    color: "black",
    backgroundColor: "white",
  },
  codetext: {
    color: "white",
    fontSize: 15,
    fontWeight: "400",
    marginTop:150,
  },
  codetext2:{
    
    color: "white",
    fontSize: 15,
    fontWeight: "400",
  },
  submitbtn: {
    backgroundColor: "white",
    padding: 10,
    width:200,
	  // marginTop: 180,
    position:'absolute',
    bottom:-150,
    right:-95,
	  borderRadius: 10,
	alignItems:'center'
  },
	codetextsubmit: {
		color: 'black',
		fontSize: 18,
		padding:8,
   
  },
  nums:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginBottom:-40,
    marginTop:10,
  },
  num:{
    color:'white',
    margin:10,
    padding:15,
    fontSize:30    
  }
});

export default verificationstyle