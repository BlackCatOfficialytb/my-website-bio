console.log("Hello, World!");
AOS.init({
    duration: 1200, // Duration of the animation
    once: true,     // Whether the animation should only happen once
  });

async function copyDiscordUsername() {
    const sourceText = "@quanvm0501alt1_";
    const displayParagraph = document.getElementById('displayParagraph');
    try {
        await navigator.clipboard.writeText(sourceText);
        displayParagraph.innerText = "Copied: " + sourceText;
        console.log('Text copied to clipboard successfully!');
        } catch (err) {
           console.error('Failed to copy text: ', err);
            displayParagraph.innerText = "Error copying text.";
    }
}