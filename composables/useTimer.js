/**
 * Manipulates and saves time counter information
 */
export default () => {
    const stateTimer = reactive({
        isRunning: false,
        startTime: null,
        elapsedTime: 0,
        history: []
    })

    /**
     * starts the counter.
     */
    const startTimer = () => {
        stateTimer.isRunning = true
        stateTimer.startTime = 0
        counter()
    }

    /**
     * Ends the counter action and adds the value to the history.
     */
    const stopTimer = () => {
        stateTimer.isRunning = false
        const formattedTime = formatElapsedTime(stateTimer.elapsedTime)
        addToHistory({ time: formattedTime })
        stateTimer.elapsedTime = 0
    }

    /**
     * Just pause the counter
     */
    const pauseTimer = () => {
        stateTimer.isRunning = !stateTimer.isRunning
    }

    /**
     * Recursion to increment the seconds
     * @param {Number} value - Time value in seconds
     */
    const counter = (value = stateTimer.elapsedTime) => {
        if (!stateTimer.isRunning) return
        stateTimer.elapsedTime = value
        setTimeout(() => counter(value + 1), 1000)
    }

    /**
     * save time in history
     * @param {String} Entry - Time
     */
    const addToHistory = (entry) => {
        stateTimer.history.push(entry)
    }

    /**
     * Formats text in the desired pattern
     * @param {String} elapsedTime - Time in seconds
     * @return {String} - Formatted time
     */
    const formatElapsedTime = (elapsedTime) => {
        const hours = Math.floor(elapsedTime / 3600)
        const minutes = Math.floor((elapsedTime % 3600) / 60)
        const seconds = elapsedTime % 60
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    }

    /**
     * Convert and format then time
     */
    const pad = (value) => {
        return value.toString().padStart(2, '0')
    }

    return {
        stateTimer,
        startTimer,
        stopTimer,
        pauseTimer,
        addToHistory,
    }
}