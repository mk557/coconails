// src/components/HomePage.js
import React, { useRef, useEffect , useState} from 'react';
import '../styles/HomePage.css';
import manicureImage from '../images/manicure.png';
import pedicureImage from '../images/pedicure.png';
import waxingImage from '../images/waxing.png';
import reflexologyImage from '../images/reflexology.png';
import socialImage from '../images/social.png';
import instagramIcon from '../images/instagram.png'; // Instagram icon
import googleIcon from '../images/google.png'; // Google review icon
import facebookIcon from '../images/facebook.png'; // Facebook icon
import gelx from '../images/gelx.jpg'; 
import largeImage from '../images/background.jpg'
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const HomePage = () => {
    const canvasRef = useRef(null); // Reference to the canvas
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToTop();

        // Rain effect
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let raindrops = [];

        const createRain = () => {
            for (let i = 0; i < 100; i++) {
                raindrops.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    length: Math.random() * 20 + 10,
                    velocityY: Math.random() * 4 + 1,
                });
            }
        };

        const drawRain = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < raindrops.length; i++) {
                ctx.beginPath();
                ctx.moveTo(raindrops[i].x, raindrops[i].y);
                ctx.lineTo(raindrops[i].x, raindrops[i].y + raindrops[i].length);
                ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                ctx.lineWidth = 2;
                ctx.stroke();

                // Move the raindrop
                raindrops[i].y += raindrops[i].velocityY;

                // If the raindrop goes beyond the canvas, reset it to the top
                if (raindrops[i].y > canvas.height) {
                    raindrops[i].y = -20;
                    raindrops[i].x = Math.random() * canvas.width;
                }
            }
        };

        const animateRain = () => {
            drawRain();
            requestAnimationFrame(animateRain);
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        createRain();
        animateRain();

        // Clean up on component unmount
        return () => {
            raindrops = [];
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, []);
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal visibility

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vw9faco',    // Replace with your EmailJS service ID
            'template_s6ulugk',   // Replace with your EmailJS template ID
            form.current,
            'xVQ4kh6v46Vlzvnzw'        // Replace with your EmailJS user ID
        )
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });

        e.target.reset(); // Reset the form after submission
    };

    useEffect(() => {
        const handleScroll = () => {
            const welcomeImage = document.querySelector('.welcome-image');
            const scrollPosition = window.scrollY;

            const zoomFactor = 1 + (scrollPosition / 1000); // Adjust for zoom speed
            if (scrollPosition < 600) { // Control when zoom stops
                welcomeImage.style.transform = `scale(${Math.min(zoomFactor, 1.2)})`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
<div className="container">
{isModalOpen && (
        <div id="myModal" className="modal">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Modal content with image and text side by side */}
                <div className="modal-body">
                    <div className="modal-text-content">

                    <h2 class="header-with-line">Unleash the Beauty</h2>

                        <p className="modal-text">
                            Introducing <strong className="emphasized">Gel X</strong>
                        </p>
                        <p className="modal-text-1">
                        The latest innovation in nail enhancements that combines stunning aesthetics with ultimate comfort and durability!<br />
                            At Coco Nails, we’re excited to offer this cutting-edge service that promises a <strong>flawless and refined</strong> finish.<br /><br></br>
                            Book your appointment today and be one of the first to experience the Gel X revolution!<br></br>
                            Call us at 201-818-8884 to schedule your appointment now!<br />
                        </p>
                    </div>
                    <div className="modal-image">
                        <img src={gelx} alt="Gel X Nails" />
                    </div>
                </div>

                {/* Close button at the bottom */}
                <div className="modal-footer">
                    <button className="close-button" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    )}
    <canvas ref={canvasRef} className="rain-canvas"></canvas>

            <div className="welcome-image-container">
                <img src={largeImage} alt="Welcome" className="welcome-image" />
                <div className="welcome-text">
                    <h1>Welcome</h1>
                    <p>Coco Nails, 25 N Spruce St, Ramsey, NJ 07446.</p>
                    <p>Pamper yourself with our expert nail care services in a tranquil, luxurious setting.</p>
                    <br></br><br></br>
                    <h2>Hours</h2>
                    <br></br>
                    <p>Mon - Fri: 9:30am - 7pm</p>
                    <p>Sat: 9am - 6:30pm</p>
                    <p>Sun: 10am - 5:30pm</p>

                </div>
            </div>
            <section className="hero-section">
                <p className="hero-text">OUR SERVICES</p>
            </section><section className="grid-section">
            <Link to="/manicure" className="grid-link" onClick={scrollToTop}>
            <div className="grid-item">
                        <img src={manicureImage} alt="Manicure" className="grid-image" />
                        <div className="grid-text-container">
                            <p className="grid-title">MANICURE</p>
                            <div className="line"></div>
                            <p className="view-service">VIEW SERVICE</p>
                        </div>
                    </div>
                </Link>
                <Link to="/pedicure" className="grid-link" onClick={scrollToTop}>
                    <div className="grid-item">
                        <img src={pedicureImage} alt="Pedicure" className="grid-image" />
                        <div className="grid-text-container">
                            <p className="grid-title">PEDICURE</p>
                            <div className="line"></div>
                            <p className="view-service">VIEW SERVICE</p>
                        </div>
                    </div>
                </Link>
                <Link to="/waxing" className="grid-link" onClick={scrollToTop}>
                    <div className="grid-item">
                        <img src={waxingImage} alt="Waxing" className="grid-image" />
                        <div className="grid-text-container">
                            <p className="grid-title">WAXING</p>
                            <div className="line"></div>
                            <p className="view-service">VIEW SERVICE</p>
                        </div>
                    </div>
                </Link>
                <Link to="/reflexology" className="grid-link" onClick={scrollToTop}>
                    <div className="grid-item">
                        <img src={reflexologyImage} alt="Reflexology" className="grid-image" />
                        <div className="grid-text-container">
                            <p className="grid-title">REFLEXOLOGY</p>
                            <div className="line"></div>
                            <p className="view-service">VIEW SERVICE</p>
                        </div>
                    </div>
                </Link>
            </section>

            <div className="social-image-container">
                <img src={socialImage} alt="Full Width" className="social-image" />
                <div className="overlay-text">
                    <p>Follow us on Social Media &</p>
                    <p>Leave us a review!</p>
                    <div className="overlay-links">
                    <a href="https://www.facebook.com/CocoNailsRamsey/" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" className="facebook-icon" />
                    </a>
                        <a href="https://www.instagram.com/coconailsramsey/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                    
                        <a href="https://g.co/kgs/UzAKPuk" target="_blank" rel="noopener noreferrer">
                            <img src={googleIcon} alt="Google Review" />
                        </a>
                    </div>
                    {/* Follow Button */}
                    <div className="follow-button-container">
                        <a href="https://www.instagram.com/coconailsramsey/">
                            <button className="follow-button">FOLLOW</button>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <h2>Contact Us</h2>
                        <p style={{ color: 'grey', fontSize: '13px' }}>
                            Please submit this form for any questions about our services.
                        </p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name *" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email **</label>
                                <input type="email" id="email" name="email" placeholder="Your Email Address *" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="phone" id="phone" name="phone" placeholder="Phone Number" optional />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject of Your Message *" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Your Message *" required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
