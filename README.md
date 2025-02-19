This is a tiny application for calculating the shipping cost for boxes to Specific locations worldwide from India. The application shall consist of two simple views, one table, and a form, a navbar component.


Live link:- https://shipping-box-pi.vercel.app/

<---- How to build ----->

Step1:- 
        1. open a terminal and run: npm create vite@latest to create vite based React application.
        2. Follow the prompts to create a Vite-based React application.
        3. Remove any unnecessary boilerplate code.

Step2:- 
        1. Update the title of the application in index.html.
        2. Add a custom tab image (favicon).

Step2:- 
        1. Create separate folders for views and components.
        2. Each folder should include .jsx files for components.
        3. Add .css files if custom styles are needed.

Step4:- 
        1. Create a Navbar component for navigation between views.
        2. Use react-router-dom to handle navigation.

Step5:- Create two functional components AddBoxForm.
            1. AddBoxForm: For adding box details.
            2. ListBoxes: For listing all the added boxes.

Step6:- In AddBoxForm component use standard HTML elements like <form>, <input>, and <button> to create a form for adding box details.

Step7:- In ListBoxes component use an HTML <table> to display the list of added boxes.

Note:- Use props for state management between components.