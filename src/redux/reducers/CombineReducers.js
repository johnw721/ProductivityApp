import { combineReducers } from 'redux';

import settingsType from './settingsType';
import stageProps from './stageProps';
import textProps from './textProps';
import frequencyProps from './frequencyProps';
import supportProps from './supportProps';
import habitsProps from './habitProps';

const Reducers = combineReducers({
 settingsType,
 stageProps,
 textProps,
 frequencyProps,
 supportProps,
 habitsProps
})

export default Reducers;