"use client";
import { PersistGate } from "redux-persist/integration/react";
import store from "../store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";
import Preloader from "@/components/preloader/preloader";

export function Providers({ children }) {
  const persistor = persistStore(store);
  const pathname = usePathname();
  return (
    <Provider store={store}>
      <PersistGate loading={<Preloader loading={true} />} persistor={persistor}>
        {/* <AnimatePresence mode="wait"> */}
        {/* <motion.div key={pathname}> */}
        {children}
        {/* <motion.div
              className="slide-in"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div> */}
        {/* <motion.div
              className="slide-out"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div>
          </motion.div> */}
        {/* </AnimatePresence> */}
      </PersistGate>
    </Provider>
  );
}
