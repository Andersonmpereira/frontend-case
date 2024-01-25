export default () => {
    const stateTimer = reactive({
        isRunning: false,
        startTime: null,
        elapsedTime: 0,
        history: []
    })

    const startTimer = () => {
        stateTimer.isRunning = true
        stateTimer.startTime = 0
        counter()
    }

    const stopTimer = () => {
        stateTimer.isRunning = false
        const formattedTime = formatElapsedTime(stateTimer.elapsedTime)
        addToHistory({ time: formattedTime })
        stateTimer.elapsedTime = 0
    }

    const pauseTimer = () => {
        stateTimer.isRunning = !stateTimer.isRunning
    }

    const resetTimer = () => {
        stateTimer.isRunning = false
        stateTimer.startTime = null
        stateTimer.elapsedTime = 0
    }

    const counter = (value = stateTimer.elapsedTime) => {
        if (!stateTimer.isRunning) return
        stateTimer.elapsedTime = value
        setTimeout(() => counter(value + 1), 1000)
    }

    const addToHistory = (entry) => {
        stateTimer.history.push(entry)
    }

    const removeFromHistory = (entryId) => {
        stateTimer.history.splice(entryId, 1)
    }

    const formatElapsedTime = (elapsedTime) => {
        const hours = Math.floor(elapsedTime / 3600)
        const minutes = Math.floor((elapsedTime % 3600) / 60)
        const seconds = elapsedTime % 60
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    }

    const pad = (value) => {
        return value.toString().padStart(2, '0')
    }

    return {
        stateTimer,
        startTimer,
        stopTimer,
        pauseTimer,
        resetTimer,
        addToHistory,
        removeFromHistory,
    }
}