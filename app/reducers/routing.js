import { ROUTING_NAVIGATOR, ROUTING_FORWARD, ROUTING_BACK } from '../actions/routing'

export default (routing={}, action) => {
    switch (action.type) {
    case ROUTING_FORWARD:
        return routing
    case ROUTING_BACK:
        return routing
    case ROUTING_NAVIGATOR:
        routing = { ...routing }
        routing.navigator = action.navigator
        return routing
    default:
        return routing
    }
}
