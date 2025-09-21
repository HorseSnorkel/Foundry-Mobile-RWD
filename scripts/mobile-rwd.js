/**
 * Foundry Mobile RWD Module
 * Responsive web design for FoundryVTT optimized for mobile and tablet devices
 */

class MobileRWD {
    static MODULE_ID = 'foundry-mobile-rwd';
    
    constructor() {
        this.isMobile = this.detectMobile();
        this.isTablet = this.detectTablet();
        this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    /**
     * Detect if device is mobile
     */
    detectMobile() {
        return window.innerWidth <= 768;
    }

    /**
     * Detect if device is tablet
     */
    detectTablet() {
        return window.innerWidth > 768 && window.innerWidth <= 1024;
    }

    /**
     * Initialize the module
     */
    init() {
        console.log(`${MobileRWD.MODULE_ID} | Initializing Mobile RWD Module`);
        
        // Add device classes to body
        this.addDeviceClasses();
        
        // Register settings
        this.registerSettings();
        
        // Setup responsive handlers
        this.setupResponsiveHandlers();
        
        // Initialize on ready
        Hooks.on('ready', () => {
            this.onReady();
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    /**
     * Add device-specific CSS classes to body
     */
    addDeviceClasses() {
        const body = document.body;
        
        if (this.isMobile) {
            body.classList.add('mobile-device');
        }
        
        if (this.isTablet) {
            body.classList.add('tablet-device');
        }
        
        if (this.isTouch) {
            body.classList.add('touch-device');
        }
    }

    /**
     * Register module settings
     */
    registerSettings() {
        game.settings.register(MobileRWD.MODULE_ID, 'hideMap', {
            name: 'mobile-rwd.settings.hideMap.name',
            hint: 'mobile-rwd.settings.hideMap.hint',
            scope: 'client',
            config: true,
            type: Boolean,
            default: true,
            onChange: value => {
                this.toggleMapVisibility(!value);
            }
        });

        game.settings.register(MobileRWD.MODULE_ID, 'compactChat', {
            name: 'mobile-rwd.settings.compactChat.name',
            hint: 'mobile-rwd.settings.compactChat.hint',
            scope: 'client',
            config: true,
            type: Boolean,
            default: true,
            onChange: value => {
                this.toggleCompactChat(value);
            }
        });

        game.settings.register(MobileRWD.MODULE_ID, 'mobileHotbar', {
            name: 'mobile-rwd.settings.mobileHotbar.name',
            hint: 'mobile-rwd.settings.mobileHotbar.hint',
            scope: 'client',
            config: true,
            type: Boolean,
            default: true,
            onChange: value => {
                this.toggleMobileHotbar(value);
            }
        });
    }

    /**
     * Setup responsive event handlers
     */
    setupResponsiveHandlers() {
        // Handle actor sheet opening
        Hooks.on('renderActorSheet', (sheet, html, data) => {
            this.handleActorSheet(sheet, html, data);
        });

        // Handle chat log rendering
        Hooks.on('renderChatLog', (chatLog, html, data) => {
            this.handleChatLog(chatLog, html, data);
        });

        // Handle hotbar rendering
        Hooks.on('renderHotbar', (hotbar, html, data) => {
            this.handleHotbar(hotbar, html, data);
        });
    }

    /**
     * Called when Foundry is ready
     */
    onReady() {
        console.log(`${MobileRWD.MODULE_ID} | Module ready`);
        
        // Apply initial settings
        const hideMap = game.settings.get(MobileRWD.MODULE_ID, 'hideMap');
        const compactChat = game.settings.get(MobileRWD.MODULE_ID, 'compactChat');
        const mobileHotbar = game.settings.get(MobileRWD.MODULE_ID, 'mobileHotbar');
        
        this.toggleMapVisibility(!hideMap);
        this.toggleCompactChat(compactChat);
        this.toggleMobileHotbar(mobileHotbar);
    }

    /**
     * Handle window resize
     */
    handleResize() {
        const wasMobile = this.isMobile;
        const wasTablet = this.isTablet;
        
        this.isMobile = this.detectMobile();
        this.isTablet = this.detectTablet();
        
        if (wasMobile !== this.isMobile || wasTablet !== this.isTablet) {
            this.addDeviceClasses();
        }
    }

    /**
     * Handle actor sheet rendering for mobile optimization
     */
    handleActorSheet(sheet, html, data) {
        if (this.isMobile || this.isTablet) {
            html.addClass('mobile-optimized');
            
            // Make sheets more touch-friendly
            html.find('input, select, textarea').addClass('touch-friendly');
            
            // Prioritize important information
            this.optimizeSheetLayout(html);
        }
    }

    /**
     * Handle chat log rendering for mobile optimization
     */
    handleChatLog(chatLog, html, data) {
        if (this.isMobile || this.isTablet) {
            html.addClass('mobile-chat');
            
            // Make chat messages more readable on mobile
            html.find('.message').addClass('mobile-message');
        }
    }

    /**
     * Handle hotbar rendering for mobile optimization
     */
    handleHotbar(hotbar, html, data) {
        if ((this.isMobile || this.isTablet) && game.settings.get(MobileRWD.MODULE_ID, 'mobileHotbar')) {
            html.addClass('mobile-hotbar');
        }
    }

    /**
     * Toggle map visibility
     */
    toggleMapVisibility(show) {
        const canvas = document.getElementById('board');
        if (canvas) {
            canvas.style.display = show ? 'block' : 'none';
        }
        
        document.body.classList.toggle('hide-map', !show);
    }

    /**
     * Toggle compact chat mode
     */
    toggleCompactChat(compact) {
        document.body.classList.toggle('compact-chat', compact);
    }

    /**
     * Toggle mobile hotbar
     */
    toggleMobileHotbar(enabled) {
        document.body.classList.toggle('mobile-hotbar-enabled', enabled);
    }

    /**
     * Optimize sheet layout for mobile
     */
    optimizeSheetLayout(html) {
        // Group important information at the top
        const header = html.find('.sheet-header');
        if (header.length) {
            header.addClass('mobile-priority');
        }

        // Make tabs more touch-friendly
        const tabs = html.find('.sheet-tabs');
        if (tabs.length) {
            tabs.addClass('touch-tabs');
        }
    }
}

// Initialize the module
Hooks.once('init', () => {
    window.mobileRWD = new MobileRWD();
    window.mobileRWD.init();
});

// Export for use in other modules
export { MobileRWD };