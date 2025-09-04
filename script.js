// 游戏词汇数据
const vocabularyData = {
    level1: [
        { 
            english: 'passport', 
            chinese: '护照',
            example: 'Please show your passport at the immigration counter.',
            translation: '请在移民柜台出示您的护照。',
            color: '#FF6B6B'
        },
        { 
            english: 'visa', 
            chinese: '签证',
            example: 'Do you have a valid visa for this country?',
            translation: '您有这个国家的有效签证吗？',
            color: '#4ECDC4'
        },
        { 
            english: 'customs', 
            chinese: '海关',
            example: 'All luggage must go through customs inspection.',
            translation: '所有行李都必须通过海关检查。',
            color: '#45B7D1'
        },
        { 
            english: 'officer', 
            chinese: '工作人员/官员',
            example: 'The customs officer asked me several questions.',
            translation: '海关官员问了我几个问题。',
            color: '#96CEB4'
        },
        { 
            english: 'luggage', 
            chinese: '行李',
            example: 'Please collect your luggage from the carousel.',
            translation: '请从传送带上取走您的行李。',
            color: '#FFEAA7'
        },
        { 
            english: 'declare', 
            chinese: '申报',
            example: 'You must declare any items over $10,000.',
            translation: '您必须申报任何超过10,000美元的物品。',
            color: '#DDA0DD'
        }
    ],
    level2: [
        { 
            english: 'form', 
            chinese: '表格',
            example: 'Please fill out this customs declaration form.',
            translation: '请填写这份海关申报表格。',
            color: '#FF8C42'
        },
        { 
            english: 'stamp', 
            chinese: '盖章/戳记',
            example: 'The officer put a stamp on my passport.',
            translation: '官员在我的护照上盖了章。',
            color: '#A8E6CF'
        },
        { 
            english: 'entry', 
            chinese: '入境',
            example: 'Entry to this country requires a valid visa.',
            translation: '进入这个国家需要有效签证。',
            color: '#FFB3BA'
        },
        { 
            english: 'exit', 
            chinese: '出境',
            example: 'Please proceed to the exit gate.',
            translation: '请前往出境口。',
            color: '#B8E6B8'
        },
        { 
            english: 'suitcase', 
            chinese: '手提箱/行李箱',
            example: 'My suitcase was opened for inspection.',
            translation: '我的行李箱被打开检查了。',
            color: '#FFD93D'
        },
        { 
            english: 'queue', 
            chinese: '排队',
            example: 'There was a long queue at the customs counter.',
            translation: '海关柜台排了很长的队。',
            color: '#6C5CE7'
        },
        { 
            english: 'scan', 
            chinese: '扫描',
            example: 'All bags will be scanned for security.',
            translation: '所有行李都将进行安全扫描。',
            color: '#FD79A8'
        },
        { 
            english: 'address', 
            chinese: '地址',
            example: 'Please provide your local address in the form.',
            translation: '请在表格中提供您的当地地址。',
            color: '#00B894'
        },
        { 
            english: 'stay', 
            chinese: '停留/逗留',
            example: 'How long will you stay in this country?',
            translation: '您将在这个国家停留多长时间？',
            color: '#FDCB6E'
        },
        { 
            english: 'purpose', 
            chinese: '目的',
            example: 'What is the purpose of your visit?',
            translation: '您访问的目的是什么？',
            color: '#E17055'
        }
    ],
    level3: [
        { 
            english: 'duty', 
            chinese: '关税',
            example: 'You may need to pay duty on expensive items.',
            translation: '您可能需要为贵重物品支付关税。',
            color: '#74B9FF'
        },
        { 
            english: 'tax', 
            chinese: '税',
            example: 'Sales tax is included in the price.',
            translation: '销售税已包含在价格中。',
            color: '#A29BFE'
        },
        { 
            english: 'value', 
            chinese: '价值/申报价值',
            example: 'Please declare the value of your goods.',
            translation: '请申报您货物的价值。',
            color: '#FD79A8'
        },
        { 
            english: 'cash', 
            chinese: '现金',
            example: 'Do you have more than $10,000 in cash?',
            translation: '您携带的现金超过10,000美元吗？',
            color: '#00B894'
        },
        { 
            english: 'currency', 
            chinese: '货币',
            example: 'What currency do you accept here?',
            translation: '这里接受什么货币？',
            color: '#FDCB6E'
        },
        { 
            english: 'alcohol', 
            chinese: '酒精饮品',
            example: 'Alcohol is restricted for passengers under 21.',
            translation: '21岁以下乘客限制携带酒精饮品。',
            color: '#E17055'
        },
        { 
            english: 'tobacco', 
            chinese: '烟草',
            example: 'Tobacco products must be declared.',
            translation: '烟草产品必须申报。',
            color: '#636E72'
        },
        { 
            english: 'medicine', 
            chinese: '药品',
            example: 'Do you have any prescription medicine?',
            translation: '您有处方药吗？',
            color: '#00CEC9'
        },
        { 
            english: 'food', 
            chinese: '食品',
            example: 'Some food items are not allowed.',
            translation: '某些食品是不允许的。',
            color: '#FF7675'
        },
        { 
            english: 'plant', 
            chinese: '植物',
            example: 'Plants may require special permits.',
            translation: '植物可能需要特殊许可证。',
            color: '#55A3FF'
        },
        { 
            english: 'animal', 
            chinese: '动物',
            example: 'Animals need health certificates.',
            translation: '动物需要健康证明。',
            color: '#FFA502'
        },
        { 
            english: 'quarantine', 
            chinese: '检疫/隔离',
            example: 'Some items may be held for quarantine.',
            translation: '某些物品可能被扣留检疫。',
            color: '#2ED573'
        },
        { 
            english: 'inspection', 
            chinese: '检查',
            example: 'Your luggage will undergo inspection.',
            translation: '您的行李将接受检查。',
            color: '#FF6348'
        },
        { 
            english: 'receipt', 
            chinese: '收据',
            example: 'Keep your receipt for customs clearance.',
            translation: '保留收据以便清关。',
            color: '#FFA726'
        }
    ]
};

// 游戏状态
let gameState = {
    currentLevel: 1,
    score: 0,
    board: [],
    boardSize: 7,
    selectedTile: null,
    gameStarted: false,
    gameTimer: null,
    startTime: null,
    moves: 0,
    targetScore: 0,
    isDragging: false,
    dragStartTile: null,
    wordPracticeCount: {} // 记录每个单词的练习次数
};

// DOM 元素
const gameBoard = document.getElementById('game-board');
const startBtn = document.getElementById('start-btn');
const reshuffleBtn = document.getElementById('reshuffle-btn');
const nextLevelBtn = document.getElementById('next-level-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const currentLevelElement = document.getElementById('current-level');
const vocabCountElement = document.getElementById('vocab-count');
const vocabDisplay = document.getElementById('vocab-display');
const gameOverModal = document.getElementById('game-over-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalNextBtn = document.getElementById('modal-next-btn');
const modalRestartBtn = document.getElementById('modal-restart-btn');

// 事件监听器
startBtn.addEventListener('click', startGame);
reshuffleBtn.addEventListener('click', reshuffleBoard);
nextLevelBtn.addEventListener('click', nextLevel);
restartBtn.addEventListener('click', restartGame);
modalNextBtn.addEventListener('click', nextLevel);
modalRestartBtn.addEventListener('click', restartGame);

// 初始化游戏
function initGame() {
    updateDisplay();
    createVocabularyDisplay();
}

// 开始游戏
function startGame() {
    gameState.gameStarted = true;
    gameState.startTime = Date.now();
    gameState.score = 0;
    gameState.moves = 0;
    startBtn.style.display = 'none';
    reshuffleBtn.style.display = 'inline-block';
    startTimer();
    createGameBoard();
    updateDisplay();
}

// 创建游戏板
function createGameBoard() {
    gameBoard.innerHTML = '';
    // 使用与CSS变量一致的列宽，避免在小屏幕被拉伸
    gameBoard.style.gridTemplateColumns = `repeat(${gameState.boardSize}, var(--tile-size))`;
    
    const currentVocab = getCurrentVocabulary();
    gameState.board = [];
    
    // 初始化单词练习次数
    currentVocab.forEach(vocab => {
        gameState.wordPracticeCount[vocab.english] = 0;
    });
    
    // 使用均衡分配策略创建游戏板
    createBalancedBoard(currentVocab);
    
    // 确保初始布局没有可消除的组合
    ensureNoInitialMatches();
    
    // 设置目标分数 - 平衡难度
    const levelMultiplier = gameState.currentLevel === 1 ? 50 : gameState.currentLevel === 2 ? 35 : 30;
    gameState.targetScore = currentVocab.length * levelMultiplier;
}

// 创建均衡分配的游戏板
function createBalancedBoard(vocabulary) {
    const totalTiles = gameState.boardSize * gameState.boardSize;
    const vocabCount = vocabulary.length;
    
    // 计算每个单词应该出现的次数（向下取整）
    const baseCount = Math.floor(totalTiles / vocabCount);
    const remainder = totalTiles % vocabCount;
    
    // 创建单词池，确保每个单词至少出现baseCount次
    let wordPool = [];
    vocabulary.forEach(vocab => {
        for (let i = 0; i < baseCount; i++) {
            wordPool.push(vocab);
        }
    });
    
    // 随机分配剩余的瓦片
    for (let i = 0; i < remainder; i++) {
        const randomVocab = vocabulary[Math.floor(Math.random() * vocabCount)];
        wordPool.push(randomVocab);
    }
    
    // 使用智能布局策略，避免初始匹配
    const smartLayout = createSmartLayout(wordPool, vocabulary);
    
    // 创建游戏板
    let poolIndex = 0;
    for (let row = 0; row < gameState.boardSize; row++) {
        gameState.board[row] = [];
        for (let col = 0; col < gameState.boardSize; col++) {
            const vocab = smartLayout[row][col];
            const tile = createTile(vocab, row, col);
            gameState.board[row][col] = tile;
            gameBoard.appendChild(tile);
        }
    }
}

// 创建智能布局，避免初始匹配
function createSmartLayout(wordPool, vocabulary) {
    const layout = [];
    const vocabCount = vocabulary.length;
    
    // 初始化布局数组
    for (let row = 0; row < gameState.boardSize; row++) {
        layout[row] = [];
        for (let col = 0; col < gameState.boardSize; col++) {
            layout[row][col] = null;
        }
    }
    
    // 使用策略填充，避免相邻相同
    for (let row = 0; row < gameState.boardSize; row++) {
        for (let col = 0; col < gameState.boardSize; col++) {
            const availableWords = getAvailableWords(layout, row, col, vocabulary);
            const selectedWord = availableWords[Math.floor(Math.random() * availableWords.length)];
            layout[row][col] = selectedWord;
        }
    }
    
    return layout;
}

// 获取在指定位置可用的词汇
function getAvailableWords(layout, row, col, vocabulary) {
    const usedWords = new Set();
    
    // 检查上方
    if (row > 0 && layout[row-1][col]) {
        usedWords.add(layout[row-1][col].english);
    }
    
    // 检查下方
    if (row < gameState.boardSize - 1 && layout[row+1][col]) {
        usedWords.add(layout[row+1][col].english);
    }
    
    // 检查左侧
    if (col > 0 && layout[row][col-1]) {
        usedWords.add(layout[row][col-1].english);
    }
    
    // 检查右侧
    if (col < gameState.boardSize - 1 && layout[row][col+1]) {
        usedWords.add(layout[row][col+1].english);
    }
    
    // 返回不在相邻位置使用的词汇
    return vocabulary.filter(vocab => !usedWords.has(vocab.english));
}

// 更新瓦片的唯一标识
function updateTileIds() {
    for (let row = 0; row < gameState.boardSize; row++) {
        for (let col = 0; col < gameState.boardSize; col++) {
            const tile = gameState.board[row][col];
            tile.dataset.tileId = `${row}-${col}`;
        }
    }
}

// 调整字体大小以适应单词长度
function adjustFontSize(tile) {
    // 根据屏幕大小动态调整最大宽度
    const isMobile = window.innerWidth <= 768;
    const tileSize = isMobile ? 12 : 70; // 获取瓦片实际大小
    const maxWidth = isMobile ? tileSize * 0.8 : 60; // 手机端使用瓦片大小的80%
    const defaultFontSize = isMobile ? 0.6 : 0.9; // 手机端默认字体更小
    const minFontSize = 0.4; // 最小字体大小（rem）
    
    // 先设置为默认字体大小
    tile.style.fontSize = defaultFontSize + 'rem';
    
    // 等待一帧确保字体已应用
    requestAnimationFrame(() => {
        // 检查单词是否超出边界
        if (tile.scrollWidth > maxWidth) {
            // 只有超出边界时才调整字体大小
            let fontSize = defaultFontSize;
            while (tile.scrollWidth > maxWidth && fontSize > minFontSize) {
                fontSize -= 0.05;
                tile.style.fontSize = fontSize + 'rem';
            }
        }
    });
    
    // 标记字体大小已经调整过，防止后续再调整
    tile.dataset.fontAdjusted = 'true';
}

// 显示移动提示
function showMoveHint() {
    // 创建提示元素
    const hint = document.createElement('div');
    hint.className = 'move-hint';
    hint.textContent = '这次移动没有产生消除，请尝试其他组合';
    hint.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 107, 107, 0.9);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 1.1rem;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(hint);
    
    // 2秒后自动消失
    setTimeout(() => {
        if (hint.parentElement) {
            hint.remove();
        }
    }, 2000);
}

// 显示重新打乱提示
function showReshuffleHint() {
    // 创建提示元素
    const hint = document.createElement('div');
    hint.className = 'reshuffle-hint';
    hint.textContent = '游戏板已重新打乱！';
    hint.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 167, 38, 0.9);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 1.1rem;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(hint);
    
    // 2秒后自动消失
    setTimeout(() => {
        if (hint.parentElement) {
            hint.remove();
        }
    }, 2000);
}

// 确保初始布局没有可消除的组合
function ensureNoInitialMatches() {
    let attempts = 0;
    const maxAttempts = 100;
    
    while (findMatches().length > 0 && attempts < maxAttempts) {
        attempts++;
        // 重新随机分配词汇
        const currentVocab = getCurrentVocabulary();
        
        for (let row = 0; row < gameState.boardSize; row++) {
            for (let col = 0; col < gameState.boardSize; col++) {
                const randomVocab = currentVocab[Math.floor(Math.random() * currentVocab.length)];
                const tile = gameState.board[row][col];
                
                tile.textContent = randomVocab.english;
                tile.dataset.word = randomVocab.english;
                tile.dataset.chinese = randomVocab.chinese;
                tile.dataset.example = randomVocab.example;
                tile.dataset.translation = randomVocab.translation;
                tile.style.backgroundColor = randomVocab.color;
                
                // 更新游戏板数组中的瓦片数据
                gameState.board[row][col] = tile;
            }
        }
        
        // 如果尝试次数过多，强制重新创建游戏板
        if (attempts > 50) {
            console.log('重新创建游戏板以避免初始匹配');
            createBalancedBoard(currentVocab);
            attempts = 0;
        }
    }
    
    if (attempts >= maxAttempts) {
        console.log('警告：无法完全避免初始匹配，但游戏可以继续');
    }
}

// 创建瓦片
function createTile(vocab, row, col) {
    const tile = document.createElement('div');
    tile.className = 'tile fade-in';
    tile.textContent = vocab.english;
    tile.dataset.word = vocab.english;
    tile.dataset.chinese = vocab.chinese;
    tile.dataset.example = vocab.example;
    tile.dataset.translation = vocab.translation;
    tile.dataset.row = row;
    tile.dataset.col = col;
    tile.dataset.tileId = `${row}-${col}`; // 添加唯一标识
    
    // 设置瓦片颜色
    tile.style.backgroundColor = vocab.color;
    
    // 调整字体大小以适应单词长度
    adjustFontSize(tile);
    
    // 添加触摸和鼠标事件
    tile.addEventListener('mousedown', (e) => handleTileMouseDown(e, tile));
    tile.addEventListener('touchstart', (e) => handleTileTouchStart(e, tile));
    
    return tile;
}

// 处理鼠标按下事件
function handleTileMouseDown(e, tile) {
    if (!gameState.gameStarted) return;
    
    e.preventDefault();
    gameState.isDragging = true;
    gameState.dragStartTile = tile;
    tile.classList.add('dragging');
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

// 处理触摸开始事件
function handleTileTouchStart(e, tile) {
    if (!gameState.gameStarted) return;
    
    e.preventDefault();
    gameState.isDragging = true;
    gameState.dragStartTile = tile;
    tile.classList.add('dragging');
    
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
}

// 处理鼠标移动
function handleMouseMove(e) {
    if (!gameState.isDragging) return;
    
    const targetTile = getTileFromPoint(e.clientX, e.clientY);
    if (targetTile && targetTile !== gameState.dragStartTile) {
        highlightAdjacentTile(targetTile);
    }
}

// 处理触摸移动
function handleTouchMove(e) {
    if (!gameState.isDragging) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const targetTile = getTileFromPoint(touch.clientX, touch.clientY);
    if (targetTile && targetTile !== gameState.dragStartTile) {
        highlightAdjacentTile(targetTile);
    }
}

// 处理鼠标释放
function handleMouseUp(e) {
    if (!gameState.isDragging) return;
    
    const targetTile = getTileFromPoint(e.clientX, e.clientY);
    handleTileSwap(targetTile);
    
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}

// 处理触摸结束
function handleTouchEnd(e) {
    if (!gameState.isDragging) return;
    
    const touch = e.changedTouches[0];
    const targetTile = getTileFromPoint(touch.clientX, touch.clientY);
    handleTileSwap(targetTile);
    
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
}

// 从坐标获取瓦片
function getTileFromPoint(x, y) {
    const element = document.elementFromPoint(x, y);
    if (element && element.classList.contains('tile')) {
        return element;
    }
    return null;
}

// 高亮相邻瓦片
function highlightAdjacentTile(tile) {
    // 清除之前的高亮
    document.querySelectorAll('.tile.highlight').forEach(t => t.classList.remove('highlight'));
    
    if (isAdjacent(gameState.dragStartTile, tile)) {
        tile.classList.add('highlight');
    }
}

// 处理瓦片交换
function handleTileSwap(targetTile) {
    if (!gameState.isDragging || !gameState.dragStartTile) return;
    
    gameState.isDragging = false;
    gameState.dragStartTile.classList.remove('dragging');
    
    // 清除所有高亮
    document.querySelectorAll('.tile.highlight').forEach(t => t.classList.remove('highlight'));
    
    if (targetTile && isAdjacent(gameState.dragStartTile, targetTile)) {
        // 交换瓦片
        swapTiles(gameState.dragStartTile, targetTile);
        gameState.moves++;
        
        // 更新瓦片的唯一标识（因为位置变了）
        updateTileIds();
        
        // 检查是否有可消除的组合
        setTimeout(() => {
            const matches = findMatches();
            if (matches.length > 0) {
                // 有消除，移动有效
                eliminateMatches(matches);
                setTimeout(() => {
                    fillBoard();
                    checkGameOver();
                }, 500);
            } else {
                // 没有消除，交换回来，移动无效
                swapTiles(targetTile, gameState.dragStartTile);
                gameState.moves--;
                
                // 重新更新瓦片标识
                updateTileIds();
                
                // 显示提示信息
                showMoveHint();
            }
        }, 300);
    }
    
    gameState.dragStartTile = null;
}

// 检查两个瓦片是否相邻
function isAdjacent(tile1, tile2) {
    if (!tile1 || !tile2) return false;
    
    const row1 = parseInt(tile1.dataset.row);
    const col1 = parseInt(tile1.dataset.col);
    const row2 = parseInt(tile2.dataset.row);
    const col2 = parseInt(tile2.dataset.col);
    
    return (Math.abs(row1 - row2) === 1 && col1 === col2) || 
           (Math.abs(col1 - col2) === 1 && row1 === row2);
}

// 交换两个瓦片
function swapTiles(tile1, tile2) {
    const tempWord = tile1.textContent;
    const tempChinese = tile1.dataset.chinese;
    const tempExample = tile1.dataset.example;
    const tempTranslation = tile1.dataset.translation;
    const tempColor = tile1.style.backgroundColor;
    
    tile1.textContent = tile2.textContent;
    tile1.dataset.word = tile2.dataset.word;
    tile1.dataset.chinese = tile2.dataset.chinese;
    tile1.dataset.example = tile2.dataset.example;
    tile1.dataset.translation = tile2.dataset.translation;
    tile1.style.backgroundColor = tile2.style.backgroundColor;
    
    tile2.textContent = tempWord;
    tile2.dataset.word = tempWord;
    tile2.dataset.chinese = tempChinese;
    tile2.dataset.example = tempExample;
    tile2.dataset.translation = tempTranslation;
    tile2.style.backgroundColor = tempColor;
    
    // 更新游戏板数组
    const row1 = parseInt(tile1.dataset.row);
    const col1 = parseInt(tile1.dataset.col);
    const row2 = parseInt(tile2.dataset.row);
    const col2 = parseInt(tile2.dataset.col);
    
    gameState.board[row1][col1] = tile1;
    gameState.board[row2][col2] = tile2;
}

// 查找匹配的组合
function findMatches() {
    const matches = [];
    
    // 检查行
    for (let row = 0; row < gameState.boardSize; row++) {
        for (let col = 0; col < gameState.boardSize - 2; col++) {
            const word1 = gameState.board[row][col].dataset.word;
            const word2 = gameState.board[row][col + 1].dataset.word;
            const word3 = gameState.board[row][col + 2].dataset.word;
            
            if (word1 === word2 && word2 === word3) {
                matches.push([
                    gameState.board[row][col],
                    gameState.board[row][col + 1],
                    gameState.board[row][col + 2]
                ]);
            }
        }
    }
    
    // 检查列
    for (let row = 0; row < gameState.boardSize - 2; row++) {
        for (let col = 0; col < gameState.boardSize; col++) {
            const word1 = gameState.board[row][col].dataset.word;
            const word2 = gameState.board[row + 1][col].dataset.word;
            const word3 = gameState.board[row + 2][col].dataset.word;
            
            if (word1 === word2 && word2 === word3) {
                matches.push([
                    gameState.board[row][col],
                    gameState.board[row + 1][col],
                    gameState.board[row + 2][col]
                ]);
            }
        }
    }
    
    return matches;
}

// 消除匹配的瓦片
function eliminateMatches(matches) {
    const eliminatedTiles = new Set();
    const eliminatedWords = new Set(); // 记录已消除的单词，避免重复朗读
    
    matches.forEach(match => {
        match.forEach(tile => {
            eliminatedTiles.add(tile);
            eliminatedWords.add(tile.dataset.word);
        });
    });
    
    // 为每个不同的单词朗读一次并显示卡片
    eliminatedWords.forEach(word => {
        // 找到对应的瓦片来获取完整信息
        const tile = Array.from(eliminatedTiles).find(t => t.dataset.word === word);
        if (tile) {
            // 增加练习次数
            gameState.wordPracticeCount[word] = (gameState.wordPracticeCount[word] || 0) + 1;
            
            // 朗读单词
            speakWord(word);
            
            // 显示单词卡片
            showWordCard(tile.dataset.word, tile.dataset.chinese, tile.dataset.example, tile.dataset.translation);
        }
    });
    
    // 处理所有瓦片的消除动画
    eliminatedTiles.forEach(tile => {
        tile.classList.add('matched');
        setTimeout(() => {
            tile.classList.remove('matched');
            tile.style.opacity = '0';
        }, 300);
    });
    
    // 计算得分
    const scoreGain = eliminatedTiles.size * 10;
    gameState.score += scoreGain;
    updateDisplay();
}

// 朗读单词
function speakWord(word) {
    if ('speechSynthesis' in window) {
        // 停止之前的语音
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.volume = 1.0;
        utterance.pitch = 1.0;
        
        // 确保语音播放
        utterance.onstart = () => console.log('开始朗读:', word);
        utterance.onerror = (e) => console.log('语音错误:', e);
        
        speechSynthesis.speak(utterance);
    } else {
        console.log('浏览器不支持语音合成');
    }
}

// 显示单词卡片
function showWordCard(english, chinese, example, translation) {
    // 移除之前的卡片
    const existingCard = document.querySelector('.word-card');
    if (existingCard) {
        existingCard.remove();
    }
    
    const card = document.createElement('div');
    card.className = 'word-card fade-in';
    card.innerHTML = `
        <div class="card-header">
            <h3>${english}</h3>
            <p class="chinese-meaning">${chinese}</p>
        </div>
        <div class="card-content">
            <div class="example-section">
                <h4>例句:</h4>
                <p class="english-example">${example}</p>
                <p class="chinese-translation">${translation}</p>
            </div>
        </div>
        <button class="close-card" onclick="this.parentElement.remove()">×</button>
    `;
    
    // 添加到页面右侧
    document.body.appendChild(card);
    
    // 3秒后自动消失
    setTimeout(() => {
        if (card.parentElement) {
            card.classList.remove('fade-in');
            card.classList.add('fade-out');
            setTimeout(() => {
                if (card.parentElement) {
                    card.remove();
                }
            }, 300);
        }
    }, 5000);
}

// 填充游戏板
function fillBoard() {
    const currentVocab = getCurrentVocabulary();
    
    for (let row = 0; row < gameState.boardSize; row++) {
        for (let col = 0; col < gameState.boardSize; col++) {
            const tile = gameState.board[row][col];
            if (tile.style.opacity === '0') {
                // 智能选择词汇，优先选择练习次数较少的
                const selectedVocab = selectOptimalVocab(currentVocab);
                
                tile.textContent = selectedVocab.english;
                tile.dataset.word = selectedVocab.english;
                tile.dataset.chinese = selectedVocab.chinese;
                tile.dataset.example = selectedVocab.example;
                tile.dataset.translation = selectedVocab.translation;
                tile.style.backgroundColor = selectedVocab.color;
                tile.style.opacity = '1';
                tile.classList.add('fade-in');
                
                // 新瓦片可以移动
                tile.dataset.tileId = `${row}-${col}`;
                
                // 只为新瓦片调整字体大小
                if (!tile.dataset.fontAdjusted) {
                    adjustFontSize(tile);
                }
                
                setTimeout(() => {
                    tile.classList.remove('fade-in');
                }, 300);
            }
        }
    }
}

// 智能选择最优词汇
function selectOptimalVocab(vocabulary) {
    // 找到练习次数最少的词汇
    let minCount = Infinity;
    let candidates = [];
    
    vocabulary.forEach(vocab => {
        const count = gameState.wordPracticeCount[vocab.english] || 0;
        if (count < minCount) {
            minCount = count;
            candidates = [vocab];
        } else if (count === minCount) {
            candidates.push(vocab);
        }
    });
    
    // 从候选词汇中随机选择一个
    return candidates[Math.floor(Math.random() * candidates.length)];
}

// 检查游戏是否结束
function checkGameOver() {
    const currentVocab = getCurrentVocabulary();
    if (gameState.score >= gameState.targetScore) {
        setTimeout(() => showLevelComplete(), 500);
    }
}

// 显示关卡完成
function showLevelComplete() {
    const timeElapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    modalTitle.textContent = `第${gameState.currentLevel}关完成！`;
    modalMessage.innerHTML = `
        恭喜你完成了第${gameState.currentLevel}关！<br>
        得分：${gameState.score}<br>
        用时：${timeString}<br>
        移动次数：${gameState.moves}<br>
        ${gameState.currentLevel < 3 ? '准备挑战下一关吗？' : '恭喜你完成了所有关卡！'}
    `;
    
    if (gameState.currentLevel < 3) {
        modalNextBtn.style.display = 'inline-block';
        modalRestartBtn.style.display = 'inline-block';
    } else {
        modalNextBtn.style.display = 'none';
        modalRestartBtn.style.display = 'inline-block';
    }
    
    gameOverModal.style.display = 'flex';
    stopTimer();
}

// 下一关
function nextLevel() {
    gameState.currentLevel++;
    gameState.score = 0;
    gameState.moves = 0;
    gameState.gameStarted = false;
    gameState.startTime = null;
    gameState.wordPracticeCount = {}; // 重置练习次数
    
    if (gameState.currentLevel <= 3) {
        updateDisplay();
        createVocabularyDisplay();
        startBtn.style.display = 'inline-block';
        reshuffleBtn.style.display = 'none';
        nextLevelBtn.style.display = 'none';
        restartBtn.style.display = 'none';
        gameOverModal.style.display = 'none';
        gameBoard.innerHTML = '';
    }
}

// 重新打乱游戏板
function reshuffleBoard() {
    if (!gameState.gameStarted) return;
    
    // 重置分数和移动次数
    gameState.score = 0;
    gameState.moves = 0;
    
    // 重新创建游戏板
    createGameBoard();
    
    // 更新显示
    updateDisplay();
    
    // 显示提示信息
    showReshuffleHint();
}

// 重新开始游戏
function restartGame() {
    gameState.currentLevel = 1;
    gameState.score = 0;
    gameState.moves = 0;
    gameState.gameStarted = false;
    gameState.startTime = null;
    gameState.wordPracticeCount = {}; // 重置练习次数
    
    updateDisplay();
    createVocabularyDisplay();
    startBtn.style.display = 'inline-block';
    reshuffleBtn.style.display = 'none';
    nextLevelBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    gameOverModal.style.display = 'none';
    gameBoard.innerHTML = '';
    stopTimer();
}

// 获取当前关卡词汇
function getCurrentVocabulary() {
    switch (gameState.currentLevel) {
        case 1: return vocabularyData.level1;
        case 2: return vocabularyData.level2;
        case 3: return vocabularyData.level3;
        default: return vocabularyData.level1;
    }
}

// 创建词汇显示
function createVocabularyDisplay() {
    const currentVocab = getCurrentVocabulary();
    vocabDisplay.innerHTML = '';
    
    currentVocab.forEach(item => {
        const vocabItem = document.createElement('div');
        vocabItem.className = 'vocab-item';
        vocabItem.style.backgroundColor = item.color;
        
        const practiceCount = gameState.wordPracticeCount[item.english] || 0;
        const progressBar = createProgressBar(practiceCount);
        
        vocabItem.innerHTML = `
            <div class="vocab-english">${item.english}</div>
            <div class="vocab-chinese">${item.chinese}</div>
            <div class="vocab-progress">
                <span class="progress-text">练习: ${practiceCount}次</span>
                ${progressBar}
            </div>
        `;
        vocabDisplay.appendChild(vocabItem);
    });
}

// 创建进度条
function createProgressBar(count) {
    const maxCount = 5; // 设置最大练习次数
    const percentage = Math.min((count / maxCount) * 100, 100);
    
    return `
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
    `;
}

// 更新显示
function updateDisplay() {
    scoreElement.textContent = gameState.score;
    currentLevelElement.textContent = gameState.currentLevel;
    
    const currentVocab = getCurrentVocabulary();
    vocabCountElement.textContent = currentVocab.length;
}

// 开始计时器
function startTimer() {
    gameState.gameTimer = setInterval(() => {
        if (gameState.startTime) {
            const elapsed = Date.now() - gameState.startTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            timeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// 停止计时器
function stopTimer() {
    if (gameState.gameTimer) {
        clearInterval(gameState.gameTimer);
        gameState.gameTimer = null;
    }
}

// 数组随机排序
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 测试语音功能
function testVoice() {
    speakWord('hello');
}

// 初始化游戏
document.addEventListener('DOMContentLoaded', initGame);
