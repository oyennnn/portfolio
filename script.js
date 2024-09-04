document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById('typing');
    const words = ["I'm Web Developer", "I'm Backend Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingSpeed = 150; 
    const deletingSpeed = 100; 
    const delayBetweenWords = 1500;

    function type() {
        currentWord = words[wordIndex];
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                wordIndex++;
                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }
                setTimeout(type, 500); 
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            typingText.textContent = currentWord.substring(0, charIndex++);
            if (charIndex > currentWord.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenWords);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type(); 
});
