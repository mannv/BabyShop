/**
 * Created by man.nv on 1/11/18.
 */
export const CURRENT_NAVIGATION = 'CURRENT_NAVIGATION'

export function setCurrentNavigation(navigation) {
  console.log('vao den day roi nhe');
  return {
    type: CURRENT_NAVIGATION,
    navigation: navigation
  }
}
