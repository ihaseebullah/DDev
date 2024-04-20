function formatText(text) {
    // Replace **bold** with <strong>bold</strong>
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
    // Split the text into steps
    const steps = text.split(/\*\*Step \d+:/);
  
    let html = '';
  
    // Iterate over each step
    steps.forEach((step, index) => {
      if (index === 0) return; // Skip the first empty step
  
      // Split the step into parts (heading and content)
      const parts = step.split(/\*\*/);
  
      const heading = parts[0].trim();
      const content = parts.slice(1).join('').trim();
  
      // Add the heading with <h3> tag
      html += `<h3>${heading}</h3>`;
  
      // If the content has bullet points, format it as an unordered list
      if (content.includes('*')) {
        const lines = content.split(/\* /);
        html += '<ul>';
        lines.forEach(line => {
          if (line.trim() !== '') {
            html += `<li>${line.trim()}</li>`;
          }
        });
        html += '</ul>';
      } else {
        // Otherwise, format it as a paragraph
        html += `<p>${content}</p>`;
      }
    });
  
    return html;
  }

  export default formatText;