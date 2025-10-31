/**
 * Projects Data
 * All games, tools, and assets information
 */

const projectsData = {
    // Featured Projects (shown in carousel)
    featured: [
        {
            id: 'letro',
            title: 'Letro',
            category: 'game',
            tag: 'New Release',
            description: 'Crosswords made simple. A relaxing word puzzle game that challenges your vocabulary and problem-solving skills.',
            image: 'images/letro.png',
            videoId: 'QUQNHY94gTo',
            videoIdMobile: 'uJwDq7laUiY',
            links: {
                crazyGame: 'https://www.crazygames.com/game/letro',
                playPage: 'pages/games/letro.html'
            }
        },
        {
            id: 'simple-words-pro',
            title: 'Simple Words Pro',
            category: 'game',
            tag: 'Popular',
            description: 'Relaxing word game that\'s as beautiful as it is brainy. Connect letters to form words and clear the board.',
            image: 'images/simple-words-pro.png',
            videoId: 'QUQNHY94gTo',
            videoIdMobile: 'uJwDq7laUiY',
            links: {
                playStore: 'https://play.google.com/store/apps/details?id=com.HBG.SimpleWords.Paid',
                crazyGame: 'https://www.crazygames.com/game/simple-words',
                playPage: 'pages/games/simple-words-pro.html'
            }
        },
        {
            id: 'slidy',
            title: 'Slidy',
            category: 'game',
            tag: 'Featured',
            description: 'Pure, authentic, and relaxing color game. Slide blocks to match colors in this minimalist puzzle experience.',
            image: 'images/slidy.png',
            videoId: 'QUQNHY94gTo',
            videoIdMobile: 'uJwDq7laUiY',
            links: {
                crazyGame: 'https://www.crazygames.com/game/slidy',
                playPage: 'pages/games/slidy.html'
            }
        }
    ],

    // Games Category
    games: [
        {
            id: 'letro',
            title: 'Letro',
            subtitle: 'Word Puzzle',
            description: 'Crosswords made simple.',
            image: 'images/letro.png',
            bgColor: '#FF6B6B',
            videoId: 'QUQNHY94gTo',
            videoIdMobile: 'uJwDq7laUiY',
            links: {
                crazyGame: 'https://www.crazygames.com/game/letro',
                playPage: 'pages/games/letro.html'
            }
        },
        {
            id: 'simple-words-pro',
            title: 'Simple Words Pro',
            subtitle: 'Word Connect',
            description: 'Relaxing word game that\'s beautiful and brainy.',
            image: 'images/simple-words-pro.png',
            bgColor: '#4D96FF',
            videoId: 'QUQNHY94gTo',
            videoIdMobile: 'uJwDq7laUiY',
            links: {
                playStore: 'https://play.google.com/store/apps/details?id=com.HBG.SimpleWords.Paid',
                crazyGame: 'https://www.crazygames.com/game/simple-words',
                playPage: 'pages/games/simple-words-pro.html'
            }
        },
        {
            id: 'slidy',
            title: 'Slidy',
            subtitle: 'Color Puzzle',
            description: 'Pure and relaxing color game.',
            image: 'images/slidy.png',
            bgColor: '#FFFFFF',
            videoId: 'QUQNHY94gTo',
            videoIdMobile: 'uJwDq7laUiY',
            links: {
                crazyGame: 'https://www.crazygames.com/game/slidy',
                playPage: 'pages/games/slidy.html'
            }
        },
        {
            id: 'hexa-quest',
            title: 'Hexa Quest',
            subtitle: 'Block Puzzle',
            description: 'Clean and beautifully designed block puzzle.',
            image: 'images/hexa-quest.png',
            bgColor: '#6BCB77',
            videoId: 'QUQNHY94gTo',
            videoIdMobile: 'uJwDq7laUiY',
            links: {
                playStore: 'https://play.google.com/store/apps/details?id=com.BlockPuzzleGame.HexaQuest1',
                playPage: 'pages/games/hexa-quest.html'
            }
        },
        {
            id: 'crossword-wonderer',
            title: 'Crossword Wonderer',
            subtitle: 'Crossword',
            description: 'Ultimate crossword puzzle game.',
            image: 'images/crossword-wonderer.png',
            bgColor: '#A06CD5',
            videoId: 'QUQNHY94gTo',
            videoIdMobile: 'uJwDq7laUiY',
            links: {
                playStore: 'https://play.google.com/store/apps/details?id=com.WordConnect.Crossword.Wonderer2',
                playPage: 'pages/games/crossword-wonderer.html'
            }
        }
    ],

    // Tools & Assets Category (merged)
    toolsAndAssets: [
        {
            id: 'portfolio-extension',
            title: 'Portfolio Extension',
            subtitle: 'VS Code Extension',
            description: 'Manage and showcase projects from your editor.',
            image: 'images/letro.png', // Replace with actual tool/asset image
            links: {
                github: 'https://github.com/housebgame/portfolio-extension'
            }
        },
        {
            id: 'ui-pack-1',
            title: 'Modern UI Pack',
            subtitle: 'UI Elements',
            description: 'Clean and modern UI elements for mobile games.',
            image: 'images/simple-words-pro.png', // Replace with actual tool/asset image
            links: {}
        },
        {
            id: 'unity-helper',
            title: 'Unity Helper Tools',
            subtitle: 'Editor Extension',
            description: 'Productivity tools for Unity game development.',
            image: 'images/slidy.png', // Replace with actual tool/asset image
            links: {}
        }
        // Add more tools and assets here
    ],

    // Social Media Links
    socials: [
        {
            platform: 'youtube',
            title: 'YouTube',
            description: 'Subscribe for game development tutorials and showcases',
            icon: '<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
            url: 'https://www.youtube.com/@HouseBoatGame'
        },
        {
            platform: 'twitter',
            title: 'Twitter / X',
            description: 'Follow for updates and behind-the-scenes content',
            icon: '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
            url: 'https://x.com/Lakshay_mothwal'
        },
        {
            platform: 'linkedin',
            title: 'LinkedIn',
            description: 'Connect professionally and see my work experience',
            icon: '<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
            url: 'https://in.linkedin.com/in/lakshay-mothwal-b6210b198'
        },
        {
            platform: 'instagram',
            title: 'Instagram',
            description: 'See visual updates and game development progress',
            icon: '<svg viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
            url: 'https://www.instagram.com/Lakshay_mothwal/'
        },
        {
            platform: 'github',
            title: 'GitHub',
            description: 'Check out my open source projects and code',
            icon: '<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
            url: 'https://github.com/housebgame'
        },
        {
            platform: 'email',
            title: 'Email',
            description: 'Get in touch for collaboration or inquiries',
            icon: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
            url: 'mailto:houseboatgame@gmail.com'
        }
    ]
};

// Store icons
const storeIcons = {
    playStore: `<svg class="store-icon" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    </svg>`,

    appStore: `<svg class="store-icon" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.2 12.37 21.2C10.84 21.2 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
    </svg>`,

    crazyGames: `<img src="images/Crazy-games.png" alt="Crazy Games" class="store-icon">`
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData, storeIcons };
}
