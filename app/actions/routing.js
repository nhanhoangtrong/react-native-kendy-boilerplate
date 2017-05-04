export const ROUTING_BACK = 'ROUTING_BACK'
export function routingBack() {
    return {
        type: ROUTING_BACK,
    }
}

export const ROUTING_FORWARD = 'ROUTING_FORWARD'
export function routingForward(route) {
    return {
        type: ROUTING_FORWARD,
        route
    }
}

export const ROUTING_NAVIGATOR = 'ROUTING_NAVIGATOR'
export function routingNavigator(navigator) {
    return {
        type: ROUTING_NAVIGATOR,
        navigator
    }
}
