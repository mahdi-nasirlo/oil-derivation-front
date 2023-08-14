import {chain} from "../middleware/chine";
import {redirectMiddleware} from "../middleware/redirect";
import {authenticateMiddleware} from "../middleware/authenticate";

export default chain([authenticateMiddleware, redirectMiddleware])







