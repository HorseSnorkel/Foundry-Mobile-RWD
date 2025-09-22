# Foundry Mobile RWD

A responsive web design module for FoundryVTT v13 optimized for mobile and tablet devices. This module prioritizes the most important UI elements for mobile gameplay:

1. **Character Sheets (Priority 1)** - Touch-optimized actor sheets with improved layouts
2. **Chat Messages (Priority 2)** - Compact, readable chat interface
3. **Macro Bar/Hotbar (Priority 3)** - Touch-friendly hotbar alternative

## Features

- **Responsive Design**: Automatically detects device type and applies appropriate styles
- **Touch Optimization**: Large touch targets and mobile-friendly interactions
- **Map Hiding**: Option to hide the canvas/map on mobile devices to maximize UI space
- **Compact Chat**: Streamlined chat messages for better mobile readability  
- **Mobile Hotbar**: Touch-friendly macro bar positioned for easy access
- **Configurable Settings**: Customize behavior through module settings

## Installation

1. Install the module through FoundryVTT's module browser or manually download
2. Enable the module in your world's module settings
3. Configure options in the module settings to customize the mobile experience

## Compatibility

- **Foundry VTT**: Version 12-13 (Verified for v13)
- **Devices**: Optimized for tablets and mobile phones
- **Browsers**: Modern mobile browsers with touch support

## Settings

- **Hide Map on Mobile**: Hides the game canvas on mobile devices to prioritize UI
- **Compact Chat Messages**: Uses condensed chat layout for better mobile readability  
- **Mobile-Optimized Hotbar**: Enables touch-friendly hotbar positioning

## Usage

The module automatically detects mobile and tablet devices and applies responsive styles. No additional configuration is required, but settings can be adjusted to customize the experience.

### Device Detection

- **Mobile**: Screens ≤ 768px width
- **Tablet**: Screens 769px - 1024px width  
- **Touch**: Any device with touch capability

## Development

This module uses:
- CSS media queries for responsive breakpoints
- JavaScript device detection and DOM manipulation
- FoundryVTT v13 API hooks and settings system

## License

This project is licensed under the MIT License. 
