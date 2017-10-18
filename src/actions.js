/*
 * action types
 */
export const UPDATE_NAME = 'UPDATE_NAME'

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
export function updateNameAction(text) {
    return { type: UPDATE_NAME, text }
}

