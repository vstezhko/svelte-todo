import {writable} from "svelte/store";
import {v4 as uuid} from 'uuid';

export const todoItems = writable([
    { id: uuid(),
    text: 'todo1',
    done: false
    },
    { id: uuid(),
    text: 'todo2',
    done: false
    },
]);

