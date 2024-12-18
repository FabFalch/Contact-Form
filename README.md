
# Contact Form


## Quick Description
This is a responsive Contact Form. It validates user inputs, handles errors and adapts to different screen sizes. This challenge was found on Front End Mentor. This was a great challenge for me as a junior coder.

## Resources Used 

+ HTML
+ CSS
+ Javasript 

## Challenges I Faced 
This was by far the most difficult challenge I've come across so far. Here are a few of the challenges.

### Layout of the Contact Form and Selecting in CSS
+ Although the HTML structure itself wasn't too challenging, figuring out how to apply Flexbox effectively to certain elements while leaving others unaffected made me focus more on the organization of <div> containers and class names. This helped me better understand the importance of structuring the layout. 
+ I encountered some difficulty selecting specific form elements in CSS, particularly check boxes and radio buttons.I had to research how to customize their appearance and behavior, as the default styles didn’t match the design I wanted. This deepened my understanding of form-specific CSS properties, like appearance, and how to style these elements consistently.

### Responsive Design on Mobile Devices
 +  While working on the mobile view, I noticed that the radio options were stuck together. After some debugging, I realized the issue was caused by using display: block; for the radio button layout. Unlike display: flex;, which utilizes the gap property for spacing. I used Margin-bottom in order to fix the issue. 

###  The Javascript

+ Figuring out how to handle the JavaScript validation logic for the form was initially a challenge. After researching best practices for contact forms, I decided to structure the code around the submit button click event. This allowed me to centralize the validation logic, ensuring that all checks occur only when the user tries to submit the form. 
+ When it came to displaying the form alerts for individual input fields, I initially struggled to ensure that the alerts appeared for the specific field that failed validation. After experimenting and debugging, I realized the importance of targeting each field dynamically. By associating each alert message with its corresponding input field, I was able to display the alerts individually.

# The Overall Takeaway

As mentioned before, this was the most challenging project so far. Working on this project was a challenging yet rewarding experience. It pushed me to think critically about how I structure and style my code, especially when tackling responsive design and user interactions. Figuring out JavaScript validation and managing dynamic alerts was tricky at first, but it taught me a lot about problem-solving and staying persistent. Each challenge, like customizing radio buttons or fixing layout issues for mobile, felt like a small victory and helped me grow more confident in my skills. I'm very glad i completed this project and can't wait for the next one. 



