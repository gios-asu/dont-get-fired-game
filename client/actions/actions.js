export const ACTION_ENUM = {
  NEW_GAME: 'NEW_GAME',
  SHOW_CREDITS: 'SHOW_CREDITS',
  GO_HOME: 'GO_HOME',
  SELECT_PROGRAM: 'SELECT_PROGRAM',
  ADD_PROGRAM: 'ADD_PROGRAM',
  UNSELECT_PROGRAM: 'UNSELECT_PROGRAM'
};

export const SCENE_ENUM = {
  SPLASH_SCENE: 'SPLASH_SCENE',
  INTRO_SCENE: 'INTRO_SCENE',
  CREDITS_SCENE: 'CREDITS_SCENE',

};

export function newGame() {
  return { type: ACTION_ENUM.NEW_GAME };
}

export function selectProgram( programName ) {
  return { type: ACTION_ENUM.SELECT_PROGRAM, programName };
}
export function unselectProgram() {
  return { type: ACTION_ENUM.UNSELECT_PROGRAM };
}

export function addProgram( programName ) {
  return { type: ACTION_ENUM.ADD_PROGRAM, programName };
}

export function showCredits() {
  return { type: ACTION_ENUM.SHOW_CREDITS };
}

export function goHome(areYouSure = false) {
  return {
    type: ACTION_ENUM.GO_HOME,
    areYouSure
  };
}
