import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:100,
       
       
    },
    Biggrid: {
    justifyContent:"center"
    },
    gridItem: {
        
    
       maxWidth:450,
        padding: " 0 1%",
        justifyContent:"center"
      
       
    },

    TextField: {
        width: "100%",
   
    },
    Button: {
        width: "100%",
        padding: "5 auto",
        background: "#CF4B6D",
        height: 50,
        borderRadius:0
    },
    Box: {
        marginTop: 10,
       

    },
    textsize: {
        fontSize: 13,
marginTop:10,
        width: "100%",
    },
    Container: {
        marginTop: 20
    },
    Box1: {
        display: "flex",
        border: "1px solid black",
        marginTop: 10,
        alignItems: "center",
        maxHeight: 55,
        justifyContent: "space-between"

    },
    Box2: {
        display: "flex",
        alignItems: "center",
        alignContent: "flex start",
        columnGap: 10,
        paddingLeft: 10,
 


    },
    Box3: {
        paddingRight: 10
    },
    Navbar: {
    maxWidth:"100%",
        background: "#FFFFFF",
        maxHeight: 57,
        display: "flex",
        
    },
    IconColor: {
        color: "#3096A4",
       
      },
    LinkDeco: {
        textDecoration: "none",
     
      
    },
    LinkDeco1: {
        textDecoration: "none",
        color: "#3096A4"
      
    },
    ArrowForward: {
        
    },
  





}))