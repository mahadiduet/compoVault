# React + Vite

Live URL: https://compovault.web.app
Server URL(API): https://compu-vault-server.vercel.app

Features:
1. Navbar:
Includes a logo, website name, Home and Products routes, and conditionally renders a Login/Register button and user info after login.

2. Home Route (/):
Features a banner, how-to-use guidelines, product-related images, a contact form, an About Us section, and a footer with contact details.

3. Login/Register (Firebase Authentication):
Implements authentication via Google, GitHub, and email/password, with redirection to the Products page after login.

4. Private/Protected Route (Products):
Ensures the Products route is accessible only to logged-in users and displays product data in a card layout with a "view details" button.

5. Product Details Route (/products/productID):
Displays detailed information about a selected product using its ID, accessible only to authenticated users.
