# ZooperCart

ZooperCart is a feature-rich e-commerce mobile application built using **React Native** and **Expo**, styled with **NativeWind** (TailwindCSS). It provides a seamless shopping experience, offering features like cart management, product browsing, and order tracking, along with future enhancements like payment integration and real-time order tracking with Google Maps.

---

## Table of Contents
1. [Features](#features)
2. [Screens](#screens)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [Folder Structure](#folder-structure)
6. [State Management](#state-management)
7. [APIs Used](#apis-used)
8. [Future Enhancements](#future-enhancements)
9. [Contributing](#contributing)
10. [License](#license)

---

## Features

### Completed Features
- **Dynamic Routes**: Each product has its own detailed page for better user experience.
- **Zustand for Cart Management**: Efficient cart handling with functionality to:
  - Add items to the cart.
  - Update item quantities.
  - Remove items when the quantity reaches zero.
- **Order Tracking**: A dedicated page for users to track their orders.
- **E-Wallet**: Integrated into the app for managing user spending and adding cards.
- **Responsive Design**: Optimized for various screen sizes.

![After](https://github.com/user-attachments/assets/a99d44d7-5691-4a6e-bd01-5be3b3052152)
![Before](https://github.com/user-attachments/assets/2785c84a-3539-4a1b-8ac7-24c1eaef871e)
![Combined](https://github.com/user-attachments/assets/e78a6159-38b2-4404-831b-e06a5ec24799)


### Animations
To maintain performance, animations have been kept minimal and focused on improving user interaction.

---

## Screens

1. **Home Screen**
   - Displays a list of products.
   - Products have discount labels and are horizontally scrollable.

2. **Product Details**
   - Displays product-specific information such as title, price, and ratings.
   - Includes "Add to Cart" functionality with a toggleable counter for quantity.

3. **Cart Screen**
   - Displays items added to the cart.
   - Allows users to update quantities or remove items.
   - Shows subtotal and checkout options.

4. **E-Wallet**
   - Tracks spending on the app.
   - Allows users to save and manage cards.

5. **Order Tracking**
   - A simple and intuitive page for tracking the status of user orders.

---

## Technologies Used

### Frontend
- **React Native**: Cross-platform mobile app framework.
- **Expo**: For rapid development and deployment.
- **NativeWind**: TailwindCSS for styling React Native components.

### State Management
- **Zustand**: Lightweight state management for handling cart operations.

### Backend
- Placeholder APIs (to be replaced with a custom backend for production).

---

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- Expo CLI
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/zoopercart.git
   cd zoopercart
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```
4. Open the app on your device:
   - Use the Expo Go app to scan the QR code displayed in your terminal.

---

## Folder Structure

```
ZooperCart/
├── components/
│   ├── Counter.js
│   ├── CartItem.js
│   └── ProductCard.js
├── context/
│   └── useCartStore.js
├── screens/
│   ├── HomeScreen.js
│   ├── ProductScreen.js
│   ├── CartScreen.js
│   ├── WalletScreen.js
│   └── OrderTrackingScreen.js
├── assets/
│   ├── images/
│   └── icons/
├── utils/
│   └── helpers.js
├── App.js
└── package.json
```

---

## State Management

ZooperCart uses Zustand for efficient state management, particularly for handling the cart.

### Example State in `useCartStore.js`:
```javascript
const useCartStore = create((set) => ({
  carts: [],
  addToCart: (product) => set((state) => ({
    carts: [...state.carts, { ...product, quantity: 1 }],
  })),
  increaseQuantity: (id) => set((state) => ({
    carts: state.carts.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ),
  })),
  decreaseQuantity: (id) => set((state) => ({
    carts: state.carts
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0),
  })),
  removeFromCart: (id) => set((state) => ({
    carts: state.carts.filter((item) => item.id !== id),
  })),
}));
```

---

## APIs Used

- **Products API**: Fetches product data.
- **Order API**: Used for tracking orders.
- **Wallet API**: Manages user spending and card details.

---

## Future Enhancements

1. **Backend Development**
   - Replace placeholder APIs with a fully functional backend.
   - Develop an admin panel for managing orders and inventory.

2. **Order Tracking with Google Maps**
   - Integrate Google Maps to provide real-time tracking of orders.

3. **Stripe Payment Integration**
   - Add secure payment functionality using Stripe.

4. **Enhanced Animations**
   - Include smooth, GPU-optimized animations without compromising app performance.

---

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request. Ensure your code follows the existing coding conventions and includes appropriate documentation.

---

## License

ZooperCart is open-source software licensed under the MIT License.

---

Feel free to modify or adapt this README to fit the specific requirements of your project!
