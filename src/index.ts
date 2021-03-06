import ENG from './ENG'
import FR from './FR'
import PL from './PL'

import { MARKETSETUPS } from './marketSetups'
import { TURNORDERSETUPS, TURNORDERCARDS } from './turnOrderSetups'

import { createNormalizedData } from './createNormalizedData'


const DEFAULTSUPPLYCOUNT = 9

export default {
  normalizedData: {
    ENG: createNormalizedData(ENG),
    FR: createNormalizedData(FR),
    PL: createNormalizedData(PL),
  },
  defaultSupplyCount: DEFAULTSUPPLYCOUNT,
  marketsetups: MARKETSETUPS,
  turnordersetups: TURNORDERSETUPS,
  turnordercards: TURNORDERCARDS,
}
