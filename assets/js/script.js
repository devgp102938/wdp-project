//Contact page validation
function response(){
    const name =  document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const brand = document.getElementById("Brands-p").value;

    if(name == "" || email == "" || brand == ""){
        alert("Please fill all the details");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email address");
        return;
    }

    alert("Thank you " + name + "! We will contact you soon regarding your interest in " + brand + ".");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Brands-p").value = "";
}


// Onclick car function
const cars = {
  //bmw
  "BMW i8": {
    img: "assets/images/car/BMW/pre-bmwi8.jpg",
    desc: "The BMW i8 is a hybrid sports car with a 1.5-liter, 3-cylinder turbocharged engine and an electric motor, producing a combined 357 horsepower and 570 Nm of torque. It features all-wheel drive, an automatic transmission with a top speed of 250 km/h, and a 0-100 km/h time of around 4.4 seconds. Key specs include a 42-liter fuel tank, 154 liters of boot space, and 20-inch wheels.",
    price: "₹2.62 Crore"
  },
  "BMW X7": {
    img: "assets/images/car/BMW/pre-bmwx7.jpg",
    desc: "The BMW X7 is a luxury full-size SUV available with powerful 2998cc petrol or 2993cc diesel engines, both paired with an 8-speed automatic transmission and all-wheel drive. Key features include a panoramic glass sunroof, a spacious interior with optional captain's seats, high-tech elements like crystal headlights and Crafted Clarity glass, and advanced driver assistance systems. The X7 is known for its premium features and performance, with both petrol and diesel variants offering high horsepower and torque",
    price: "₹1.24 Crore"
  },
  "BMW M5": {
    img: "assets/images/car/BMW/pre-bmwm5.webp",
    desc: "The BMW M5 is a high-performance sports sedan that blends business sedan luxury with sports car power, now featuring a new hybrid powertrain that delivers up to 727 horsepower and 1000 Nm of torque from its high-performance V8 engine combined with an electric drive. Key details include a high-tech interior with twin curved digital screens and iDrive 8.5, a variety of M-specific driving modes, and advanced features like parking assist with a reverse camera. While offering incredible performance and luxury",
    price: "₹1.74 Crore"
  },
  "BMW i7": {
    img: "assets/images/car/BMW/pre-bmwi7.webp",
    desc: "The BMW i7 is a full-size electric luxury sedan with a 101.7kWh battery, available in various models with different performance levels and a claimed WLTP range of up to 625 km. Key details include its advanced technology, such as a 31.3-inch rear-seat entertainment display and a 12.3-inch digital instrument cluster, along with a comfortable interior featuring massaging seats and ambient lighting. The i7 also offers multiple charging options, supporting DC fast charging at up to 195 kW.",
    price: "₹2.05 Crore"
  },
  "BMW Z4": {
    img: "assets/images/car/BMW/pre-bmwz4.jpg",
    desc: "The BMW Z4 is a 2-seater convertible sports car available with a 2998 cc, 6-cylinder TwinPower Turbo petrol engine that produces 335 bhp and 500 Nm of torque. ",
    price: "₹87.90 Lakh"
  },
  "BMW M2CS": {
    img: "assets/images/car/BMW/pre-bmwm2cs.jpg",
    desc: "The BMW M2 CS is a high-performance coupe with a 3.0-liter, twin-turbo inline-six engine producing 530hp and 650Nm of torque, exclusively paired with an 8-speed automatic transmission. It features a lighter, more performance-focused design with significant carbon fiber components, a top speed of up to 320km/h, and a 0-100km/h time of 3.8 seconds.",
    price: "₹1.30 crore"
  },
  "BMW XM": {
    img: "assets/images/car/BMW/pre-bmwxm.jpg",
    desc: "The BMW XM is a high-performance plug-in hybrid SUV that features a 4.4-liter twin-turbo V8 engine, an electric motor, and a combined output of up to 643 horsepower and 800 Nm of torque. It is a 5-seater SUV with a length of 5110 mm, a width of 2210 mm, and a height of 1755 mm. Key features include an automatic transmission, a 14.9-inch infotainment screen, 360° view camera, heated and ventilated seats, and a starting price in India of around ₹2.6 Crore.",
    price: "2.55 crore"
  },
  "BMW IX xDrive50": {
    img: "assets/images/car/BMW/pre-bmwix-xDrive50.png",
    desc: "The BMW iX is an all-electric SUV, Key details include electric all-wheel drive, impressive acceleration (e.g., 0-100 km/h in 4.6 seconds for the xDrive50), a long driving range of up to 635 km, and rapid charging capabilities. The vehicle features a spacious interior with a large curved display, advanced infotainment, and premium materials.",
    price: "1.29 crore"
  },
  //mercedes
  "Mercedes-Maybach S-Class": {
    img: "assets/images/car/Mercedes/pre-mybach-s-class.png",
    desc: "The Mercedes-Maybach S-Class is a luxury sedan offered in two main variants, the S 580 4MATIC and S 680 4MATIC, with different petrol engines, both paired with a 9-speed automatic all-wheel-drive system",
    price: "2.90 crore"
  },
  "Mercedes-Maybach-GLS": {
    img: "assets/images/car/Mercedes/pre-Mercedes-Maybach-GLS.png",
    desc: "The pre-Mercedes-Maybach-GLS has a 3982 cc, twin-turbo V8 engine with a 48V mild-hybrid system, producing up to 550 bhp and 770 Nm of torque. It features an all-wheel-drive (AWD) system, 9-speed automatic transmission, and can accelerate from 0-100 km/h in 4.9 seconds. Key features include a spacious 5-seat interior with luxury materials, a 360-degree camera, and advanced driver-assistance systems (ADAS).",
    price: "3.39 crore"
  },
  "Mercedes-AMG S63E": {
    img: "assets/images/car/Mercedes/pre-Mercedes-AMG S63E.avif",
    desc: "The Mercedes-AMG S63 E Performance is a plug-in hybrid luxury sedan that produces a combined maximum power of 794 horsepower and 1430 Nm of torque from its twin-turbo V8 engine and electric motor. It accelerates from 0-100 km/h in a claimed 3.3 seconds and has an all-wheel-drive (AWD) drivetrain, with a top speed electronically limited to 250 km/h.",
    price: "3.27 crore"
  },
  "Mercedes-AMG GLE53": {
    img: "assets/images/car/Mercedes/pre-Mercedes-AMG GLE53.jpg",
    desc: "The Mercedes-AMG GLE 53 is a 5-seater, 5-door SUV coupe powered by a 3.0-liter, 6-cylinder turbo-petrol engine that produces 435 horsepower and 520 Nm of torque. It features a 9-speed automatic transmission and an all-wheel drive system with a 48V mild-hybrid system for an extra power boost, allowing it to accelerate from 0-100 km/h in about five seconds.",
    price: "1.88 crore"
  },
  "Mercedes-AMG G63": {
    img: "assets/images/car/Mercedes/pre-Mercedes-AMG G63.webp",
    desc: "The Mercedes-AMG G63 is powered by a 4.0-liter V8 biturbo engine producing around 577-585 horsepower and 850 Nm of torque, with a 0-100 km/h time of approximately 4.4 seconds. It features a 9-speed automatic transmission, a 4MATIC all-wheel-drive system, and a top speed of around 220 km/h",
    price: "2.45 crore"
  },
  "Mercedes CLE Cabriolet": {
    img: "assets/images/car/Mercedes/pre-Mercedes CLE Cabriolet.avif",
    desc: "The Mercedes CLE Cabriolet is a 4-seater convertible with a starting price of approximately Rs. 1.11 Crore. It features a 1999cc, 4-cylinder turbocharged petrol engine producing 255 bhp and 400 Nm of torque, and comes with a 9-speed automatic transmission with paddle shifts and AWD",
    price: "1.11 crore"
  },
  "Mercedes EQS": {
    img: "assets/images/car/Mercedes/pre-Mercedes EQS.webp",
    desc: "The Mercedes EQS is a luxury electric vehicle available as a sedan or SUV, known for its high-tech interior, long driving range, and luxurious features. Key details include its dual-motor AWD drivetrain, a large digital interface with up to three screens, and high-level safety features like ADAS and multiple airbags. The 580 4MATIC sedan has an estimated range of up to 857 km and can be fast-charged to 80% in about 31 minutes.",
    price: "1.63 crore"
  },
  "Mercedes-AMG GT Coupé": {
    img: "assets/images/car/Mercedes/pre-Mercedes-AMG GT Coupé.avif",
    desc: "The Mercedes-AMG GT Coupé is a high-performance sports car available in different variants, such as the 63 4MATIC Plus and the top-end 63 Pro 4MATIC Plus. It is a two-door coupe with a 3982 cc petrol engine, available with an automatic transmission, and known for its racing-inspired performance features like standard ceramic brakes and an AMG Performance 4MATIC+ all-wheel drive system.",
    price: "3.45 crore",
  },
  //Bugatti
  "Bugatti TOURBILLON": {
    img: "assets/images/car/Bugatti/pre-bugatti tourbillon.jpg",
    desc: "Bugatti's Tourbillon 2024: Price, Specs, Availability | WIREDThe Bugatti Tourbillon is a hybrid hypercar succeeding the Chiron, featuring a naturally aspirated V16 engine paired with three electric motors for a combined 1,800 hp. Key details include a 445 km/h top speed Conceived from a blank canvas, the TOURBILLON converges the immediate torque and flexibility of electric motors with the spine-tingling emotion of a naturally aspirated V16 engine.",
    price: "34.8 crore"
  },
  "Bugatti Mistral": {
    img: "assets/images/car/Bugatti/pre-Bugatti-Mistral.avif",
    desc: "The final road-going model with the iconic W16 engine. An open-air masterpiece to celebrate design and engineering at its best, The Bugatti Mistral is a roadster powered by an 8.0-liter, quad-turbocharged W16 engine producing 1,177 kW (1,600 PS / 1,578 hp) and 1,600 Nm of torque. It features a 7-speed dual-clutch automatic transmission, all-wheel drive, and has an official top speed of 420 km/h (261 mph).",
    price: "40 crore"
  },
  "Bugatti Chiron": {
    img: "assets/images/car/Bugatti/pre-Bugatti-Chiron.jpg",
    desc: "Breaking new barriers and dimensions through a modern reinterpretation of BUGATTI'S iconic history. The CHIRON emphasizes comfort and sophistication as much as innovative technology and performance-oriented form.",
    price: "19.21 crore"
  },
  "Bugatti Divo": {
    img: "assets/images/car/Bugatti/pre-Buggati-Divo.jpg",
    desc: "Bugatti Divo Final Model Delivered to Customer in Europe ...The Bugatti Divo is a track-focused hypercar released in 2018, limited to 40 units, and named after French racer Albert Divo. It is powered by a 1,500 PS 8.0-liter W16 engine, has a top speed of 380 km/h, and accelerates from 0-100 km/h in 2.4 seconds.",
    price: "41 crore"
  },
  "Bugatti Centodieci": {
    img: "assets/images/car/Bugatti/pre-bugatti centodieci.avif",
    desc: "The Bugatti Centodieci is a limited-production hypercar built to honor the Bugatti EB110, featuring a 1,600 PS W16 engine, 7-speed dual-clutch transmission, and 0-100 km/h in 2.4 seconds. Only ten units were produced, Showing the ultimate legacy of Bugatti's engineering prowess, the Centodieci combines cutting-edge technology with a tribute to the iconic EB110, delivering unparalleled performance and exclusivity.",
    price: "61 crore"
  },
  "Bugatti Solitaire": {
    img: "assets/images/car/Bugatti/pre-bugatti solitaire.jpg",
    desc: "Bugatti Solitaire is an exclusive coachbuilding program for creating one-of-a-kind vehicles, with a maximum of two masterpieces per year, built upon existing powertrains and chassis. The first model, the Brouillard, features a sculpture-like, flowing design inspired by Ettore Bugatti's horse, a quad-turbo W16 engine, unique bodywork with custom carbon fiber, and a bespoke interior with elements like tartan fabrics and a glass roof.",
    price: "Price on request"
  },
  "Bugatti Veyron": {
    img: "assets/images/car/Bugatti/pre-Bugatti Veyron.jpg",
    desc: "World premiere of the Bugatti Veyron 16.4 Grand Sport Vitesse ...The Bugatti Veyron is a high-performance supercar produced from 2005 to 2015, known for its groundbreaking performance with a top speed of 407 km/h (253 mph) and a powerful W16 engine. It was a technological marvel of its time, featuring a quad-turbocharged 8.0-liter W16 engine.",
    price: "11.39 crore"
  }
};

function openPreview(carName) {
  const car = cars[carName];
  if (!car) return;

  document.getElementById("preview-img").src = car.img;
  document.getElementById("preview-title").textContent = carName;
  document.getElementById("preview-desc").textContent = car.desc;
  document.getElementById("preview-price").textContent = "Price: " + car.price;
  document.getElementById("car-preview").style.display = "flex";
}

function closePreview() {
  document.getElementById("car-preview").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("car-preview");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
