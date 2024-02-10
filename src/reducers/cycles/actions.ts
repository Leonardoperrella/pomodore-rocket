import { Cycle } from './reducer'

export enum AcionTypes {
  ADD_NEW_CYLCE = 'ADD_NEW_CYLCE',
  INTERRUPT_CURRENT_CYLCE = 'INTERRUPT_CURRENT_CYLCE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: AcionTypes.ADD_NEW_CYLCE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: AcionTypes.INTERRUPT_CURRENT_CYLCE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: AcionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
