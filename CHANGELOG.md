# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-21

### Added
- Initial release of Foundry Mobile RWD module
- Responsive web design for FoundryVTT v13 API
- Mobile and tablet device detection
- Touch-friendly UI optimizations
- Character sheet mobile optimization (Priority 1)
  - Full-screen mobile layout
  - Touch-friendly form controls
  - Prioritized information display
  - Mobile-optimized tabs
- Chat message mobile optimization (Priority 2)
  - Compact chat message layout
  - Improved mobile readability
  - Touch-friendly chat input
- Mobile hotbar alternative (Priority 3)
  - Bottom-positioned hotbar for mobile
  - Touch-optimized macro buttons
  - Fixed positioning for easy access
- Map hiding functionality for mobile devices
- Configurable module settings
- Support for mobile (≤768px), tablet (769px-1024px), and desktop viewports
- Touch device detection and optimizations
- Accessibility improvements with focus indicators
- Comprehensive CSS responsive breakpoints
- Error handling and console logging

### Features
- **Device Detection**: Automatic detection of mobile, tablet, and touch devices
- **Responsive Breakpoints**: CSS media queries for different screen sizes
- **Touch Optimization**: 44px minimum touch targets and touch-friendly interactions
- **Map Control**: Option to hide game canvas on mobile devices
- **Character Sheets**: Priority 1 - Full mobile optimization with touch controls
- **Chat System**: Priority 2 - Compact, readable chat interface for mobile
- **Hotbar System**: Priority 3 - Mobile-positioned macro bar with touch support
- **Settings**: Configurable options for all major features
- **Compatibility**: FoundryVTT v12-13 support with v13 verification

### Technical Details
- Module ID: `foundry-mobile-rwd`
- ES Modules support
- CSS-based responsive design
- JavaScript device detection
- FoundryVTT Hooks integration
- Client-side settings storage