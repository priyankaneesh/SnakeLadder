

var popup_login = document.getElementById('popup_form');
var close = document.getElementById('close_btn');
var cancelbtn= document.getElementById('cancel');
cancelbtn.style.backgroundColor="blue"
window.addEventListener("load", function () {

  setTimeout(function () {

    popup_login.classList.add('anyname');

  }, 1000)  


})  
// create close btn event
close.addEventListener("click", function () {
  popup_login.classList.remove('anyname');
  closePopuptwo()
  isPopupActive = false;
}) 

 
cancelbtn.addEventListener("click", function () {
  popup_login.classList.remove('anyname');
  closePopuptwo()
  isPopupActive = false;
}) 

function closePopuptwo() {
  popup_login.classList.add("hide");
  setTimeout(() => {
    popup_login.style.display = "none";
    popup_login.classList.remove("show", "hide");
    
  }, 200);  

}

// document.addEventListener("click", (event) => {
//   if (popup_login.classList.contains("anyname") && !popup_login.contains(event.target)) {
//     closePopuptwo();
//     isPopupActive = false;
//   }
// });
$("#form").submit((e) => {
  e.preventDefault();

  
  const name = $("#Name").val();  
  console.log(name)
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwuu0OLgOtENX7Thc-2XYgGMK9LcNtpcTgESQruM8rmYQ_BLRCVC-pZY4rRqXjoVyq7/exec",
    data: $("#form").serialize(),
    method: "post",
    success: function (response) {
      // Alert the personalized message
      alert(`Hi "${name}", welcome to Snake and Ladder! Your form was submitted successfully.`);

      // Close the popup and reset state
      closePopuptwo();
      isPopupActive = false;

      
    },
    error: function (err) {
      alert("Something went wrong. Please try again!");
    }
  });
});




//   popup functionality
let boxes = document.querySelectorAll(".box");
let closebtn = document.getElementById("closebtn");
let popup = document.querySelector(".popup");
let popupHeading = popup.querySelector("h2");
let popupparagraph = popup.querySelector("p");
let popupSound = document.getElementById("popupSound");
let rollsound = document.getElementById("RolllSound");

let rollingSound = new Audio('rollSound.mp3')
let winSound = new Audio('winSound.mp3')
let isPopupActive = true; 

let timeout;

// Show popup when a box is clicked
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    isPopupActive = true; // Block dice rolls

    let hiddenText = box.querySelector(".showbtn").textContent;
    let hiddenText1 = box.querySelector(".showbtn2").textContent;

    popupHeading.textContent = hiddenText;
    popupparagraph.textContent = hiddenText1;

    popup.classList.remove("hide");
    popup.classList.add("show");
    popup.style.display = "block";

    // Play popup sound
    popupSound.currentTime = 0;
    popupSound.play();

    // Auto-close popup 
    // clearTimeout(timeout);
    // timeout = setTimeout(() => {
    //   closePopup();
    // },);
  });
});

// Close popup when "Close" button is clicked
closebtn.addEventListener("click", closePopup);

// Close popup when clicking outside of it
// document.addEventListener("click", (event) => {
//   if (popup.classList.contains("show") && !popup.contains(event.target) && !event.target.closest(".box")) {
//     closePopup();
//   }
// });

// Close popup function
function closePopup() {
  popup.classList.add("hide");
 
  setTimeout(() => {
    popup.style.display = "none";
    popup.classList.remove("show", "hide");
    isPopupActive = false; // Allow dice to roll after popup is closed
  }, 200);

  
  clearTimeout(timeout);
}


 
var cube = document.querySelector(".cube");
var currentClass = "";
var formSubmitted = false; // Flag to track form submission

 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);  
}

function rollDice() {
  if (isPopupActive) {
 
    const messageElement = document.getElementById("notification");  
    messageElement.textContent = "Popup is active. Rolling the dice in 1 minute...";
    messageElement.style.display = "block";  
  
   
    setTimeout(() => {
      messageElement.textContent = "Rolling the dice now!";
      setTimeout(() => {
        messageElement.style.display = "none";  
      }, 2000); 
  
      rollDice();  
    }, 5000);  
    
    return;  
  }

  var randNum = getRandomInt(1, 7);

 
  var showClass = "show-" + randNum;

  if (currentClass) {
    cube.classList.remove(currentClass);
  }

  cube.classList.add(showClass);
  currentClass = showClass;

  document.getElementById("rolledNumber").textContent = `Rolled Number: ${randNum}`;
  moveElementToBox(randNum);
}
let r = 0;  
let previousTarget = null;  

function moveElementToBox(randNum) {
  const maxBoxes = 100;  

   
  if (r + randNum > maxBoxes) {
    console.log(
      `Overshot! Current position: ${r}, rolled: ${randNum}. Waiting for the exact roll to reach b100.`
    );
    return;  
  }

   
  r += randNum;


  if (previousTarget === "b05") {
    r = 17;
  } else if (previousTarget === "b07") {
    r = 27;
  } else if (previousTarget === "b11") {
    r = 1;
  } else if (previousTarget === "b17") {
    r = 68;
  } else if (previousTarget === "b24") {
    r = 16;
  } else if (previousTarget === "b33") {
    r = 12;
  } else if (previousTarget === "b26") {
    r = 35;
  } else if (previousTarget === "b35") {
    r = 45;
  } else if (previousTarget === "b39") {
    r = 22;
  } else if (previousTarget === "b43") {
    r = 37;
  } else if (previousTarget === "b49") {
    r = 32;
  } else if (previousTarget === "b54") {
    r = 16;
  } else if (previousTarget === "b55") {
    r = 65;
  } else if (previousTarget === "b63") {
    r = 52;
  } else if (previousTarget === "b73") {
    r = 64;
  } else if (previousTarget === "b75") {
    r = 85;
  } else if (previousTarget === "b79") {
    r = 62;
  } else if (previousTarget === "b83") {
    r = 71;
  } else if (previousTarget === "b86") {
    r = 95;
  } else if (previousTarget === "b89") {
    r = 74;
  } else if (previousTarget === "b94") {
    r = 90;
  } else if (previousTarget === "b99") {
    r = 1;
  }

  // Find the target box based on the updated `r`
  const targetBox = document.getElementById("b" + String(r).padStart(2, "0"));

  if (targetBox) {
    // Move the element (P1) to the target box
    const p1Element = document.getElementById("p1");

     
    const boxRect = targetBox.getBoundingClientRect();

    // Move p1Element         to the target position
    p1Element.style.top = boxRect.top + 10 + window.scrollY + "px"; // Account for page scroll
    p1Element.style.left = boxRect.left + 30 + window.scrollX + "px"; // Account for page scroll

    // Add a transition  
    p1Element.style.transition = "top 1.5s, left 1.5s";

     

 
    if (targetBox.id === "b100") {
      triggerWinCondition();
    }

     
    previousTarget = targetBox.id;
 
isPopupActive = true;
 
 
let hiddenText = targetBox.querySelector(".showbtn").textContent;
let hiddenText1 = targetBox.querySelector(".showbtn2").textContent;

 
popupHeading.textContent = hiddenText;
popupparagraph.textContent = hiddenText1;

 
popup.classList.remove("hide");
popup.classList.add("show");
popup.style.display = "block";
 
popupSound.currentTime = 0; // Reset to start 
popupSound.play();

 
clearTimeout(timeout);
timeout = setTimeout(() => {
  closePopup();
}, 2000);
 
 
  } else {
    console.error("Target box not found for ID: " + r);
  }
}

 
cube.addEventListener("click", rollDice);

 
const p1Element = document.getElementById("p1");

p1Element.addEventListener("click", (event) => {
  event.stopPropagation();  
  console.log("p1 clicked: parent data will not be shown.");
});


const canvas = document.getElementById("confettiCanvas");
        const ctx = canvas.getContext("2d");
 
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        
        const emojis = ["⭐", "🏆", "🎓"]; 
        const particles = [];  
 
        class Particle {
            constructor(x, y, emoji) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 40 + 10; // Random size between 10 and 50
                this.emoji = emoji; // Select emoji
                this.velocityX = (Math.random() - 0.5) * 5; // Horizontal speed
                this.velocityY = Math.random() * 3 + 1; // Vertical speed
                this.opacity = 1; // Start with full opacity
                this.rotation = Math.random() * 360; // Random rotation
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity; // Apply opacity
                ctx.font = `${this.size}px Arial`; // Set font size
                ctx.fillText(this.emoji, this.x, this.y); // Draw emoji
                ctx.restore();
            }

            update() {
                this.x += this.velocityX; // Move horizontally
                this.y += this.velocityY; // Move vertically
                this.opacity -= 0.005; // Fade out
                if (this.opacity <= 0) this.opacity = 0;
            }
        }

        function createParticle() {
            const x = Math.random() * canvas.width;
            const y = -50; // Start above the screen
            const emoji = emojis[Math.floor(Math.random() * emojis.length)]; // Pick random emoji
            particles.push(new Particle(x, y, emoji)); // Add particle
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            // Draw and update particles
            particles.forEach((particle, index) => {
                if (particle.opacity <= 0) {
                    particles.splice(index, 1); // Remove faded particles
                } else {
                    particle.update();
                    particle.draw();
                }
            });

            requestAnimationFrame(animate);
        }

        // Colorful confetti using canvas-confetti
        function startColorfulConfetti() {
            const duration = 5 * 1000; // 5 seconds
            const end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 10,
                    angle: 60,
                    spread: 100,
                    origin: { x: 0 },
                    colors: ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#900C3F", "#581845"]
                });
                confetti({
                    particleCount: 10,
                    angle: 120,
                    spread: 100,
                    origin: { x: 1 },
                    colors: ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#900C3F", "#581845"]
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }

        // Function to start emoji and colorful confetti
        function startEmojiAndColorfulConfetti() {
            // Start Emoji Particles
            setInterval(createParticle, 100); // Create particles every 100ms
            animate(); // Start emoji animation

            // Start Colorful Confetti
            startColorfulConfetti();
        }

        // Function to show the popup
        function showPopup() {
            const popup = document.getElementById("congratulationsPopup");
            popup.style.display = "block";
        }

        // Close the popup
        const closeButton = document.getElementById("closebtnwin");
        closeButton.addEventListener("click", function () {
            const popup = document.getElementById("congratulationsPopup");
            popup.style.display = "none";
            resetP1Position();
        });

        // Function to trigger the win condition
        function triggerWinCondition() {
            showPopup();
            startEmojiAndColorfulConfetti(); // Start confetti and popup
        }

        // Add event listener to the button to trigger win condition
        const triggerButton = document.getElementById("triggerButton");
        triggerButton.addEventListener("click", function() {
           
            const conditionMet = true;  
            if (conditionMet) {
                triggerWinCondition();  
            }
        });

        // Trigger everything (simulate win condition here)
        setTimeout(() => {
            const conditionMet = true;  
            if (conditionMet) {
                triggerWinCondition();  
            }
        }, 1000);


         

 

// // Function to reset p1 element position
// function resetP1Position() {
//   const targetBox = document.getElementById("b01"); // Ensure we are selecting the box element

//   if (targetBox) {
//       const p1Element = document.getElementById("p1");

//       // Calculate the target position relative to the target box
//       const boxRect = targetBox.getBoundingClientRect();

//       // Move p1Element to the target position
//       p1Element.style.top = boxRect.top + 10 + window.scrollY + "px";  
//       p1Element.style.left = boxRect.left + 30 + window.scrollX + "px"; 

//       // Add a transition for smooth movement
//       p1Element.style.transition = "top 1.5s, left 1.5s"; 

    
//       // setTimeout(() => {
//       //     p1Element.style.transition = ""; // Remove transition so it can move freely
//       //     isPopupActive = false;  // Allow dice roll again
//       // }, 1500);  
//   }
// }

 