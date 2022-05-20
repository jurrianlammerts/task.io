import create from "zustand"

export type User = {
  id: string
  name: string
}

const defaultState = {
  user: null as User | null,
  finished: false,
}

type OnboardingState = Partial<typeof defaultState>

type OnboardingStoreState = {
  state: OnboardingState
  setState: (newState: OnboardingState) => void
  clearState: () => void
}

const useOnboardingStore = create<OnboardingStoreState>((set) => ({
  state: defaultState,
  setState: (newState: OnboardingState) =>
    set((state) => ({ state: { ...state.state, ...newState } })),
  clearState: () => set({ state: defaultState }),
}))

export default useOnboardingStore
