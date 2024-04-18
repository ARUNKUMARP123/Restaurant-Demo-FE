import { createContext } from 'react'

const SnackBarContext = createContext();

export const SnackBarProvider=SnackBarContext.Provider;
export const SnackBarConsumer=SnackBarContext.Consumer;