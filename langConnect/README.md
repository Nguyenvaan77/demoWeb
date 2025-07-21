LangConnect
LangConnect is a website designed to connect users with verified traditional medicine practitioners in Vietnam, providing a transparent and modern platform for accessing traditional healthcare services.
Project Structure
langconnect/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # CSS styles
├── js/
│   └── scripts.js      # JavaScript functionality
├── img/
│   ├── doitac/         # Partner logos
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   ├── 4.jpg
│   │   ├── 5.jpg
│   │   ├── 6.jpg
│   │   └── 7.jpg
│   ├── thay.png
│   ├── datlich.png
│   ├── thuvien.png
│   └── tongquanweb.png
└── README.md           # Project documentation

Deployment on Netlify

Prepare the Project:

Ensure all files are in the structure above.
Verify that all image paths in index.html and styles.css are correct (e.g., img/doitac/1.jpg).


Deploy to Netlify:

Create a new site in Netlify by dragging and dropping the langconnect folder into the Netlify dashboard, or connect your Git repository.
Set the publish directory to the root (langconnect/).
No build command is needed since this is a static site.
Deploy the site, and Netlify will provide a URL.


Notes:

External image URLs (e.g., Facebook, Icons8) are used as-is and don't need local hosting.
Ensure local images (img/) are uploaded to Netlify.
If you add a form submission backend, configure Netlify Forms or an external service, as the current form is static.



Maintenance Tips

CSS: Update css/styles.css for styling changes.
JavaScript: Modify js/scripts.js for interactivity.
Images: Add new images to the img/ folder and update paths in index.html.
Content: Edit index.html for text or structural changes.

License
© 2025 LangConnect. All rights reserved.