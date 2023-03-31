
import { StyleSheet } from 'react-native';
const creatAccountstyle = StyleSheet.create({
  creatAccountsafeview: {
    flex: 1,
  },
  creatAccountinputview: {
    position: "absolute",
    bottom: 40,
  },
  pagetext:{
    marginTop:5, 
    color:'#000000', 
    fontSize:18, 
    textAlign:'center',
    fontWeight: 600,
    marginTop:50
  },
  inputview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#E2E2E2",
    padding: 10,
    borderRadius: 10,
  },
  input: {
    width: "100%",
    padding: 5,
    color: "white",
  },
  sumbitview: {
    backgroundColor: "#037F00",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  submittext: {
    color: "white",
    fontSize: 20,
  },
  pagenametext: {
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 10,
    marginTop:5,
  },
  orview: {
    alignItems: "center",
    margin: 10,
  },
  ortext: {
    fontSize: 20,
  },
  socialview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop:20
  },
  noaccountview: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  noaccounttext: {
    fontSize: 15,
    fontWeight: "300",
  },
	signuptext: {
		fontSize: 20,
		fontWeight:"500"
  },
  social:{
    border:'solid',
    borderColor:'black',
    borderRadius:5,
    borderWidth:1,
    padding:5,
    backgroundColor:'white'
  },
  noview:{
    position:'absolute',
    left:100,
    bottom:-200
  }
});

export default creatAccountstyle