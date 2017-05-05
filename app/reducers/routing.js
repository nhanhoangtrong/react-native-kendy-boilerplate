import { ROUTING_INITIAL, ROUTING_BACK, ROUTING_FORWARD, ROUTING_REPLACE } from '../actions/routing'

export default (routing={routes: []}, action) => {
    switch (action.type) {
    case ROUTING_INITIAL:
        routing.routes.push(action.route)
        return routing
    case ROUTING_FORWARD:
        routing.routes.push(action.route)
        return routing
    case ROUTING_BACK:
        routing.routes.pop()
        return routing
    case ROUTING_REPLACE:
        routing.routes[routing.routes.length - 1] = action.route
        return routing
    default:
        return routing
    }
}
