const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory));

// Set the view engine to hbs
app.set('view engine', 'hbs');
const viewsDirectory = path.join(__dirname, '../Temp1/views');
app.set('views', viewsDirectory);

// Register the partials
const partialsPath = path.join(__dirname, '../Temp1/partials');
hbs.registerPartials(partialsPath);

// Define routes
app.get('/', (req, res) => {
    res.render('index', {
        title1: "Mens Mbappé Home Authentic Shirt 24/25 White",
        img1: "images/RMCFMZ0239-01.webp",
        desc1: "This authentic shirt is designed for performance and style, featuring the iconic Mbappé name and number.",
        title2: "Mens Away Authentic Shirt 24/25 Orange",
        img2: "images/RMCFMZ0244.webp",
        desc2: "The away shirt for the 24/25 season in vibrant orange, made with breathable fabric to keep you cool and comfortable.",
        title3: "Mens Mbappé Home Authentic Long Sleeve Shirt 24/25 White",
        img3: "images/RMCFYZ0071-01.webp",
        desc3: "A long sleeve version of the home shirt, perfect for cooler days and showcasing your support for Mbappé."
    });
});

app.get('/service', (req, res) => {
    res.render('service', {
        title: "SERVICE",
        name: "Mohamed",
        city: "Cairo",
        age: 40,
        img1: "images/trainer-3.jpg",
        imgs:"images/mppape.webp"
    });
});

app.get('/team', (req, res) => {
    res.render('team', {
        title: "TEAM",
        name: "reem",
        city: "mansoura",
        age: 25,
        img2: "images/trainer-2.jpg"

    });
});

app.get('/pro1', (req, res) => {
    res.render('pro1', {
        title1: "Mens Mbappé Home Authentic Shirt 24/25 White",
        PlayerName: "Mbappé",
        img1: "images/RMCFMZ0239-01.webp",
        desc1: "This authentic shirt is designed for performance and style, featuring the iconic Mbappé name and number.",
        number: "9",
        imgs:"images/mppape.webp",
        imgs2:"images/background.webp",
        

    });
});

app.get('/pro2', (req, res) => {
    res.render('pro2', {
        title2: "Mens Away Authentic Shirt 24/25 Orange",
        PlayerName: "Mbappé",
        img2: "images/RMCFMZ0244.webp",
        desc2: "The away shirt for the 24/25 season in vibrant orange, made with breathable fabric to keep you cool and comfortable.",
        number: "9",
        imgs:"images/mppape.webp",
        imgs2:"images/background.webp",
        
    });
});

app.get('/pro3', (req, res) => {
    res.render('pro3', {
        title3: "Mens Mbappé Home Authentic Long Sleeve Shirt 24/25 White",
        PlayerName: "Mbappé",
        img3: "images/RMCFYZ0071-01.webp",
        desc3: "A long sleeve version of the home shirt, perfect for cooler days and showcasing your support for Mbappé.",
        number: "9",
        imgs:"images/mppape.webp",
        imgs2:"images/background.webp",
        
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
