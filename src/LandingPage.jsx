
import {React, useState, useEffect, useRef} from "react";
import main from "./images/main.png";
import logo from "./images/logo_mimamsa.png";
import image2 from "./images/image2.png";
import clock from "./images/clock.gif";
import mainsmall from "./images//mainsmall.png";
import {Typography, Card, Grid} from "@mui/material";
import { motion } from "framer-motion";
import {useMediaQuery} from "@mui/material";

export default function LandingPage(){

    const [isInView, setIsInView] = useState(false);
    const [isImageInView, setIsImageInView] = useState(false);
    const mimamsaRef = useRef(null);
    const imageRef = useRef(null);

    const isLargeScreen = useMediaQuery('(min-width:1245px)');
    const isSmallScreen = useMediaQuery('(max-width:550px)');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(mimamsaRef.current); 
                }
            },
            { threshold: 0.2 }
        );
        if (mimamsaRef.current) {
            observer.observe(mimamsaRef.current);
        }
        return () => {
            if (mimamsaRef.current) {
                observer.unobserve(mimamsaRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const imageObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsImageInView(true);
                    imageObserver.unobserve(imageRef.current);
                }
            },
            { threshold: 0.2 }
        );
        if (imageRef.current) {
            imageObserver.observe(imageRef.current);
        }
        return () => {
            if (imageRef.current) {
                imageObserver.unobserve(imageRef.current);
            }
        };
    }, []);

    let content;


    if (isLargeScreen) {
        content = (
            <>
               <div style={{position: 'relative', overflowX: 'hidden' }}>
                <img src={main} style={{zIndex:-1, width:'100%', height:'98vh', }} />
                <center>
                <img src={clock} style={{zIndex:100000, top: '51%', left: '50%', transform: 'translate(-50%, -50%)',position: 'absolute',height:'80vh'}}/>
                </center>
                <Card style={{zIndex:999, position:'absolute', top:'0%', backgroundColor:'#1d352f', height:'50px', width:'100%', borderRadius:'0px', opacity:'82%'}}><img src={logo} style={{width:'300px', marginTop:'-5px'}} /></Card>

                        <motion.div
                            initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}
                            style={{position: "absolute", color: "#1d352f", top: "35%", left: "11%", zIndex: 999,}}>
                            <Typography style={{zIndex:999, position:'absolute', color:'#1d352f',  top: '35%', left: '11%', fontFamily: '"Syncopate", sans-serif', fontSize:'5.2rem'}}>COMING</Typography>
                        </motion.div>

                        <motion.div
                            initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}
                            style={{position: "absolute", color: "#1d352f",  top: '43%', left: '31%', zIndex: 999,}}>
                            <Typography style={{zIndex:999, position:'absolute', color:'#161c1f',  top: '43%', left: '31%', fontFamily: '"Allura", cursive', fontSize:'6rem'}}>soon</Typography>
                        </motion.div>

                        <motion.div
                            initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}
                            style={{position: "absolute", color: "#1d352f", top: '43%', right: '11%', zIndex: 999,}}>
                            <Typography style={{zIndex:999, position:'absolute', color:'#161c1f', top: '43%', right: '11%', fontFamily: '"Allura", cursive', fontSize:'6rem'}}>coming</Typography>
                        </motion.div>

                        <motion.div
                            initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}
                            style={{position: "absolute", color: "#1d352f", top: '56%', right: '11%',zIndex: 999,}}>
                            <Typography style={{zIndex:999, position:'absolute', color:'#1d352f', top: '56%', right: '11%', fontFamily: '"Syncopate", sans-serif', fontSize:'5.2rem'}}>SOON</Typography>
                        </motion.div>
                        
                        </div>

                        <Grid container style={{backgroundColor:'#1d352f', marginTop:'-5px',paddingBottom:'15px', paddingTop:'30px', opacity:'98%'}}>
                        <Grid item xs={7.5}>

                        <motion.div
                            ref={mimamsaRef} initial={{ opacity: 0, x: -100 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5 }}
                            style={{ color: "#1d352f", zIndex: 999,}}>
                            <Typography style={{color:'#d4ddce', fontFamily:'"Josefin Sans", sans-serif', marginTop:'50px', fontSize:'2.5rem'}}>Mimamsa</Typography>
                        </motion.div>
                        <motion.div
                            ref={mimamsaRef} initial={{ opacity: 0, x: -100 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5 }}
                            style={{ color: "#1d352f", zIndex: 999,}}>
                            <Typography style={{color:'#d4ddce', fontFamily:'"Quicksand", sans-serif', marginTop:'50px', marginLeft:'10%', marginRight:'10%', 
                                marginTop:'30px', fontSize:'1.2rem'}}>Mimamsa is a premier jewellery design house in Australia, home to master
                                artisans who create exquisite pieces that echo your unique style. Our extensive collection includes everything
                                from engagement rings and anniversary gifts to bespoke creations, pendants, necklaces, custom diamond watches, bracelets, 
                                earrings, and more. Whether you're looking for the perfect gift for someone special or a personal luxury, 
                                Mimamsa offers something extraordinary for every taste and occasion.</Typography>
                            <Typography style={{color:'#d4ddce', fontFamily:'"Quicksand", sans-serif',marginTop:'40px', fontSize:'1.2rem'}}><strong>Stay tuned—</strong> our full collection is coming soon. </Typography>
                            <Typography style={{color:'#d4ddce', fontFamily:'"Quicksand", sans-serif',marginTop:'2px', fontSize:'1.2rem'}}>Something exceptional awaits you.</Typography>
                        </motion.div>
                        </Grid>
                        <Grid item xs={4} style={{}}>
                            <motion.img src={image2}  ref={imageRef} initial={{ opacity: 0 }}   animate={isImageInView ? { opacity: 1} : {}} transition={{ duration: 3 }} 
                            style={{width:'100%', height:'100%'}} />
                        </Grid>
                        </Grid>
            </>
        );
    } else if (isSmallScreen) {
        content = (
            <>
                <div style={{position: 'relative', overflowX: 'hidden'}}>
                <img src={mainsmall} style={{zIndex:-1, width:'100%', height:'70vh',overflowX: 'hidden'}} />
               
                <center>
                <img src={clock} style={{zIndex:100000, top: '52%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute',height:'55%',overflowX: 'hidden'}}/>
                </center>

                <Card style={{zIndex:999, position:'absolute', top:'0%', backgroundColor:'#1d352f', height:'50px', width:'100%', borderRadius:'0px', opacity:'82%',overflowX: 'hidden'}}><img src={logo} style={{width:'300px', marginTop:'-5px'}} /></Card>

                <motion.div
                    initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}
                    style={{position: "absolute", color: "#1d352f", top: "40%", left: "50%", 
                    transform: "translate(-50%, -50%)", zIndex: 999}}>
                    <Typography style={{zIndex:999, position:'absolute', color:'#1d352f',  top: '40%', left: "50%", 
                    transform: "translate(-50%, -50%)", fontFamily: '"Syncopate", sans-serif', fontSize:'4rem'}}>COMING</Typography>
                </motion.div>


                <motion.div
                    initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}
                    style={{position: "absolute", color: "#1d352f", top: '65%', left: "50%", 
                        transform: "translate(-50%, -50%)", zIndex: 999,}}>
                    <Typography style={{zIndex:999, position:'absolute', color:'#1d352f', top: '65%',  left: "50%", 
                        transform: "translate(-50%, -50%)", fontFamily: '"Syncopate", sans-serif', fontSize:'4rem'}}>SOON</Typography>
                </motion.div>
                
                </div>

                <div style={{backgroundColor:'#1d352f', marginTop:'-5px',paddingBottom:'15px', paddingTop:'30px', opacity:'98%'}}>
               

                <motion.div
                    ref={mimamsaRef} initial={{ opacity: 0}} animate={ {opacity: 1} } transition={{ duration: 1.5 }}
                    style={{ color: "#1d352f", zIndex: 999,}}>
                    <Typography style={{color:'#d4ddce', fontFamily:'"Josefin Sans", sans-serif', marginTop:'50px', fontSize:'2.5rem'}}>Mimamsa</Typography>
                </motion.div>
                <motion.div
                    ref={mimamsaRef} initial={{ opacity: 0}} animate={ { opacity: 1 }} transition={{ duration: 1.5 }}
                    style={{ color: "#1d352f", zIndex: 999,}}>
                    <Typography style={{color:'#d4ddce', fontFamily:'"Quicksand", sans-serif', marginTop:'50px', marginLeft:'50px', marginRight:'50px', 
                        marginTop:'30px', fontSize:'1.2rem'}}>Mimamsa is a premier jewellery design house in Australia, home to master
                        artisans who create exquisite pieces that echo your unique style. Our extensive collection includes everything
                        from engagement rings and anniversary gifts to bespoke creations, pendants, necklaces, custom diamond watches, bracelets, 
                        earrings, and more. Whether you're looking for the perfect gift for someone special or a personal luxury, 
                        Mimamsa offers something extraordinary for every taste and occasion.</Typography>
                    <Typography style={{color:'#d4ddce', fontFamily:'"Quicksand", sans-serif',marginTop:'40px', fontSize:'1.2rem',marginLeft:'50px', marginRight:'50px'}}><strong>Stay tuned—</strong> our full collection is coming soon. </Typography>
                    <Typography style={{color:'#d4ddce', fontFamily:'"Quicksand", sans-serif',marginTop:'2px', fontSize:'1.2rem',marginLeft:'50px', marginRight:'50px'}}>Something exceptional awaits you.</Typography>
                </motion.div>
              
                    <motion.img src={image2}  ref={imageRef} initial={{ opacity: 0 }}   animate={isImageInView ? { opacity: 1} : {}} transition={{ duration: 3 }} 
                    style={{width:'70%', height:'70%', marginTop:'50px',left:'50%', right:'50%'}} />
                
                </div>
            </>
        );
    } else {
        // For medium screens or any other conditions
        content = (
            <>
                <div style={{position: 'relative', overflowX: 'hidden'}}>
                <img src={main} style={{zIndex:-1, width:'100%', height:'80vh'}} />
               
                <center>
                <img src={clock} style={{zIndex:100000, top: '52%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute',height:'70%',overflowX: 'hidden'}}/>
                </center>

                <Card style={{zIndex:999, position:'absolute', top:'0%', backgroundColor:'#1d352f', height:'50px', width:'100%', borderRadius:'0px', opacity:'82%',overflowX: 'hidden'}}><img src={logo} style={{width:'300px', marginTop:'-5px'}} /></Card>

                <motion.div
                    initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}
                    style={{position: "absolute", color: "#1d352f", top: "40%", left: "50%", 
                    transform: "translate(-50%, -50%)", zIndex: 999}}>
                    <Typography style={{zIndex:999, position:'absolute', color:'#1d352f',  top: '40%', left: "50%", 
                    transform: "translate(-50%, -50%)", fontFamily: '"Syncopate", sans-serif', fontSize:'5.2rem'}}>COMING</Typography>
                </motion.div>


                <motion.div
                    initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}
                    style={{position: "absolute", color: "#1d352f", top: '65%', left: "50%", 
                        transform: "translate(-50%, -50%)", zIndex: 999,}}>
                    <Typography style={{zIndex:999, position:'absolute', color:'#1d352f', top: '65%',  left: "50%", 
                        transform: "translate(-50%, -50%)", fontFamily: '"Syncopate", sans-serif', fontSize:'5.2rem'}}>SOON</Typography>
                </motion.div>
                
                </div>

                <div style={{backgroundColor:'#1d352f', marginTop:'-5px',paddingBottom:'15px', paddingTop:'30px', opacity:'98%'}}>
               

                <motion.div
                    ref={mimamsaRef} initial={{ opacity: 0, x: -100 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5 }}
                    style={{ color: "#1d352f", zIndex: 999,}}>
                    <Typography style={{color:'#d4ddce', fontFamily:'"Josefin Sans", sans-serif', marginTop:'50px', fontSize:'2.5rem'}}>Mimamsa</Typography>
                </motion.div>
                <motion.div
                    ref={mimamsaRef} initial={{ opacity: 0, x: -100 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5 }}
                    style={{ color: "#1d352f", zIndex: 999,}}>
                    <Typography style={{color:'#d4ddce', fontFamily:'"Quicksand", sans-serif', marginTop:'50px', marginLeft:'70px', marginRight:'70px', 
                        marginTop:'30px', fontSize:'1.3rem'}}>Mimamsa is a premier jewellery design house in Australia, home to master
                        artisans who create exquisite pieces that echo your unique style. Our extensive collection includes everything
                        from engagement rings and anniversary gifts to bespoke creations, pendants, necklaces, custom diamond watches, bracelets, 
                        earrings, and more. Whether you're looking for the perfect gift for someone special or a personal luxury, 
                        Mimamsa offers something extraordinary for every taste and occasion.</Typography>
                    <Typography style={{color:'#d4ddce', fontFamily:'"Quicksand", sans-serif',marginTop:'40px', fontSize:'1.3rem'}}><strong>Stay tuned—</strong> our full collection is coming soon. </Typography>
                    <Typography style={{color:'#d4ddce', fontFamily:'"Quicksand", sans-serif',marginTop:'2px', fontSize:'1.3rem'}}>Something exceptional awaits you.</Typography>
                </motion.div>
              
                    <motion.img src={image2}  ref={imageRef} initial={{ opacity: 0 }}   animate={isImageInView ? { opacity: 1} : {}} transition={{ duration: 3 }} 
                    style={{width:'55%', height:'55%', marginTop:'50px',left:'50%', right:'50%'}} />
                
                </div>
            </>
        );
    }


    return(
       <>
        {content}
       </>
    );
}