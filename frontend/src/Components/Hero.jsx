import React, { useContext } from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import AnimatedText from './AnimatedText';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import gitimg from '../assets/github.png';
import fbimg from '../assets/fb.jpg';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';

const Hero = () => {
    const navigate = useNavigate();
    const { setOpen } = useContext(AppContext);

    const handleFindPaper = () => navigate('/browse');
    const handleClickOpen = () => setOpen(true);

    return (
        <Container maxWidth="lg">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center mt-10"
            >
                <Box className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl w-full max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <motion.img 
                            whileHover={{ scale: 1.1 }}
                            src="/index.png" 
                            alt="PEC Logo" 
                            className="w-32 h-32 rounded-full shadow-lg"
                        />
                        <div className="text-white">
                            <AnimatedText text="Welcome to PEC Papers" />
                            <Typography variant="h6" className="mt-4 opacity-90">
                                Your One-Stop Resource for Previous Year Question Papers
                            </Typography>
                        </div>
                    </div>

                    <div className="text-white space-y-4 mb-8">
                        <Typography variant="body1">
                            Hello Pecobians! 👋
                        </Typography>
                        <Typography variant="body1" className="leading-relaxed">
                            We've created this platform to simplify your exam preparation journey. 
                            No more last-minute scrambles for previous year papers - everything you 
                            need is right here! 📚
                        </Typography>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Button 
                                variant="contained" 
                                onClick={handleClickOpen}
                                className="bg-white text-purple-600 hover:bg-purple-100 px-8 py-3 rounded-full font-bold"
                            >
                                Share a Paper 📤
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Button 
                                variant="outlined" 
                                onClick={handleFindPaper}
                                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-bold"
                            >
                                Find Papers 🔍
                            </Button>
                        </motion.div>
                    </div>
                </Box>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16"
                >
                    <Typography variant="h4" className="text-center font-bold mb-8">
                        Special Thanks To Our Contributors 🌟
                    </Typography>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <img src={gitimg} alt="GitHub" className="w-32 h-32 mx-auto mb-4 rounded-lg" />
                            <Typography variant="h6" className="text-center">
                                PEC-CSS Repository
                            </Typography>
                        </motion.div>
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <img src={fbimg} alt="Facebook" className="w-32 h-32 mx-auto mb-4 rounded-lg" />
                            <Typography variant="h6" className="text-center">
                                PEC Old Papers Community
                            </Typography>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            <Marquee gradient={true} speed={50} className="mt-16 py-4 bg-gray-100 rounded-full">
                <Typography variant="h6" className="mx-4">
                    🚀 More exciting features coming soon! | 📚 Help us grow this resource | 
                    💡 Your contributions matter | 🎓 Supporting PEC students
                </Typography>
            </Marquee>
        </Container>
    );
};

export default Hero;