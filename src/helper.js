export const randomHexGenerator = () => {
    const aphabet = "ABCDEF"
    const numbers = "1234567890"

    let finalRes = "#"
    const totalStr = aphabet + numbers
    for (let i = 0; i < 6; i++) {
        const randomHex = Math.floor(Math.random() * 16)
        finalRes += totalStr[randomHex]
    }
    return finalRes

} 