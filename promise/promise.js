


function getTodo(id) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id == 0) {
                reject({ erreur: "erreur" })
            } else {
                const todo = {
                    id,
                    title: `Todo id ${id}`,
                    completed: false
                }
                resolve(todo)
            }


        }, 500)
    })


    return p
}

// const pTodo = getTodo(0)
// pTodo.then(((todo) => {
//     console.log(todo)

// }), (err) => {
//     console.log(err)
// }).catch()


// getTodo(1).then((todo) => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then((todo) => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then((todo) => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then((todo) => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// })

// const p1 = getTodo(1)
// const p2 = getTodo(2)
// const p3 = getTodo(3)
// const p4 = getTodo(4)

// Promise.all([p1,p2,p3,p4]).then(arr=> console.log(arr))


async function main() {
    // const p1 = await getTodo(1)
    // console.log(p1)
    // const p2 = await getTodo(2)
    // console.log(p2)
    // const p3 = await getTodo(3)
    // console.log(p3)
    // const p4 = await getTodo(4)
    // console.log(p4)
    const p1 = getTodo(1)
    const p2 = getTodo(2)
    const p3 = getTodo(3)
    const p4 = getTodo(4)

    const arr= await Promise.all([p1,p2,p3,p4])
    console.log(arr)
}

main()