import { Box, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import StarRateIcon from '@material-ui/icons/StarRate';
import styles from "./HotelPage.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
import RoomIcon from '@material-ui/icons/Room';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import PoolIcon from '@material-ui/icons/Pool';
import WifiIcon from '@material-ui/icons/Wifi';
import SpaIcon from '@material-ui/icons/Spa';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import DeckIcon from '@material-ui/icons/Deck';
import RoomCard from "../RoomCard/RoomCard";



export function HotelPageData() {
    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setInterval(() => {
            handleScroll();
        }, 500);
        return () => {
            clearInterval(timer);
        }
    }, [])
    const hotel = useSelector(state => state.currentHotel);
    const starArr = new Array(Math.round(hotel.rating)).fill(1);
    const [value, setValue] = useState(0);
    const ref = useRef();
    const useStyles = makeStyles({
        prime: {
            width: "60%",
            display: "flex",
            margin: "30px",
            fontSize: "15px",
        },
        subTabs: {
            width: "17%",
            fontSize: "14px",
            textTransform:"none"
        }
    })
    const classes = useStyles();
    const handleClick = (val) => {
        window.scrollTo(0, val);
        console.log(window.pageYOffset);
    }
    const handleChange = (event, newValue) => {
        ref.current = newValue;
        setValue(newValue);
    };
    const handleScroll = () => {
        const val = window.pageYOffset;
        if ((val < 1089) && (ref.current !== 0)) {
            console.log("sp1",value);
            ref.current = 0;
            setValue(0);
        } else if ((val >= 1070) && (val < 3208) && (ref.current !== 1)) {
            console.log("sp2",value);
            ref.current = 1;
            setValue(1);
        } else if ((val >= 3208) && (val < 5000) && (ref.current !== 2)) {
            console.log("sp3",value);
            ref.current = 2;
            setValue(2);
        }
    }
    return (
        <div style={{backgroundColor:"rgb(255, 255, 255)"}}>
            <div className={styles.container}>
                    <div className={styles.innerContainer}>
                        <Box className={styles.imageContainer}>
                            <div className={styles.bigBox}>
                                <img alt="hotelImage" src={hotel.images[0].url}/>
                            </div>
                            <div>{[...hotel?.images.slice(1)].map((item) => {
                                return <div><img alt="hotelsImage" src={item.url}/></div>
                            })}
                            </div>
                        </Box>
                        <div className={styles.tabContainer}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            className={classes.prime}
                            indicatorColor="primary"
                            textColor="primary"
                            style={{backgroundColor:"white"}}
                        >
                            <Tab onClick={() => handleClick()} style={{minWidth:"6%"}} className={classes.subTabs} label="Overview" />
                            <Tab onClick={() => handleClick(1183)} style={{minWidth:"6%"}} className={classes.subTabs} label="Rooms" />
                            <Tab onClick={() => handleClick(3210)} style={{minWidth:"6%"}} className={classes.subTabs} label="Location" />
                            <Tab style={{minWidth:"6%"}} className={classes.subTabs} label="Amenities" />
                            <Tab style={{minWidth:"6%"}} className={classes.subTabs} label="Policies" />
                            <Tab style={{minWidth:"6%"}} className={classes.subTabs} label="Reviews" />
                            </Tabs>
                        </div>
                        <div className={styles.detailsDiv}>
                            <div>
                                <div><h2>{hotel.name}</h2>
                                <div className={styles.ratingDiv}>{starArr.map(() => { return <StarRateIcon style={{ color: "#807d7d" }} /> })}</div></div>
                                <Typography variant="h7">{hotel.rating}/5</Typography>
                                <div className={styles.detailsSub}>
                                <h3>Popular Amenities</h3>
                                <div className={styles.amenities}>
                                    <p className={styles.flexDisp}><PoolIcon/>Pool</p>
                                    <p className={styles.flexDisp}><AcUnitIcon/>Air Conditioning</p>
                                    <p className={styles.flexDisp}><WifiIcon/>Free Wifi</p>
                                    <p className={styles.flexDisp}><SpaIcon/>Spa</p>
                                    <p className={styles.flexDisp}><LocalParkingIcon/>Parking Included</p>
                                    <p className={styles.flexDisp}><RestaurantMenuIcon/>Restaurant</p>
                                </div>
                                </div>
                                <div className={styles.detailsSub}>
                                <h3>Cleanliness and safety practices</h3>
                                <div>Pool</div>
                                    <p>Cleaned with disinfectant</p>
                                    <p>Hand sanitizer provided</p>
                                    <p>72-hour vacancy between guest room stays</p>
                                    <p>Personal protective</p>
                                    <p>Restaurant</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.mapDiv}>
                                    <h5>*MAP*</h5>
                                </div>
                                <div>
                                    <h3>Explore the area</h3>
                                    <div className={styles.explore}>
                                        <p className={styles.flexDisp}><RoomIcon/>Suburban Gateway</p>
                                        <p className={styles.flexDisp}><RoomIcon/>Shivaji Museum</p>
                                        <p className={styles.flexDisp}><RoomIcon/>Trafford Castle</p>
                                        <p className={styles.flexDisp}><DeckIcon/>Kumaran Park</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.roomDiv}>
                        <h1>Choose your Room</h1>
                        <div className={styles.rooms}>
                        <RoomCard img={"https://images.trvl-media.com/hotels/1000000/470000/465100/465005/5b2c7bd3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"} name={"Superior Room, 2 Twin Beds, City View"}/>
                        <RoomCard img={"https://images.trvl-media.com/hotels/1000000/470000/465100/465005/5b2c7bd3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"} name={"Deluxe Room, 2 Twin Beds, City View"}/>
                        <RoomCard img={"https://images.trvl-media.com/hotels/1000000/470000/465100/465005/5b2c7bd3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"} name={"Executive Suite, 1 King Bed, City View (Inclusive of Bombay Chai)"}/>
                        <RoomCard img={"https://images.trvl-media.com/hotels/1000000/470000/465100/465005/5b2c7bd3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"} name={"SeleQtions Suite, 1 King Bed, City View (Inclusive of Bombay Chai)"}/>
                        </div>
                        </div>
                    <div className={styles.areaDiv}>
                        <div className={styles.subArea}>
                            <div>
                                <h1>About this Area</h1>
                                <h3>{hotel.city}</h3>
                        <div className={styles.aboutArea}><p>Taj Mahal Tower, Mumbai is located in Colaba, a neighborhood in Mumbai, and is in the city center and by the sea. Chhatrapati Shivaji Maharaj Museum and National Centre for the Performing Arts are cultural highlights, and some of the area's notable landmarks include Gateway of India and Flora Fountain. Looking to enjoy an event or a game? See what's going on at Wankhede Stadium, or consider JioGarden for a night out.</p></div>
                            </div>
                            <div>
                                <h4>*MAP*</h4>
                                
                            </div>
                        </div>
                        <div className={styles.subArea}>
                            <div>

                            </div>
                            <div className={styles.others}>
                                <div>
                                    <div className={styles.flexDisp}><RoomIcon/><h3>What's nearby</h3></div>
                                    <p>Front Bay - 1 min walk</p>
                                    <p>Gateway of India - 5 min walk</p>
                                    <p>Chhatrapati Shivaji Maharaj Museum - 9 min walk</p>
                                    <p>Mantralaya - 13 min walk</p>
                                    <p>Bombay Castle - 17 min walk</p>
                                </div>
                                <div>
                                    <div className={styles.flexDisp}><RestaurantMenuIcon/><h3>Restaurants</h3></div>
                                    <p>Shamiana – Pool-view restaurant. Open 24 hours.</p>
                                    <p>Aquarius – Poolside restaurant. Serves light fare.</p>
                                    <p>Wasabi by Morimoto – Serves lunch and dinner. Reservations required.</p>
                                    <p>Golden Dragon – Serves lunch and dinner. Reservations required.</p>
                                    <p>Souk – Serves lunch and dinner. Reservations required.</p>
                                </div>
                                <div>
                                    <div className={styles.flexDisp}><DriveEtaIcon/><h3>Getting around</h3></div>
                                    <p>Chhatrapati Shivaji Maharaj Terminus Railway Station - 3 min drive</p>
                                    <p>Grant Road Station - 7 min drive</p>
                                    <p>Chhatrapati Shivaji International Airport (BOM) - 55 min drive</p>
                                </div>

                            </div>
                        </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    )
}