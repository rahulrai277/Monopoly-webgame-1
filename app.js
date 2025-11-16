// ===== GAME DATA =====
const BOARD_SPACES = [
    { name: "GO", type: "corner", price: 0, emoji: "🎯" },
    { name: "Himachal Pradesh", type: "property", price: 60, rent: 2, color: "#8B4513", emoji: "🏔️", region: "North", capital: "Shimla", houses: 0, rentWithHouses: [10, 30, 90, 160, 250], houseCost: 50 },
    { name: "Community Chest", type: "card", price: 0, emoji: "📋", cardType: "community" },
    { name: "Uttarakhand", type: "property", price: 60, rent: 4, color: "#8B4513", emoji: "⛰️", region: "North", capital: "Dehradun", houses: 0, rentWithHouses: [20, 60, 180, 320, 450], houseCost: 50 },
    { name: "Income Tax", type: "tax", price: 0, amount: 200, emoji: "💰" },
    { name: "Railway 1", type: "railroad", price: 200, rent: 25, emoji: "🚂" },
    { name: "Punjab", type: "property", price: 100, rent: 6, color: "#87CEEB", emoji: "🌾", region: "North", capital: "Chandigarh", houses: 0, rentWithHouses: [30, 90, 270, 400, 550], houseCost: 50 },
    { name: "Chance", type: "card", price: 0, emoji: "🎲", cardType: "chance" },
    { name: "Haryana", type: "property", price: 100, rent: 6, color: "#87CEEB", emoji: "🏭", region: "North", capital: "Chandigarh", houses: 0, rentWithHouses: [30, 90, 270, 400, 550], houseCost: 50 },
    { name: "Rajasthan", type: "property", price: 120, rent: 8, color: "#87CEEB", emoji: "🏰", region: "North", capital: "Jaipur", houses: 0, rentWithHouses: [40, 100, 300, 450, 600], houseCost: 50 },
    { name: "Jail", type: "corner", price: 0, emoji: "🔒" },
    { name: "Madhya Pradesh", type: "property", price: 140, rent: 10, color: "#FF69B4", emoji: "🛕", region: "Central", capital: "Bhopal", houses: 0, rentWithHouses: [50, 150, 450, 625, 750], houseCost: 100 },
    { name: "Utility 1", type: "utility", price: 150, emoji: "💡" },
    { name: "Chhattisgarh", type: "property", price: 140, rent: 10, color: "#FF69B4", emoji: "🌳", region: "Central", capital: "Raipur", houses: 0, rentWithHouses: [50, 150, 450, 625, 750], houseCost: 100 },
    { name: "Jharkhand", type: "property", price: 160, rent: 12, color: "#FF69B4", emoji: "⛏️", region: "East", capital: "Ranchi", houses: 0, rentWithHouses: [60, 180, 500, 700, 900], houseCost: 100 },
    { name: "Railway 2", type: "railroad", price: 200, rent: 25, emoji: "🚂" },
    { name: "Odisha", type: "property", price: 180, rent: 14, color: "#FFA500", emoji: "🏖️", region: "East", capital: "Bhubaneswar", houses: 0, rentWithHouses: [70, 200, 550, 750, 950], houseCost: 100 },
    { name: "Community Chest", type: "card", price: 0, emoji: "📋", cardType: "community" },
    { name: "West Bengal", type: "property", price: 180, rent: 14, color: "#FFA500", emoji: "🎭", region: "East", capital: "Kolkata", houses: 0, rentWithHouses: [70, 200, 550, 750, 950], houseCost: 100 },
    { name: "Bihar", type: "property", price: 200, rent: 16, color: "#FFA500", emoji: "📚", region: "East", capital: "Patna", houses: 0, rentWithHouses: [80, 220, 600, 800, 1000], houseCost: 100 },
    { name: "Free Parking", type: "corner", price: 0, emoji: "🅿️" },
    { name: "Uttar Pradesh", type: "property", price: 220, rent: 18, color: "#DC143C", emoji: "🕌", region: "North", capital: "Lucknow", houses: 0, rentWithHouses: [90, 250, 700, 875, 1050], houseCost: 150 },
    { name: "Chance", type: "card", price: 0, emoji: "🎲", cardType: "chance" },
    { name: "Assam", type: "property", price: 220, rent: 18, color: "#DC143C", emoji: "🍵", region: "Northeast", capital: "Dispur", houses: 0, rentWithHouses: [90, 250, 700, 875, 1050], houseCost: 150 },
    { name: "Gujarat", type: "property", price: 240, rent: 20, color: "#DC143C", emoji: "🦁", region: "West", capital: "Gandhinagar", houses: 0, rentWithHouses: [100, 300, 750, 925, 1100], houseCost: 150 },
    { name: "Railway 3", type: "railroad", price: 200, rent: 25, emoji: "🚂" },
    { name: "Karnataka", type: "property", price: 260, rent: 22, color: "#FFD700", emoji: "💻", region: "South", capital: "Bangalore", houses: 0, rentWithHouses: [110, 330, 800, 975, 1150], houseCost: 150 },
    { name: "Telangana", type: "property", price: 260, rent: 22, color: "#FFD700", emoji: "💎", region: "South", capital: "Hyderabad", houses: 0, rentWithHouses: [110, 330, 800, 975, 1150], houseCost: 150 },
    { name: "Utility 2", type: "utility", price: 150, emoji: "💧" },
    { name: "Andhra Pradesh", type: "property", price: 280, rent: 24, color: "#FFD700", emoji: "🌶️", region: "South", capital: "Amaravati", houses: 0, rentWithHouses: [120, 360, 850, 1025, 1200], houseCost: 150 },
    { name: "Go to Jail", type: "corner", price: 0, emoji: "👮" },
    { name: "Tamil Nadu", type: "property", price: 300, rent: 26, color: "#228B22", emoji: "🛕", region: "South", capital: "Chennai", houses: 0, rentWithHouses: [130, 390, 900, 1100, 1275], houseCost: 200 },
    { name: "Kerala", type: "property", price: 300, rent: 26, color: "#228B22", emoji: "🥥", region: "South", capital: "Trivandrum", houses: 0, rentWithHouses: [130, 390, 900, 1100, 1275], houseCost: 200 },
    { name: "Community Chest", type: "card", price: 0, emoji: "📋", cardType: "community" },
    { name: "Goa", type: "property", price: 320, rent: 28, color: "#228B22", emoji: "🏖️", region: "West", capital: "Panaji", houses: 0, rentWithHouses: [150, 450, 1000, 1200, 1400], houseCost: 200 },
    { name: "Railway 4", type: "railroad", price: 200, rent: 25, emoji: "🚂" },
    { name: "Chance", type: "card", price: 0, emoji: "🎲", cardType: "chance" },
    { name: "Maharashtra", type: "property", price: 350, rent: 35, color: "#0000CD", emoji: "🌆", region: "West", capital: "Mumbai", houses: 0, rentWithHouses: [175, 500, 1100, 1300, 1500], houseCost: 200 },
    { name: "Luxury Tax", type: "tax", price: 0, amount: 100, emoji: "💎" },
    { name: "Delhi", type: "property", price: 400, rent: 50, color: "#0000CD", emoji: "🏛️", region: "North", capital: "New Delhi", houses: 0, rentWithHouses: [200, 600, 1400, 1700, 2000], houseCost: 200 }
];

const COMMUNITY_CHEST_CARDS = [
    { name: "Advance to GO", desc: "Advance to GO. Collect $200.", action: "advanceGo" },
    { name: "Bank Error", desc: "Bank error in your favor. Collect $200.", action: "collect200" },
    { name: "Doctor's Fees", desc: "Doctor's fees. Pay $50.", action: "pay50" },
    { name: "Stock Sale", desc: "From sale of stock you get $50.", action: "collect50" },
    { name: "Get Out of Jail Free", desc: "Get out of Jail Free card.", action: "jailFree" },
    { name: "Go to Jail", desc: "Go to Jail directly.", action: "goJail" },
    { name: "Opera Night", desc: "Grand Opera Night. Collect $50 from every player.", action: "collectAll" },
    { name: "Tax Refund", desc: "Income tax refund. Collect $20.", action: "collect20" },
    { name: "Birthday", desc: "It's your birthday. Collect $10 from every player.", action: "birthday" },
    { name: "Life Insurance", desc: "Life insurance matures. Collect $100.", action: "collect100" },
    { name: "Hospital Fees", desc: "Pay hospital fees of $100.", action: "pay100" },
    { name: "School Fees", desc: "Pay school fees of $50.", action: "paySchool" },
    { name: "Consultancy Fee", desc: "Receive $25 consultancy fee.", action: "collect25" },
    { name: "Street Repairs", desc: "Street repairs: $40 per house, $115 per hotel.", action: "repairs" },
    { name: "Beauty Contest", desc: "Second prize in beauty contest. Collect $10.", action: "collect10" },
    { name: "Inheritance", desc: "You inherit $100.", action: "inherit" }
];

const CHANCE_CARDS = [
    { name: "Advance to GO", desc: "Advance to GO. Collect $200.", action: "advanceGo" },
    { name: "Advance Token", desc: "Advance to nearest railroad.", action: "railroad" },
    { name: "Go Back 3", desc: "Go back 3 spaces.", action: "back3" },
    { name: "Go to Jail", desc: "Go to Jail directly.", action: "goJail" },
    { name: "General Repairs", desc: "$25 per house, $100 per hotel.", action: "repairsGen" },
    { name: "Speeding Fine", desc: "Speeding fine $15.", action: "pay15" },
    { name: "Board Chairman", desc: "Elected chairman. Pay each player $50.", action: "payAll" },
    { name: "Building Loan", desc: "Building loan matures. Collect $150.", action: "collect150" },
    { name: "Bank Dividend", desc: "Bank pays you dividend of $50.", action: "collect50" },
    { name: "Get Out of Jail Free", desc: "Get out of Jail Free card.", action: "jailFree" },
    { name: "Advance to Utility", desc: "Advance to nearest Utility.", action: "utility" },
    { name: "Poor Tax", desc: "Pay poor tax of $15.", action: "poorTax" },
    { name: "Reading Trip", desc: "Take a trip to Reading Railroad.", action: "reading" },
    { name: "Boardwalk", desc: "Advance token to Boardwalk.", action: "boardwalk" },
    { name: "St. Charles", desc: "Advance to St. Charles Place.", action: "stcharles" },
    { name: "Illinois Avenue", desc: "Advance to Illinois Avenue.", action: "illinois" }
];

const PLAYER_COLORS = [
    { bg: "#DC2626", token: "🏛️", name: "Red" },
    { bg: "#2563EB", token: "🏘️", name: "Blue" },
    { bg: "#059669", token: "🕌", name: "Green" },
    { bg: "#D97706", token: "⛩️", name: "Orange" }
];

// ===== GAME STATE =====
let gameState = {
    players: [],
    currentPlayer: 0,
    settings: {
        soundEffects: true,
        bgMusic: true,
        volume: 0.5,
        theme: 'royal'
    },
    dice: [1, 1],
    canRoll: true,
    tradeOffers: []
};

// ===== AUDIO SYSTEM =====
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new AudioContext();
    }
}

function playSound(type) {
    if (!gameState.settings.soundEffects || !audioCtx) return;
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    const vol = gameState.settings.volume;
    
    switch(type) {
        case 'dice':
            osc.frequency.value = 400;
            gain.gain.setValueAtTime(0.3 * vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.3);
            break;
        case 'move':
            osc.frequency.value = 600;
            gain.gain.setValueAtTime(0.2 * vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.15);
            break;
        case 'buy':
            osc.frequency.value = 800;
            gain.gain.setValueAtTime(0.3 * vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.4);
            break;
        case 'rent':
            osc.frequency.value = 300;
            gain.gain.setValueAtTime(0.3 * vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.3);
            break;
    }
}

let musicInterval = null;
function startMusic() {
    if (!gameState.settings.bgMusic || !audioCtx) return;
    if (musicInterval) return;
    
    const playNote = () => {
        if (!gameState.settings.bgMusic) return;
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.frequency.value = 200 + Math.random() * 200;
        gain.gain.setValueAtTime(0.05 * gameState.settings.volume, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 2);
    };
    
    musicInterval = setInterval(playNote, 3000);
    playNote();
}

function stopMusic() {
    if (musicInterval) {
        clearInterval(musicInterval);
        musicInterval = null;
    }
}

// ===== SETUP PAGE =====
function initSetup() {
    createParticles();
    
    // Player count selection
    document.querySelectorAll('.player-count-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.player-count-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            
            const count = parseInt(btn.dataset.players);
            document.querySelectorAll('.player-input-wrapper').forEach((wrapper, i) => {
                if (i < count) {
                    wrapper.classList.add('active');
                } else {
                    wrapper.classList.remove('active');
                }
            });
            
            checkStartButton();
        });
    });
    
    // Player name inputs
    document.querySelectorAll('.player-input').forEach(input => {
        input.addEventListener('input', checkStartButton);
    });
    
    // Theme selection
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            
            const theme = btn.dataset.theme;
            gameState.settings.theme = theme;
            document.body.setAttribute('data-theme', theme);
        });
    });
    
    // Set default theme
    document.querySelector('.theme-btn[data-theme="royal"]').classList.add('selected');
    
    // Sound settings
    document.getElementById('bgMusicToggle').addEventListener('change', (e) => {
        gameState.settings.bgMusic = e.target.checked;
    });
    
    document.getElementById('soundEffectsToggle').addEventListener('change', (e) => {
        gameState.settings.soundEffects = e.target.checked;
    });
    
    document.getElementById('volumeSlider').addEventListener('input', (e) => {
        const vol = parseInt(e.target.value);
        gameState.settings.volume = vol / 100;
        document.getElementById('volumeValue').textContent = vol + '%';
    });
    
    // Start game button
    document.getElementById('startGameBtn').addEventListener('click', startGame);
}

function checkStartButton() {
    const selectedCount = document.querySelector('.player-count-btn.selected');
    if (!selectedCount) {
        document.getElementById('startGameBtn').disabled = true;
        return;
    }
    
    const count = parseInt(selectedCount.dataset.players);
    const inputs = Array.from(document.querySelectorAll('.player-input-wrapper.active .player-input'));
    const allFilled = inputs.every(input => input.value.trim() !== '');
    
    document.getElementById('startGameBtn').disabled = !allFilled;
}

function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (3 + Math.random() * 2) + 's';
        container.appendChild(particle);
    }
}

function startGame() {
    initAudio();
    
    const selectedCount = document.querySelector('.player-count-btn.selected');
    const count = parseInt(selectedCount.dataset.players);
    
    gameState.players = [];
    const inputs = document.querySelectorAll('.player-input-wrapper.active .player-input');
    inputs.forEach((input, i) => {
        gameState.players.push({
            name: input.value.trim(),
            cash: 1500,
            position: 0,
            properties: [],
            color: PLAYER_COLORS[i].bg,
            token: PLAYER_COLORS[i].token,
            colorName: PLAYER_COLORS[i].name
        });
    });
    
    document.getElementById('setupPage').style.display = 'none';
    document.getElementById('gamePage').style.display = 'block';
    
    initGame();
}

// ===== GAME INITIALIZATION =====
function initGame() {
    // Apply theme
    document.getElementById('themeSelect').value = gameState.settings.theme;
    
    // Generate board
    renderBoard();
    
    // Generate info cards
    renderInfoCards();
    
    // Update displays
    updateAllDisplays();
    
    // Setup event listeners
    document.getElementById('rollDiceMainBtn').addEventListener('click', rollDice);
    
    document.querySelectorAll('.panel-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const panel = tab.dataset.panel;
            document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.panel-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(panel + 'Panel').classList.add('active');
        });
    });
    
    document.getElementById('soundBtn').addEventListener('click', (e) => {
        gameState.settings.soundEffects = !gameState.settings.soundEffects;
        e.target.classList.toggle('active', gameState.settings.soundEffects);
        e.target.textContent = gameState.settings.soundEffects ? '🔊 Sound' : '🔇 Sound';
    });
    
    document.getElementById('musicBtn').addEventListener('click', (e) => {
        gameState.settings.bgMusic = !gameState.settings.bgMusic;
        e.target.classList.toggle('active', gameState.settings.bgMusic);
        e.target.textContent = gameState.settings.bgMusic ? '🎵 Music' : '🔇 Music';
        
        if (gameState.settings.bgMusic) {
            startMusic();
        } else {
            stopMusic();
        }
    });
    
    document.getElementById('themeSelect').addEventListener('change', (e) => {
        gameState.settings.theme = e.target.value;
        document.body.setAttribute('data-theme', e.target.value);
    });
    
    // Start music
    if (gameState.settings.bgMusic) {
        startMusic();
    }
    
    // Initialize center displays
    updateCurrentTurn();
    updateCurrentSpaceInfo('Click the ROLL DICE button to start!');
    document.getElementById('statusMessage').textContent = 'Ready to roll!';
    
    addLog('🎮 Game started! ' + gameState.players[0].name + '\'s turn.');
}

function renderBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    
    const positions = [
        [11,11], [10,11], [9,11], [8,11], [7,11], [6,11], [5,11], [4,11], [3,11], [2,11], [1,11],
        [1,10], [1,9], [1,8], [1,7], [1,6], [1,5], [1,4], [1,3], [1,2], [1,1],
        [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1], [10,1], [11,1],
        [11,2], [11,3], [11,4], [11,5], [11,6], [11,7], [11,8], [11,9], [11,10]
    ];
    
    BOARD_SPACES.forEach((space, index) => {
        const spaceEl = document.createElement('div');
        spaceEl.className = 'space';
        spaceEl.dataset.index = index;
        
        const [col, row] = positions[index];
        spaceEl.style.gridColumn = col;
        spaceEl.style.gridRow = row;
        
        if (space.color) {
            const colorBar = document.createElement('div');
            colorBar.className = 'color-bar';
            colorBar.style.background = space.color;
            spaceEl.appendChild(colorBar);
        }
        
        const name = document.createElement('div');
        name.className = 'space-name';
        name.textContent = space.name;
        spaceEl.appendChild(name);
        
        if (space.price > 0) {
            const price = document.createElement('div');
            price.className = 'space-price';
            price.textContent = '$' + space.price;
            spaceEl.appendChild(price);
        }
        
        const tokens = document.createElement('div');
        tokens.className = 'tokens';
        spaceEl.appendChild(tokens);
        
        spaceEl.addEventListener('click', () => showSpaceInfo(index));
        
        board.appendChild(spaceEl);
    });
    
    // Board center
    const center = document.createElement('div');
    center.className = 'board-center';
    center.innerHTML = `
        <div class="dice-container">
            <div class="dice" id="dice1">1</div>
            <div class="dice" id="dice2">1</div>
        </div>
        <div class="board-title">MONOPOLY</div>
        <div class="board-subtitle">INDIA EDITION</div>
    `;
    board.appendChild(center);
    
    updateTokens();
}

function updateTokens() {
    document.querySelectorAll('.tokens').forEach(el => el.innerHTML = '');
    
    gameState.players.forEach((player, i) => {
        const space = document.querySelector(`.space[data-index="${player.position}"]`);
        if (space) {
            const tokensContainer = space.querySelector('.tokens');
            const token = document.createElement('div');
            token.className = 'token';
            if (i === gameState.currentPlayer) {
                token.classList.add('active');
            }
            token.style.background = player.color;
            token.textContent = player.token;
            tokensContainer.appendChild(token);
        }
    });
}

function renderInfoCards() {
    const communityDiv = document.getElementById('communityCards');
    COMMUNITY_CHEST_CARDS.forEach((card, i) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'info-card';
        cardEl.innerHTML = `
            <div class="card-number">${i + 1}</div>
            <div class="card-content">
                <h4>📋 ${card.name}</h4>
                <p>${card.desc}</p>
            </div>
        `;
        communityDiv.appendChild(cardEl);
    });
    
    const chanceDiv = document.getElementById('chanceCards');
    CHANCE_CARDS.forEach((card, i) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'info-card';
        cardEl.innerHTML = `
            <div class="card-number">${i + 1}</div>
            <div class="card-content">
                <h4>🎲 ${card.name}</h4>
                <p>${card.desc}</p>
            </div>
        `;
        chanceDiv.appendChild(cardEl);
    });
}

// ===== GAME LOGIC =====
function rollDice() {
    if (!gameState.canRoll) return;
    
    gameState.canRoll = false;
    document.getElementById('rollDiceMainBtn').disabled = true;
    document.getElementById('statusMessage').textContent = 'Rolling...';
    
    playSound('dice');
    
    const dice1El = document.getElementById('centerDice1');
    const dice2El = document.getElementById('centerDice2');
    dice1El.classList.add('rolling');
    dice2El.classList.add('rolling');
    
    let count = 0;
    const interval = setInterval(() => {
        dice1El.textContent = Math.floor(Math.random() * 6) + 1;
        dice2El.textContent = Math.floor(Math.random() * 6) + 1;
        count++;
        
        if (count >= 10) {
            clearInterval(interval);
            
            gameState.dice[0] = Math.floor(Math.random() * 6) + 1;
            gameState.dice[1] = Math.floor(Math.random() * 6) + 1;
            const total = gameState.dice[0] + gameState.dice[1];
            
            dice1El.textContent = gameState.dice[0];
            dice2El.textContent = gameState.dice[1];
            dice1El.classList.remove('rolling');
            dice2El.classList.remove('rolling');
            
            // Update board center dice too
            const boardDice1 = document.getElementById('dice1');
            const boardDice2 = document.getElementById('dice2');
            if (boardDice1) boardDice1.textContent = gameState.dice[0];
            if (boardDice2) boardDice2.textContent = gameState.dice[1];
            
            addLog(`🎲 ${gameState.players[gameState.currentPlayer].name} rolled ${gameState.dice[0]} + ${gameState.dice[1]} = ${total}`);
            
            document.getElementById('centerLastRoll').textContent = total;
            
            setTimeout(() => movePlayer(total), 300);
        }
    }, 100);
}

function movePlayer(spaces) {
    const player = gameState.players[gameState.currentPlayer];
    const oldPos = player.position;
    
    let moved = 0;
    const interval = setInterval(() => {
        player.position = (player.position + 1) % 40;
        updateTokens();
        playSound('move');
        moved++;
        
        if (moved >= spaces) {
            clearInterval(interval);
            
            if (player.position < oldPos || (oldPos + spaces >= 40)) {
                player.cash += 200;
                addLog(`🎯 ${player.name} passed GO and collected $200!`);
            }
            
            setTimeout(() => landOnSpace(), 300);
        }
    }, 200);
}

function landOnSpace() {
    const player = gameState.players[gameState.currentPlayer];
    const space = BOARD_SPACES[player.position];
    
    addLog(`📍 ${player.name} landed on ${space.name}`);
    showSpaceInfo(player.position);
    updateCurrentSpaceInfoCard(player.position);
    
    if (space.type === 'property' || space.type === 'railroad') {
        if (space.owner === undefined || space.owner === null || space.owner === -1) {
            showBuyOption(player.position);
        } else if (space.owner !== gameState.currentPlayer) {
            payRent(player.position);
        } else {
            setTimeout(() => endTurn(), 1000);
        }
    } else if (space.type === 'tax') {
        player.cash -= space.amount;
        addLog(`💰 ${player.name} paid $${space.amount} in taxes`);
        updateAllDisplays();
        setTimeout(() => endTurn(), 1000);
    } else if (space.type === 'card') {
        drawCard(space.cardType);
    } else {
        setTimeout(() => endTurn(), 1000);
    }
    
    updateAllDisplays();
}

function updateCurrentSpaceInfo(message) {
    const spaceInfoDiv = document.getElementById('currentSpaceInfo');
    spaceInfoDiv.innerHTML = `<p class="info-text">${message}</p>`;
}

function updateCurrentSpaceInfoCard(index) {
    const space = BOARD_SPACES[index];
    const spaceInfoDiv = document.getElementById('currentSpaceInfo');
    
    if (space.type === 'property' || space.type === 'railroad') {
        const owner = space.owner >= 0 ? gameState.players[space.owner].name : 'Available';
        const ownerColor = space.owner >= 0 ? gameState.players[space.owner].color : '#6B7280';
        
        spaceInfoDiv.innerHTML = `
            <div class="space-detail-inline">
                <div class="space-name-big">${space.emoji} ${space.name}</div>
                <div class="space-info-grid">
                    <div class="info-item">
                        <span class="info-label">Type:</span> ${space.type === 'property' ? 'Property' : 'Railroad'}
                    </div>
                    <div class="info-item">
                        <span class="info-label">Price:</span> $${space.price}
                    </div>
                    <div class="info-item">
                        <span class="info-label">Owner:</span> <span style="color: ${ownerColor}; font-weight: bold;">${owner}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Rent:</span> $${space.rent}
                    </div>
                </div>
            </div>
        `;
    } else if (space.type === 'tax') {
        spaceInfoDiv.innerHTML = `
            <div class="space-detail-inline">
                <div class="space-name-big">${space.emoji} ${space.name}</div>
                <p class="info-text" style="margin-top: 10px;">Pay $${space.amount} in taxes</p>
            </div>
        `;
    } else if (space.type === 'card') {
        spaceInfoDiv.innerHTML = `
            <div class="space-detail-inline">
                <div class="space-name-big">${space.emoji} ${space.name}</div>
                <p class="info-text" style="margin-top: 10px;">Draw a ${space.cardType === 'chance' ? 'Chance' : 'Community Chest'} card</p>
            </div>
        `;
    } else {
        spaceInfoDiv.innerHTML = `
            <div class="space-detail-inline">
                <div class="space-name-big">${space.emoji} ${space.name}</div>
            </div>
        `;
    }
}

function showSpaceInfo(index) {
    const space = BOARD_SPACES[index];
    const infoBox = document.getElementById('stateInfoBox');
    
    let html = '';
    
    if (space.type === 'property') {
        const owner = space.owner >= 0 ? gameState.players[space.owner].name : 'Available';
        html = `
            <div class="state-detail">
                <h4>${space.emoji} ${space.name}</h4>
                <div class="detail-row"><span>Region:</span><span>${space.region}</span></div>
                <div class="detail-row"><span>Capital:</span><span>${space.capital}</span></div>
                <div class="detail-row"><span>Price:</span><span>$${space.price}</span></div>
                <div class="detail-row"><span>Owner:</span><span>${owner}</span></div>
            </div>
            <div class="state-detail">
                <h4>🏠 Rent Breakdown</h4>
                <div class="detail-row"><span>Base Rent:</span><span>$${space.rent}</span></div>
                <div class="detail-row"><span>1 House:</span><span>$${space.rentWithHouses[0]}</span></div>
                <div class="detail-row"><span>2 Houses:</span><span>$${space.rentWithHouses[1]}</span></div>
                <div class="detail-row"><span>3 Houses:</span><span>$${space.rentWithHouses[2]}</span></div>
                <div class="detail-row"><span>4 Houses:</span><span>$${space.rentWithHouses[3]}</span></div>
                <div class="detail-row"><span>Hotel:</span><span>$${space.rentWithHouses[4]}</span></div>
                <div class="detail-row"><span>House Cost:</span><span>$${space.houseCost}</span></div>
                <div class="detail-row"><span>Buildings:</span><span>${space.houses || 0} 🏠</span></div>
            </div>
        `;
    } else if (space.type === 'railroad') {
        const owner = space.owner >= 0 ? gameState.players[space.owner].name : 'Available';
        html = `
            <div class="state-detail">
                <h4>🚂 ${space.name}</h4>
                <div class="detail-row"><span>Type:</span><span>Railroad</span></div>
                <div class="detail-row"><span>Price:</span><span>$${space.price}</span></div>
                <div class="detail-row"><span>Base Rent:</span><span>$${space.rent}</span></div>
                <div class="detail-row"><span>Owner:</span><span>${owner}</span></div>
            </div>
        `;
    } else if (space.type === 'utility') {
        const owner = space.owner >= 0 ? gameState.players[space.owner].name : 'Available';
        html = `
            <div class="state-detail">
                <h4>${space.emoji} ${space.name}</h4>
                <div class="detail-row"><span>Type:</span><span>Utility</span></div>
                <div class="detail-row"><span>Price:</span><span>$${space.price}</span></div>
                <div class="detail-row"><span>Rent:</span><span>4× or 10× dice roll</span></div>
                <div class="detail-row"><span>Owner:</span><span>${owner}</span></div>
            </div>
        `;
    } else {
        html = `
            <div class="state-detail">
                <h4>${space.emoji} ${space.name}</h4>
                <div class="detail-row"><span>Type:</span><span>${space.type}</span></div>
            </div>
        `;
    }
    
    infoBox.innerHTML = html;
}

function showBuyOption(index) {
    const space = BOARD_SPACES[index];
    const player = gameState.players[gameState.currentPlayer];
    
    const buyOptionsDiv = document.getElementById('buyOptions');
    buyOptionsDiv.style.display = 'block';
    
    if (player.cash >= space.price) {
        const afterPurchase = player.cash - space.price;
        buyOptionsDiv.innerHTML = `
            <div class="buy-question">Do you want to buy ${space.name}?</div>
            <div class="buy-details">
                <div class="buy-detail-item">
                    <span class="buy-detail-label">Price</span>
                    <span class="buy-detail-value">$${space.price}</span>
                </div>
                <div class="buy-detail-item">
                    <span class="buy-detail-label">Your Cash</span>
                    <span class="buy-detail-value">$${player.cash}</span>
                </div>
                <div class="buy-detail-item">
                    <span class="buy-detail-label">After Purchase</span>
                    <span class="buy-detail-value">$${afterPurchase}</span>
                </div>
            </div>
            <div class="buy-buttons">
                <button class="buy-btn yes" onclick="buyProperty(${index})">
                    <span>✅</span> BUY NOW
                </button>
                <button class="buy-btn no" onclick="skipProperty()">
                    <span>❌</span> SKIP
                </button>
            </div>
        `;
    } else {
        buyOptionsDiv.innerHTML = `
            <div class="buy-question" style="color: #EF4444;">Not Enough Cash!</div>
            <div class="buy-details">
                <div class="buy-detail-item">
                    <span class="buy-detail-label">Price</span>
                    <span class="buy-detail-value">$${space.price}</span>
                </div>
                <div class="buy-detail-item">
                    <span class="buy-detail-label">Your Cash</span>
                    <span class="buy-detail-value" style="color: #EF4444;">$${player.cash}</span>
                </div>
            </div>
            <div class="buy-buttons">
                <button class="buy-btn no" onclick="endTurn()" style="grid-column: 1 / -1;">
                    <span>➡️</span> CONTINUE
                </button>
            </div>
        `;
    }
}

function buyProperty(index) {
    const space = BOARD_SPACES[index];
    const player = gameState.players[gameState.currentPlayer];
    
    player.cash -= space.price;
    space.owner = gameState.currentPlayer;
    player.properties.push(index);
    
    playSound('buy');
    addLog(`✅ ${player.name} bought ${space.name} for $${space.price}`);
    
    document.getElementById('buyOptions').style.display = 'none';
    document.getElementById('statusMessage').textContent = `Purchased ${space.name}!`;
    updateAllDisplays();
    
    setTimeout(() => endTurn(), 1000);
}

function skipProperty() {
    const player = gameState.players[gameState.currentPlayer];
    const space = BOARD_SPACES[player.position];
    
    addLog(`❌ ${player.name} declined to buy ${space.name}`);
    document.getElementById('buyOptions').style.display = 'none';
    document.getElementById('statusMessage').textContent = 'Property skipped';
    
    setTimeout(() => endTurn(), 500);
}

function payRent(index) {
    const space = BOARD_SPACES[index];
    const payer = gameState.players[gameState.currentPlayer];
    const owner = gameState.players[space.owner];
    
    let rent = space.rent;
    
    if (space.type === 'property' && space.houses > 0) {
        rent = space.rentWithHouses[space.houses - 1];
    } else if (space.type === 'railroad') {
        const railCount = owner.properties.filter(p => BOARD_SPACES[p].type === 'railroad').length;
        rent = 25 * Math.pow(2, railCount - 1);
    } else if (space.type === 'utility') {
        const utilCount = owner.properties.filter(p => BOARD_SPACES[p].type === 'utility').length;
        const total = gameState.dice[0] + gameState.dice[1];
        rent = (utilCount === 1 ? 4 : 10) * total;
    }
    
    payer.cash -= rent;
    owner.cash += rent;
    
    playSound('rent');
    addLog(`💰 ${payer.name} paid $${rent} rent to ${owner.name}`);
    
    updateAllDisplays();
    
    setTimeout(() => endTurn(), 1500);
}

function drawCard(type) {
    const cards = type === 'chance' ? CHANCE_CARDS : COMMUNITY_CHEST_CARDS;
    const card = cards[Math.floor(Math.random() * cards.length)];
    const player = gameState.players[gameState.currentPlayer];
    
    const emoji = type === 'chance' ? '🎲' : '📋';
    addLog(`${emoji} ${player.name} drew: ${card.name}`);
    
    // Apply card effect
    switch(card.action) {
        case 'advanceGo':
            player.position = 0;
            player.cash += 200;
            updateTokens();
            break;
        case 'collect200':
        case 'collect100':
        case 'collect50':
        case 'collect25':
        case 'collect20':
        case 'collect10':
        case 'collect150':
        case 'inherit':
            const amount = parseInt(card.action.match(/\d+/) || ['100']);
            player.cash += amount;
            break;
        case 'pay50':
        case 'pay100':
        case 'pay15':
        case 'paySchool':
        case 'poorTax':
            const payAmount = parseInt(card.action.match(/\d+/) || ['50']);
            player.cash -= payAmount;
            break;
        case 'goJail':
            player.position = 10;
            updateTokens();
            break;
        case 'back3':
            player.position = (player.position - 3 + 40) % 40;
            updateTokens();
            break;
    }
    
    updateAllDisplays();
    
    setTimeout(() => endTurn(), 2000);
}

function endTurn() {
    gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.players.length;
    gameState.canRoll = true;
    
    document.getElementById('rollDiceMainBtn').disabled = false;
    document.getElementById('buyOptions').style.display = 'none';
    
    const player = gameState.players[gameState.currentPlayer];
    document.getElementById('statusMessage').textContent = `${player.name}'s turn - Click to roll!`;
    
    updateCurrentSpaceInfo('Roll the dice to begin!');
    
    updateAllDisplays();
    addLog(`🎯 ${player.name}'s turn`);
}

function updateAllDisplays() {
    updatePlayerCards();
    updateCurrentTurn();
    updateTokens();
    showSpaceInfo(gameState.players[gameState.currentPlayer].position);
}

function updatePlayerCards() {
    const container = document.getElementById('playerCards');
    container.innerHTML = '';
    
    gameState.players.forEach((player, i) => {
        const card = document.createElement('div');
        card.className = 'player-card';
        if (i === gameState.currentPlayer) {
            card.classList.add('active');
        }
        card.style.background = player.color;
        
        let propsHTML = '';
        if (player.properties.length > 0) {
            propsHTML = '<div class="property-grid">';
            player.properties.forEach(index => {
                const space = BOARD_SPACES[index];
                propsHTML += `<div class="property-item">${space.emoji} ${space.name} - $${space.price}</div>`;
            });
            propsHTML += '</div>';
        } else {
            propsHTML = '<div style="text-align: center; opacity: 0.7; margin-top: 10px;">No properties yet</div>';
        }
        
        card.innerHTML = `
            <div class="player-header">
                <div class="player-token-display">${player.token}</div>
                <div class="player-info">
                    <h3>${player.name}</h3>
                    <div class="player-cash">💵 $${player.cash}</div>
                </div>
            </div>
            <div style="font-size: 14px; margin-bottom: 10px;">
                🏠 <strong>${player.properties.length}</strong> Properties
            </div>
            ${propsHTML}
        `;
        
        container.appendChild(card);
    });
}

function updateCurrentTurn() {
    const player = gameState.players[gameState.currentPlayer];
    
    // Update center section
    document.getElementById('centerPlayerIcon').textContent = player.token;
    document.getElementById('centerPlayerIcon').style.background = `linear-gradient(135deg, ${player.color}, ${player.color}dd)`;
    document.getElementById('centerPlayerName').textContent = `${player.name}'s Turn`;
    document.getElementById('centerCash').textContent = `$${player.cash}`;
    document.getElementById('centerPosition').textContent = BOARD_SPACES[player.position].name;
    
    const lastRoll = gameState.dice[0] + gameState.dice[1];
    document.getElementById('centerLastRoll').textContent = lastRoll > 1 ? lastRoll : '-';
}

function addLog(message) {
    const logBox = document.getElementById('gameLogBox');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = message;
    
    logBox.insertBefore(entry, logBox.firstChild);
    
    while (logBox.children.length > 20) {
        logBox.removeChild(logBox.lastChild);
    }
}

// ===== TRADING SYSTEM =====
function openTradeModal() {
    const player = gameState.players[gameState.currentPlayer];
    const modal = document.getElementById('tradeModal');
    const content = document.getElementById('tradeContent');
    
    let html = '';
    
    // Player's own properties
    html += '<div class="section-title">🏠 Your Properties</div>';
    if (player.properties.length > 0) {
        html += '<div class="property-list">';
        player.properties.forEach(propIndex => {
            const space = BOARD_SPACES[propIndex];
            html += `
                <div class="property-trade-item">
                    <div class="property-trade-info">
                        <div class="property-trade-name">${space.emoji} ${space.name}</div>
                        <div class="property-trade-price">Value: $${space.price}</div>
                    </div>
                    <div class="trade-buttons">
                        <button class="trade-btn sell" onclick="openSellModal(${propIndex})">💰 Sell</button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    } else {
        html += '<div class="empty-state"><div class="empty-state-icon">🏚️</div><div>You don\'t own any properties yet</div></div>';
    }
    
    html += '<div class="section-divider"></div>';
    
    // Other players' properties
    html += '<div class="section-title">🛒 Buy from Other Players</div>';
    let hasAvailableProperties = false;
    
    gameState.players.forEach((otherPlayer, index) => {
        if (index === gameState.currentPlayer) return;
        
        if (otherPlayer.properties.length > 0) {
            hasAvailableProperties = true;
            html += `
                <div class="player-properties-section">
                    <div class="player-badge" style="background: ${otherPlayer.color}; color: white;">
                        ${otherPlayer.token} ${otherPlayer.name}
                    </div>
                    <div class="property-list">
            `;
            
            otherPlayer.properties.forEach(propIndex => {
                const space = BOARD_SPACES[propIndex];
                html += `
                    <div class="property-trade-item">
                        <div class="property-trade-info">
                            <div class="property-trade-name">${space.emoji} ${space.name}</div>
                            <div class="property-trade-price">Price: $${space.price}</div>
                        </div>
                        <div class="trade-buttons">
                            <button class="trade-btn buy" onclick="buyFromPlayer(${propIndex}, ${index})">✅ Buy</button>
                            <button class="trade-btn offer" onclick="openOfferModal(${propIndex}, ${index})">📝 Offer</button>
                        </div>
                    </div>
                `;
            });
            
            html += '</div></div>';
        }
    });
    
    if (!hasAvailableProperties) {
        html += '<div class="empty-state"><div class="empty-state-icon">📭</div><div>No properties available from other players</div></div>';
    }
    
    content.innerHTML = html;
    modal.classList.add('active');
}

function closeTradeModal() {
    document.getElementById('tradeModal').classList.remove('active');
}

function openSellModal(propertyIndex) {
    const space = BOARD_SPACES[propertyIndex];
    const modal = document.getElementById('sellModal');
    const content = document.getElementById('sellContent');
    
    const suggestedMin = Math.floor(space.price * 0.5);
    const suggestedMax = Math.floor(space.price * 1.5);
    
    content.innerHTML = `
        <div class="property-trade-item" style="margin-bottom: 20px;">
            <div class="property-trade-info">
                <div class="property-trade-name">${space.emoji} ${space.name}</div>
                <div class="property-trade-price">Original Price: $${space.price}</div>
                <div class="property-trade-price">Buildings: ${space.houses || 0} 🏠</div>
            </div>
        </div>
        
        <div class="price-input-group">
            <label>💵 Set Selling Price:</label>
            <input type="number" class="price-input" id="sellPrice" value="${space.price}" min="${suggestedMin}" max="9999">
            <div class="price-suggestion">Suggested: $${suggestedMin} - $${suggestedMax}</div>
        </div>
        
        <div class="modal-actions">
            <button class="modal-btn secondary" onclick="closeSellModal()">Cancel</button>
            <button class="modal-btn primary" onclick="confirmSell(${propertyIndex})">💰 List for Sale</button>
        </div>
    `;
    
    modal.classList.add('active');
    closeTradeModal();
}

function closeSellModal() {
    document.getElementById('sellModal').classList.remove('active');
}

function confirmSell(propertyIndex) {
    const price = parseInt(document.getElementById('sellPrice').value);
    const space = BOARD_SPACES[propertyIndex];
    const player = gameState.players[gameState.currentPlayer];
    
    if (isNaN(price) || price <= 0) {
        alert('Please enter a valid price!');
        return;
    }
    
    // Create trade offer
    gameState.tradeOffers.push({
        seller: gameState.currentPlayer,
        property: propertyIndex,
        price: price,
        type: 'sale'
    });
    
    addLog(`💰 ${player.name} listed ${space.name} for sale at $${price}`);
    playSound('buy');
    
    closeSellModal();
    openTradeModal();
}

function buyFromPlayer(propertyIndex, ownerIndex) {
    const space = BOARD_SPACES[propertyIndex];
    const buyer = gameState.players[gameState.currentPlayer];
    const seller = gameState.players[ownerIndex];
    
    // Check for existing offer
    const existingOffer = gameState.tradeOffers.find(o => o.property === propertyIndex && o.type === 'sale');
    const price = existingOffer ? existingOffer.price : space.price;
    
    if (buyer.cash < price) {
        alert(`Not enough cash! You need $${price} but only have $${buyer.cash}`);
        return;
    }
    
    if (confirm(`Buy ${space.name} from ${seller.name} for $${price}?`)) {
        // Transfer property
        buyer.cash -= price;
        seller.cash += price;
        
        seller.properties = seller.properties.filter(p => p !== propertyIndex);
        buyer.properties.push(propertyIndex);
        space.owner = gameState.currentPlayer;
        
        // Remove offer if exists
        gameState.tradeOffers = gameState.tradeOffers.filter(o => o.property !== propertyIndex);
        
        playSound('buy');
        addLog(`🤝 ${buyer.name} bought ${space.name} from ${seller.name} for $${price}`);
        
        updateAllDisplays();
        closeTradeModal();
    }
}

function openOfferModal(propertyIndex, ownerIndex) {
    const space = BOARD_SPACES[propertyIndex];
    const owner = gameState.players[ownerIndex];
    const player = gameState.players[gameState.currentPlayer];
    const modal = document.getElementById('offerModal');
    const content = document.getElementById('offerContent');
    
    let myPropsHTML = '<option value="">-- None --</option>';
    player.properties.forEach(propIndex => {
        const prop = BOARD_SPACES[propIndex];
        myPropsHTML += `<option value="${propIndex}">${prop.emoji} ${prop.name} ($${prop.price})</option>`;
    });
    
    content.innerHTML = `
        <div class="property-trade-item" style="margin-bottom: 20px;">
            <div class="property-trade-info">
                <div class="property-trade-name">You want: ${space.emoji} ${space.name}</div>
                <div class="property-trade-price">Owner: ${owner.token} ${owner.name}</div>
                <div class="property-trade-price">Value: $${space.price}</div>
            </div>
        </div>
        
        <div class="section-title">📦 Your Offer</div>
        
        <div class="price-input-group">
            <label>🏠 Property (Optional):</label>
            <select class="price-input" id="offerProperty">${myPropsHTML}</select>
        </div>
        
        <div class="price-input-group">
            <label>💵 Cash Amount:</label>
            <input type="number" class="price-input" id="offerCash" value="0" min="0" max="${player.cash}">
            <div class="price-suggestion">You have: $${player.cash}</div>
        </div>
        
        <div style="background: #F9FAFB; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <strong>Example:</strong> Offer your property + cash for their property
        </div>
        
        <div class="modal-actions">
            <button class="modal-btn secondary" onclick="closeOfferModal()">Cancel</button>
            <button class="modal-btn primary" onclick="sendOffer(${propertyIndex}, ${ownerIndex})">📨 Send Offer</button>
        </div>
    `;
    
    modal.classList.add('active');
    closeTradeModal();
}

function closeOfferModal() {
    document.getElementById('offerModal').classList.remove('active');
}

function sendOffer(propertyIndex, ownerIndex) {
    const offerProp = document.getElementById('offerProperty').value;
    const offerCash = parseInt(document.getElementById('offerCash').value) || 0;
    const buyer = gameState.players[gameState.currentPlayer];
    const seller = gameState.players[ownerIndex];
    const space = BOARD_SPACES[propertyIndex];
    
    if (!offerProp && offerCash === 0) {
        alert('Please offer something!');
        return;
    }
    
    if (offerCash > buyer.cash) {
        alert('Not enough cash!');
        return;
    }
    
    let offerText = '';
    if (offerProp) {
        const propSpace = BOARD_SPACES[parseInt(offerProp)];
        offerText = `${propSpace.name}`;
    }
    if (offerCash > 0) {
        offerText += (offerText ? ' + ' : '') + `$${offerCash}`;
    }
    
    if (confirm(`Offer ${offerText} to ${seller.name} for ${space.name}?`)) {
        gameState.tradeOffers.push({
            buyer: gameState.currentPlayer,
            seller: ownerIndex,
            wantedProperty: propertyIndex,
            offeredProperty: offerProp ? parseInt(offerProp) : null,
            offeredCash: offerCash,
            type: 'offer'
        });
        
        addLog(`📝 ${buyer.name} made an offer to ${seller.name} for ${space.name}`);
        playSound('buy');
        
        closeOfferModal();
        
        // Auto-accept if fair deal (for single player mode)
        setTimeout(() => {
            if (confirm(`${seller.name} received your offer. Accept it automatically?`)) {
                acceptOffer(gameState.tradeOffers.length - 1);
            }
        }, 1000);
    }
}

function acceptOffer(offerIndex) {
    const offer = gameState.tradeOffers[offerIndex];
    if (!offer) return;
    
    const buyer = gameState.players[offer.buyer];
    const seller = gameState.players[offer.seller];
    const wantedSpace = BOARD_SPACES[offer.wantedProperty];
    
    // Transfer cash
    if (offer.offeredCash > 0) {
        buyer.cash -= offer.offeredCash;
        seller.cash += offer.offeredCash;
    }
    
    // Transfer offered property
    if (offer.offeredProperty !== null) {
        const offeredSpace = BOARD_SPACES[offer.offeredProperty];
        buyer.properties = buyer.properties.filter(p => p !== offer.offeredProperty);
        seller.properties.push(offer.offeredProperty);
        offeredSpace.owner = offer.seller;
    }
    
    // Transfer wanted property
    seller.properties = seller.properties.filter(p => p !== offer.wantedProperty);
    buyer.properties.push(offer.wantedProperty);
    wantedSpace.owner = offer.buyer;
    
    addLog(`✅ Trade completed! ${buyer.name} got ${wantedSpace.name}`);
    playSound('buy');
    
    gameState.tradeOffers.splice(offerIndex, 1);
    updateAllDisplays();
}

// ===== INITIALIZATION =====
window.addEventListener('DOMContentLoaded', initSetup);class="property-trade-name">You want: ${space.emoji} ${space.name}</div>
                <div class="property-trade-price">Owner: ${owner.token} ${owner.name}</div>
                <div class="property-trade-price">Value: $${space.price}</div>
            </div>
        </div>
        
        <div class="section-title">📦 Your Offer</div>
        
        <div class="price-input-group">
            <label>🏠 Property (Optional):</label>
            <select class="price-input" id="offerProperty">${myPropsHTML}</select>
        </div>
        
        <div class="price-input-group">
            <label>💵 Cash Amount (MUST BE EVEN):</label>
            <input type="number" class="price-input" id="offerCash" value="0" min="0" max="${player.cash}" step="2">
            <div class="price-suggestion">You have: $${player.cash}</div>
            <div id="validationMessage" style="margin-top: 8px;"></div>
        </div>
        
        <div style="background: #FEF3C7; border: 2px solid #F59E0B; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <strong>⚠️ Important:</strong> Cash amount must be EVEN (e.g., $100, $150, $200)<br>
            <span style="color: #DC2626;">❌ ODD numbers not allowed (e.g., $101, $125)</span>
        </div>
        
        <div class="modal-actions">
            <button class="modal-btn secondary" onclick="closeOfferModal()">Cancel</button>
            <button class="modal-btn primary" id="sendOfferBtn" onclick="sendOffer(${propertyIndex}, ${ownerIndex})">📨 Send Offer</button>
        </div>
    `;
    
    // Add real-time validation
    setTimeout(() => {
        const cashInput = document.getElementById('offerCash');
        const validationMsg = document.getElementById('validationMessage');
        const sendBtn = document.getElementById('sendOfferBtn');
        
        cashInput.addEventListener('input', () => {
            const value = parseInt(cashInput.value) || 0;
            if (value === 0) {
                validationMsg.innerHTML = '';
                sendBtn.disabled = false;
            } else if (value % 2 === 0) {
                validationMsg.innerHTML = '<div class="validation-success">✅ Valid - Even number!</div>';
                sendBtn.disabled = false;
            } else {
                validationMsg.innerHTML = '<div class="validation-error">❌ Invalid - Must be EVEN!</div>';
                sendBtn.disabled = true;
            }
        });
    }, 100);
    
    modal.classList.add('active');
    closeTradeModal();
}

function closeOfferModal() {
    document.getElementById('offerModal').classList.remove('active');
}

function sendOffer(propertyIndex, ownerIndex) {
    const offerProp = document.getElementById('offerProperty').value;
    let offerCash = parseInt(document.getElementById('offerCash').value) || 0;
    
    // Validate even number
    if (offerCash % 2 !== 0) {
        alert('❌ Trade validation failed: Cash amount must be EVEN! (e.g., $100, $150, $200)\n\nYou entered: $' + offerCash + ' (odd number)');
        return;
    }
    const buyer = gameState.players[gameState.currentPlayer];
    const seller = gameState.players[ownerIndex];
    const space = BOARD_SPACES[propertyIndex];
    
    if (!offerProp && offerCash === 0) {
        alert('Please offer something!');
        return;
    }
    
    if (offerCash > buyer.cash) {
        alert('Not enough cash!');
        return;
    }
    
    let offerText = '';
    if (offerProp) {
        const propSpace = BOARD_SPACES[parseInt(offerProp)];
        offerText = `${propSpace.name}`;
    }
    if (offerCash > 0) {
        offerText += (offerText ? ' + ' : '') + `$${offerCash}`;
    }
    
    if (confirm(`Offer ${offerText} to ${seller.name} for ${space.name}?`)) {
        gameState.tradeOffers.push({
            buyer: gameState.currentPlayer,
            seller: ownerIndex,
            wantedProperty: propertyIndex,
            offeredProperty: offerProp ? parseInt(offerProp) : null,
            offeredCash: offerCash,
            type: 'offer'
        });
        
        addLog(`📝 ${buyer.name} made an offer to ${seller.name} for ${space.name}`);
        playSound('buy');
        
        closeOfferModal();
        
        // Auto-accept if fair deal (for single player mode)
        setTimeout(() => {
            if (confirm(`${seller.name} received your offer. Accept it automatically?`)) {
                acceptOffer(gameState.tradeOffers.length - 1);
            }
        }, 1000);
    }
}

function acceptOffer(offerIndex) {
    const offer = gameState.tradeOffers[offerIndex];
    if (!offer) return;
    
    const buyer = gameState.players[offer.buyer];
    const seller = gameState.players[offer.seller];
    const wantedSpace = BOARD_SPACES[offer.wantedProperty];
    
    // Transfer cash
    if (offer.offeredCash > 0) {
        buyer.cash -= offer.offeredCash;
        seller.cash += offer.offeredCash;
    }
    
    // Transfer offered property
    if (offer.offeredProperty !== null) {
        const offeredSpace = BOARD_SPACES[offer.offeredProperty];
        buyer.properties = buyer.properties.filter(p => p !== offer.offeredProperty);
        seller.properties.push(offer.offeredProperty);
        offeredSpace.owner = offer.seller;
    }
    
    // Transfer wanted property
    seller.properties = seller.properties.filter(p => p !== offer.wantedProperty);
    buyer.properties.push(offer.wantedProperty);
    wantedSpace.owner = offer.buyer;
    
    addLog(`✅ Trade completed! ${buyer.name} got ${wantedSpace.name}`);
    playSound('buy');
    
    gameState.tradeOffers.splice(offerIndex, 1);
    updateAllDisplays();
}

// ===== AI SYSTEM =====
function aiTakeTurn() {
    if (gameState.aiThinking) return;
    
    const player = gameState.players[gameState.currentPlayer];
    if (!player.isAI) return;
    
    gameState.aiThinking = true;
    document.getElementById('rollDiceMainBtn').disabled = true;
    document.getElementById('statusMessage').textContent = `${player.name} is thinking...`;
    
    setTimeout(() => {
        rollDice();
    }, 1000 + Math.random() * 1000);
}

function aiDecideBuy(spaceIndex) {
    const player = gameState.players[gameState.currentPlayer];
    const space = BOARD_SPACES[spaceIndex];
    const difficulty = gameState.settings.aiDifficulty;
    
    let shouldBuy = false;
    
    if (difficulty === 'easy') {
        // Random decision
        shouldBuy = Math.random() > 0.5;
    } else if (difficulty === 'medium') {
        // Strategic: buy if affordable and good value
        const affordability = player.cash / space.price;
        shouldBuy = affordability > 3 && space.price < 250;
    } else if (difficulty === 'hard') {
        // Very strategic: consider color groups and position
        const affordability = player.cash / space.price;
        const hasColorMatch = player.properties.some(p => BOARD_SPACES[p].color === space.color);
        shouldBuy = affordability > 2.5 && (space.price < 300 || hasColorMatch);
    }
    
    setTimeout(() => {
        if (shouldBuy && player.cash >= space.price) {
            buyProperty(spaceIndex);
        } else {
            skipProperty();
        }
        gameState.aiThinking = false;
    }, 800);
}

// ===== SAVE/LOAD SYSTEM =====
function openSaveModal() {
    const modal = document.getElementById('saveModal');
    const content = document.getElementById('saveContent');
    
    const playtime = Math.floor((Date.now() - gameState.gameStartTime) / 1000);
    const minutes = Math.floor(playtime / 60);
    
    let html = `
        <div style="background: var(--color-bg); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: var(--color-primary);">Current Game Status</h3>
            <div class="detail-row"><span>Players:</span><span>${gameState.players.length} (${gameState.humanCount} Human, ${gameState.aiPlayers.length} AI)</span></div>
            <div class="detail-row"><span>Turn:</span><span>${gameState.players[gameState.currentPlayer].name} (Round ${Math.floor(gameState.turnCount / gameState.players.length) + 1})</span></div>
            <div class="detail-row"><span>Playtime:</span><span>${minutes} minutes</span></div>
        </div>
        
        <h4 style="margin: 0 0 15px 0;">Choose Save Slot:</h4>
        <div style="display: flex; flex-direction: column; gap: 10px;">
    `;
    
    for (let i = 1; i <= 5; i++) {
        const saved = getSavedGame(i);
        if (saved) {
            const date = new Date(saved.timestamp);
            html += `
                <button class="trade-btn offer" onclick="saveGameToSlot(${i})" style="width: 100%; padding: 15px; text-align: left;">
                    <div><strong>Slot ${i}:</strong> ${saved.saveName}</div>
                    <div style="font-size: 12px; opacity: 0.8;">${date.toLocaleString()} | ${saved.minutes} min</div>
                </button>
            `;
        } else {
            html += `
                <button class="trade-btn buy" onclick="saveGameToSlot(${i})" style="width: 100%; padding: 15px;">
                    Slot ${i}: Empty
                </button>
            `;
        }
    }
    
    html += `
        </div>
        <div class="modal-actions" style="margin-top: 20px;">
            <button class="modal-btn secondary" onclick="closeSaveModal()">Cancel</button>
        </div>
    `;
    
    content.innerHTML = html;
    modal.classList.add('active');
}

function closeSaveModal() {
    document.getElementById('saveModal').classList.remove('active');
}

function saveGameToSlot(slot) {
    const playtime = Math.floor((Date.now() - gameState.gameStartTime) / 1000);
    const saveData = {
        slot: slot,
        saveName: `Game ${slot}`,
        timestamp: Date.now(),
        minutes: Math.floor(playtime / 60),
        gameState: JSON.parse(JSON.stringify(gameState)),
        boardState: JSON.parse(JSON.stringify(BOARD_SPACES))
    };
    
    // Save to in-memory storage
    if (!window.monopolySaves) window.monopolySaves = {};
    window.monopolySaves[`slot${slot}`] = saveData;
    
    addLog(`💾 Game saved to Slot ${slot}!`);
    playSound('buy');
    closeSaveModal();
    alert(`Game saved successfully to Slot ${slot}!`);
}

function getSavedGame(slot) {
    if (!window.monopolySaves) return null;
    return window.monopolySaves[`slot${slot}`] || null;
}

function openLoadModal() {
    const modal = document.getElementById('loadModal');
    const content = document.getElementById('loadContent');
    
    let html = '<h4 style="margin: 0 0 15px 0;">Saved Games:</h4>';
    html += '<div style="display: flex; flex-direction: column; gap: 12px;">';
    
    let hasSaves = false;
    for (let i = 1; i <= 5; i++) {
        const saved = getSavedGame(i);
        if (saved) {
            hasSaves = true;
            const date = new Date(saved.timestamp);
            html += `
                <div style="background: var(--color-bg); padding: 15px; border-radius: 12px; border: 2px solid var(--color-border);">
                    <div style="font-weight: bold; margin-bottom: 8px;">Slot ${i}: ${saved.saveName}</div>
                    <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 10px;">
                        ${date.toLocaleString()} | ${saved.minutes} min played
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button class="trade-btn buy" onclick="loadGameFromSlot(${i})" style="flex: 1;">Load</button>
                        <button class="trade-btn sell" onclick="deleteSaveSlot(${i})" style="flex: 1;">Delete</button>
                    </div>
                </div>
            `;
        } else {
            html += `
                <div style="background: var(--color-bg); padding: 15px; border-radius: 12px; border: 2px dashed var(--color-border); opacity: 0.5;">
                    <div>Slot ${i}: (Empty)</div>
                </div>
            `;
        }
    }
    
    html += '</div>';
    
    if (!hasSaves) {
        html = '<div class="empty-state"><div class="empty-state-icon">📂</div><div>No saved games found</div></div>';
    }
    
    html += '<div class="modal-actions" style="margin-top: 20px;"><button class="modal-btn secondary" onclick="closeLoadModal()">Cancel</button></div>';
    
    content.innerHTML = html;
    modal.classList.add('active');
}

function closeLoadModal() {
    document.getElementById('loadModal').classList.remove('active');
}

function loadGameFromSlot(slot) {
    const saved = getSavedGame(slot);
    if (!saved) return;
    
    if (confirm(`Load game from Slot ${slot}? Current game will be lost.`)) {
        gameState = saved.gameState;
        
        // Restore board state
        saved.boardState.forEach((space, i) => {
            BOARD_SPACES[i].owner = space.owner;
            BOARD_SPACES[i].houses = space.houses || 0;
        });
        
        closeLoadModal();
        updateAllDisplays();
        updateCurrentTurn();
        addLog(`📂 Game loaded from Slot ${slot}!`);
        playSound('buy');
        
        // Resume AI turn if needed
        const player = gameState.players[gameState.currentPlayer];
        if (player.isAI && gameState.canRoll) {
            setTimeout(() => aiTakeTurn(), 1000);
        }
    }
}

function deleteSaveSlot(slot) {
    if (confirm(`Delete save from Slot ${slot}?`)) {
        if (!window.monopolySaves) window.monopolySaves = {};
        delete window.monopolySaves[`slot${slot}`];
        openLoadModal();
    }
}

// ===== SETTINGS MODAL =====
function openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    const content = document.getElementById('settingsContent');
    
    const settings = gameState.settings;
    
    content.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
                <h4 style="color: var(--color-primary); margin: 0 0 12px 0;">🎮 Game Settings</h4>
                <div class="checkbox-group">
                    <input type="checkbox" id="settingShowValues" ${settings.showPropertyValues ? 'checked' : ''}>
                    <label for="settingShowValues">Show Property Values on Board</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="settingShowRents" ${settings.showRentAmounts ? 'checked' : ''}>
                    <label for="settingShowRents">Show Rent Amounts</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="settingConfirmSell" ${settings.confirmBeforeSelling ? 'checked' : ''}>
                    <label for="settingConfirmSell">Confirm Before Selling</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="settingConfirmTrade" ${settings.confirmBeforeTrading ? 'checked' : ''}>
                    <label for="settingConfirmTrade">Confirm Before Trading</label>
                </div>
            </div>
            
            <div>
                <h4 style="color: var(--color-primary); margin: 0 0 12px 0;">🔊 Audio Settings</h4>
                <div class="checkbox-group">
                    <input type="checkbox" id="settingBgMusic" ${settings.bgMusic ? 'checked' : ''}>
                    <label for="settingBgMusic">🎵 Background Music</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="settingSoundFx" ${settings.soundEffects ? 'checked' : ''}>
                    <label for="settingSoundFx">🔊 Sound Effects</label>
                </div>
                <div class="volume-control">
                    <label>🔊 Volume:</label>
                    <input type="range" class="volume-slider" id="settingVolume" min="0" max="100" value="${settings.volume * 100}">
                    <span class="volume-value" id="settingVolumeValue">${Math.floor(settings.volume * 100)}%</span>
                </div>
            </div>
            
            <div>
                <h4 style="color: var(--color-primary); margin: 0 0 12px 0;">🎨 Appearance</h4>
                <div style="margin-bottom: 10px;">Theme:</div>
                <select class="price-input" id="settingTheme">
                    <option value="royal">👑 Royal Blue</option>
                    <option value="forest">🌲 Forest Green</option>
                    <option value="sunset">🌅 Sunset Orange</option>
                    <option value="midnight">🌙 Midnight Purple</option>
                    <option value="ocean">🌊 Ocean Teal</option>
                    <option value="sakura">🌸 Sakura Pink</option>
                    <option value="cyber">🔮 Cyber Neon</option>
                    <option value="classic">🎲 Classic</option>
                </select>
            </div>
            
            <div>
                <h4 style="color: var(--color-primary); margin: 0 0 12px 0;">🤖 AI Settings</h4>
                <div style="margin-bottom: 10px;">Difficulty:</div>
                <div style="display: flex; gap: 8px;">
                    <button class="trade-btn ${settings.aiDifficulty === 'easy' ? 'offer' : 'buy'}" onclick="updateAIDifficulty('easy')" style="flex: 1;">😊 Easy</button>
                    <button class="trade-btn ${settings.aiDifficulty === 'medium' ? 'offer' : 'buy'}" onclick="updateAIDifficulty('medium')" style="flex: 1;">🎯 Medium</button>
                    <button class="trade-btn ${settings.aiDifficulty === 'hard' ? 'offer' : 'buy'}" onclick="updateAIDifficulty('hard')" style="flex: 1;">🔥 Hard</button>
                </div>
            </div>
        </div>
        
        <div class="modal-actions" style="margin-top: 20px;">
            <button class="modal-btn secondary" onclick="closeSettingsModal()">Cancel</button>
            <button class="modal-btn primary" onclick="applySettings()">✅ Apply</button>
        </div>
    `;
    
    // Set theme value
    document.getElementById('settingTheme').value = settings.theme;
    
    // Volume slider listener
    document.getElementById('settingVolume').addEventListener('input', (e) => {
        document.getElementById('settingVolumeValue').textContent = e.target.value + '%';
    });
    
    modal.classList.add('active');
}

function closeSettingsModal() {
    document.getElementById('settingsModal').classList.remove('active');
}

function updateAIDifficulty(difficulty) {
    gameState.settings.aiDifficulty = difficulty;
    openSettingsModal();
}

function applySettings() {
    const settings = gameState.settings;
    
    settings.showPropertyValues = document.getElementById('settingShowValues').checked;
    settings.showRentAmounts = document.getElementById('settingShowRents').checked;
    settings.confirmBeforeSelling = document.getElementById('settingConfirmSell').checked;
    settings.confirmBeforeTrading = document.getElementById('settingConfirmTrade').checked;
    settings.bgMusic = document.getElementById('settingBgMusic').checked;
    settings.soundEffects = document.getElementById('settingSoundFx').checked;
    settings.volume = parseInt(document.getElementById('settingVolume').value) / 100;
    settings.theme = document.getElementById('settingTheme').value;
    
    // Apply theme
    document.body.setAttribute('data-theme', settings.theme);
    document.getElementById('themeSelect').value = settings.theme;
    
    // Apply music
    if (settings.bgMusic) {
        startMusic();
    } else {
        stopMusic();
    }
    
    // Update AI names if difficulty changed
    gameState.players.forEach((player, i) => {
        if (player.isAI) {
            player.name = `AI ${gameState.aiPlayers.indexOf(i) + 1} (${settings.aiDifficulty})`;
        }
    });
    
    updateAllDisplays();
    closeSettingsModal();
    addLog('⚙️ Settings applied!');
}

// ===== STATE INFO MODAL =====
function showSpaceInfoModal(index) {
    const space = BOARD_SPACES[index];
    const modal = document.getElementById('stateInfoModal');
    const content = document.getElementById('stateInfoContent');
    
    document.getElementById('stateInfoTitle').textContent = `${space.emoji} ${space.name}`;
    
    let html = '';
    
    if (space.type === 'property') {
        const owner = space.owner >= 0 ? gameState.players[space.owner].name : 'Available';
        const ownerColor = space.owner >= 0 ? gameState.players[space.owner].color : '#6B7280';
        
        html = `
            <div style="background: var(--color-bg); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                <h4 style="color: var(--color-primary); margin: 0 0 15px 0;">📍 Location Info</h4>
                <div class="detail-row"><span>Region:</span><span>${space.region || 'India'}</span></div>
                <div class="detail-row"><span>Capital:</span><span>${space.capital || 'N/A'}</span></div>
                <div class="detail-row"><span>Type:</span><span>Property</span></div>
            </div>
            
            <div style="background: var(--color-bg); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                <h4 style="color: var(--color-primary); margin: 0 0 15px 0;">🎮 Monopoly Details</h4>
                <div class="detail-row"><span>Purchase Price:</span><span style="font-weight: bold; color: var(--color-primary);">$${space.price}</span></div>
                <div class="detail-row"><span>Owner:</span><span style="color: ${ownerColor}; font-weight: bold;">${owner}</span></div>
                <div class="detail-row"><span>Buildings:</span><span>${space.houses || 0} 🏠</span></div>
                <div class="detail-row"><span>Current Rent:</span><span>$${space.houses > 0 ? space.rentWithHouses[(space.houses || 1) - 1] : space.rent}</span></div>
            </div>
            
            <div style="background: var(--color-bg); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                <h4 style="color: var(--color-primary); margin: 0 0 15px 0;">💰 Rent Breakdown</h4>
                <div class="detail-row"><span>Unbuilt:</span><span>$${space.rent}</span></div>
                <div class="detail-row"><span>1 House:</span><span>$${space.rentWithHouses[0]}</span></div>
                <div class="detail-row"><span>2 Houses:</span><span>$${space.rentWithHouses[1]}</span></div>
                <div class="detail-row"><span>3 Houses:</span><span>$${space.rentWithHouses[2]}</span></div>
                <div class="detail-row"><span>4 Houses:</span><span>$${space.rentWithHouses[3]}</span></div>
                <div class="detail-row"><span>Hotel:</span><span>$${space.rentWithHouses[4]}</span></div>
            </div>
            
            <div style="background: var(--color-bg); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                <h4 style="color: var(--color-primary); margin: 0 0 15px 0;">🏗️ Building Info</h4>
                <div class="detail-row"><span>House Cost:</span><span>$${space.houseCost}</span></div>
                <div class="detail-row"><span>Hotel Cost:</span><span>$${space.houseCost * 4}</span></div>
            </div>
            
            <div style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); color: white; padding: 15px; border-radius: 12px;">
                <h4 style="margin: 0 0 10px 0;">💡 Strategy Tip</h4>
                <p style="margin: 0; line-height: 1.6; font-size: 14px;">
                    Own all properties of the same color to build houses and increase rent significantly!
                    ${space.region === 'South' ? ' Southern states are valuable!' : ''}
                    ${space.price < 150 ? ' Affordable starter property!' : ' Premium property with high returns!'}
                </p>
            </div>
        `;
    } else if (space.type === 'railroad') {
        const owner = space.owner >= 0 ? gameState.players[space.owner].name : 'Available';
        html = `
            <div style="background: var(--color-bg); padding: 20px; border-radius: 12px;">
                <h4 style="color: var(--color-primary); margin: 0 0 15px 0;">🚂 Railroad Details</h4>
                <div class="detail-row"><span>Type:</span><span>Railroad</span></div>
                <div class="detail-row"><span>Price:</span><span>$${space.price}</span></div>
                <div class="detail-row"><span>Base Rent:</span><span>$${space.rent}</span></div>
                <div class="detail-row"><span>Owner:</span><span>${owner}</span></div>
                <div style="margin-top: 15px; padding: 12px; background: white; border-radius: 8px;">
                    <strong>💡 Tip:</strong> Rent doubles with each additional railroad owned!
                </div>
            </div>
        `;
    } else {
        html = `
            <div style="background: var(--color-bg); padding: 20px; border-radius: 12px; text-align: center;">
                <div style="font-size: 48px; margin-bottom: 15px;">${space.emoji}</div>
                <h4 style="color: var(--color-primary); margin: 0 0 10px 0;">${space.name}</h4>
                <p style="color: var(--color-text-secondary);">Special space</p>
            </div>
        `;
    }
    
    content.innerHTML = html;
    modal.classList.add('active');
}

function closeStateInfoModal() {
    document.getElementById('stateInfoModal').classList.remove('active');
}

// ===== INITIALIZATION =====
window.addEventListener('DOMContentLoaded', initSetup);