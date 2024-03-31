function findMax (arr) {
    return Math.max(...arr)
}

function expect (value) {
    return {
        toBe: (toBeValue) => {
            if (toBeValue === value) {
                console.log('Pass！')
            } else {
                throw new Error('Error！')
            }
        }
    }
}

// test
function test (msg, func) {
    try {
        func()
        console.log(`${msg} ket thuc kiem thu`)
    } catch (err) {
        console.error(`${msg} Tra lai ket qua loi`)
    }
}

test('findMax', () => {
    expect(findMax([1, 2, 4, 3])).toBe(4) // pass hay không?
})