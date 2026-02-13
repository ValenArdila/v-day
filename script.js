const gifStages = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDA1N2lrYjM0MXM2NTM2dnQ5NzRlZTMzYXQ0dm52cHlyaW81cWk4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1202FEj8qyNg3K/giphy.gif",    // 0 normal
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXVkNWFhZWNyNzdmY2MxcnNlejFtdnNuNnBlMXgzdnlqMG0yMGtybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgkrtsDy4MhLq/giphy.gif",  // 1 confused
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXkwZWJnNHh5Mm11NmpwanRibWU4YXAwN2dqZWk0cnd3OTAwZTk2OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qv7WFppXtkqkM/giphy.gif",             // 2 pleading
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3l0emtwcDZkbm43dGJ0b2JkajhjMTN5d2U3OWhvcGFpbzN0ZmZrdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12Bpme5pTzGmg8/giphy.gif",             // 3 sad
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWN5ZDBoa3U3NDVoa3Y5eHBocW5xd2czNzNxZnB3cWN3ZnlidWpoZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U2nN0ridM4lXy/giphy.gif",       // 4 sadder
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeml4a2ZxMmN6Zjduems5Z3l1a25jMnN0cGZ4c2FrOXQ0M3hueDc1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aNFT7eG2rIKK715uLk/giphy.gif",             // 5 devastated
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczE4b3huNW9uNDU0MW5jd3JncHJ6M295MHJzaXNvYXoxMmloYjhxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yL9wlldvjwICc/giphy.gif",               // 6 very devastated
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHR3emMzcGxpOGo2YTQ1ZGs0MmpyNmdzM3J2dWRyM29uc2R3aWdzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6ILZ0aHS7uHMQ/giphy.gif"  // 7 crying runaway
]

const gifStagesYes = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHo1NXIyMDk5YzBydGU3ZWYwc2puNjc2YzRuYmZyaDZiczYweG1odSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dUszCAloOBDlm/giphy.gif", 
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHUwdmdlam9zNDFva2J5ejlybjVzaTc5NHhjZHVqdXYzb2I1YzVwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QZhCv07uIt5cI/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlkZDY4aHZ3OHY3M2tqNzB0dnFhejZ5eDUwY2RnOGdvNWluOXlzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F6Ipw1zPzkQ7e/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTh2ajA0aDNsbjI5dGQ3d2s4amhhcG43M3k3NDBzYnh2Ynd5cDk2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aKXDG5s2Fuzra/giphy.gif"

]
const noMessages = [
    "No",
    "¿Estás seguro? 🤔",
    "Piensalo otra vez ... 🥺",
    "¿Seguro que no fue un error? 😢",
    "Última oportunidad antes de que me ponga dramática… 💔",
    "Esto ya es personal, eh… 😤",
    "Ultima oportunidad¡ 😭",
    "Igual no podrás atraparme 😜"
]

const yesTeasePokes = [
    "¿Tan rápido?… Mmm, siento que te saltaste el modo difícil… 😏",
    "Wow, directo al “Sí”… ¿y si te digo que el botón “No” desbloqueaba algo interesante?",
    "Tu te lo pierdes 😈",
    "Clickea no, Te reto 😏"
]

// Grow the Yes button bigger each time, with maximum limits
const MAX_FONT_SIZE = 80      // tamaño máximo de letra en px
const MAX_PADDING_Y = 60      // padding máximo vertical
const MAX_PADDING_X = 120     // padding máximo horizontal

let yesTeasedCount = 0

let noClickCount = 0
let runawayEnabled = false
let musicPlaying = true

const catGif = document.getElementById('cat-gif')
const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const music = document.getElementById('bg-music')

// Autoplay: audio starts muted (bypasses browser policy), unmute immediately
music.muted = true
music.volume = 0.3
music.play().then(() => {
    music.muted = false
}).catch(() => {
    // Fallback: unmute on first interaction
    document.addEventListener('click', () => {
        music.muted = false
        music.play().catch(() => {})
    }, { once: true })
})

function toggleMusic() {
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.muted = false
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}

function handleYesClick() {
    if (!runawayEnabled) {
        // Tease her to try No first
        // Cambiar GIF según cuántas veces intentó decir Sí
        const gifIndexYes = Math.min(yesTeasedCount, gifStagesYes.length - 1)
        swapGif(gifStagesYes[gifIndexYes])

        const msg = yesTeasePokes[Math.min(yesTeasedCount, yesTeasePokes.length - 1)]
        showTeaseMessage(msg)
        yesTeasedCount++
        return
    }
    // Si ya terminó el ciclo de "No"
    swapGif(gifStagesYes[gifStagesYes.length - 1])
   
    window.location.href = 'yes.html'
   
}

function showTeaseMessage(msg) {
    let toast = document.getElementById('tease-toast')
    toast.textContent = msg
    toast.classList.add('show')
    clearTimeout(toast._timer)
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2500)
}

function handleNoClick() {
    noClickCount++

    // Cycle through guilt-trip messages
    const msgIndex = Math.min(noClickCount -1, noMessages.length - 1)
    noBtn.textContent = noMessages[msgIndex]

    // Grow the Yes button bigger each time
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize)
    const newFontSize = Math.min(currentSize * 1.35, MAX_FONT_SIZE)
    yesBtn.style.fontSize = `${newFontSize}px`

    const padY = Math.min(18 + noClickCount * 5, MAX_PADDING_Y)
    const padX = Math.min(45 + noClickCount * 10, MAX_PADDING_X)
    yesBtn.style.padding = `${padY}px ${padX}px`

    // Shrink No button to contrast
    if (noClickCount >= 2) {
        const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize)
        noBtn.style.fontSize = `${Math.max(noSize * 0.85, 10)}px`
    }

    // Swap cat GIF through stages
    const gifIndex = Math.min(noClickCount -1, gifStages.length - 1)
    swapGif(gifStages[gifIndex])

    // Runaway starts at click 5
    if (noClickCount >= noMessages.length && !runawayEnabled) {
        enableRunaway()
        runawayEnabled = true
    }
}

function swapGif(src) {
    catGif.style.opacity = '0'
    setTimeout(() => {
        catGif.src = src
        catGif.style.opacity = '1'
    }, 200)
}

function enableRunaway() {
    noBtn.addEventListener('mouseover', runAway)
    noBtn.addEventListener('touchstart', runAway, { passive: true })
}

function runAway() {
    const margin = 20
    const btnW = noBtn.offsetWidth
    const btnH = noBtn.offsetHeight
    const maxX = window.innerWidth - btnW - margin
    const maxY = window.innerHeight - btnH - margin

    const randomX = Math.random() * maxX + margin / 2
    const randomY = Math.random() * maxY + margin / 2

    noBtn.style.position = 'fixed'
    noBtn.style.left = `${randomX}px`
    noBtn.style.top = `${randomY}px`
    noBtn.style.zIndex = '50'
}
