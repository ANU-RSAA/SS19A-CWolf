import {TemplateActionTypes} from "./Actions";
import {templateManager} from "../../Lib/TemplateManager";

class TemplateStore {
    constructor(store) {
        this.store = store;
    }

    key() {
        return 'template';
    }

    getInitialState() {
        // Todo: Refactor the template manager here?
        return {
        }
    }

    reduce(state, action) {
        switch (action.type) {
            case TemplateActionTypes.ACTIVATE:
                action.template.inactive = !action.template.inactive;
                templateManager.updateActiveTemplates();
                return {
                    ...state
                };

            default:
                return state;
        }
    }
}

export default TemplateStore;