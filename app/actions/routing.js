export const ROUTING_INITIAL = 'ROUTING_INITIAL'
export function routingInitial(navigator, route) {
    return {
        type: ROUTING_INITIAL,
        route,
    }
}

export const ROUTING_BACK = 'ROUTING_BACK'
export function routingBack(navigator) {
    navigator.pop()
    return {
        type: ROUTING_BACK,
    }
}

export const ROUTING_FORWARD = 'ROUTING_FORWARD'
export function routingForward(navigator, route) {
    navigator.push({
        ...route
    })
    return {
        type: ROUTING_FORWARD,
        route,
    }
}

export const ROUTING_REPLACE = 'ROUTING_REPLACE'
export function routingNavigator(navigator, route) {
    navigator.replace({
        ...route
    })
    return {
        type: ROUTING_REPLACE,
        route,
    }
}
