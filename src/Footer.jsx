import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} DJS eXpress. <br />All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    {/* <a href="#" className="text-white hover:underline">Facebook</a>
                    <a href="#" className="text-white hover:underline">Twitter</a>
                    <a href="https://www.linkedin.com/in/mohit-shah-38939821a/" className="text-white hover:underline">Instagram</a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
