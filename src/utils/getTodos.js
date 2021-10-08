import {v4 as uuid} from 'uuid'

export function getTodos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: uuid(),
                    text: "item 1 from server",
                    done: false,
                },
                {
                    id: uuid(),
                    text: "item 2 from server",
                    done: true,
                },
                {
                    id: uuid(),
                    text: "item 3 from server",
                    done: false,
                }
            ])
        }, 1000)
    })
}